// --- JSDOC TYPE DEFINITIONS (For IDE Autocompletion) ---

/**
 * @typedef {Object.<string, MobParams>} MobParamsConfig
 */
/** @type {MobParamsConfig} */
const MOB_CONFIG = global.MOB_PARAMS || {};

// Load required Java classes
const AttributeModifier = Java.loadClass(
  "net.minecraft.world.entity.ai.attributes.AttributeModifier"
);
const Uuid = Java.loadClass("java.util.UUID");

// Define a consistent, unique UUID for the modifiers.
// This is crucial to prevent the modifier from stacking.
const HEALTH_MODIFIER_UUID = Uuid.fromString(
  "8747c320-f138-4e89-8067-279c2357fa12"
);
const DAMAGE_MODIFIER_UUID = Uuid.fromString(
  "f0a3594b-4a57-4187-8d2a-4384e511c5f3"
);

/**
 * @type {Internal.AttributeModifier$Operation_}
 */
const MODIFIER_OP = "multiply_base";

// --- MAIN ENTITY EVENTS ---
const changedMobs = Object.keys(MOB_CONFIG).map((key) => MOB_CONFIG[key]);

EntityEvents.spawned((event) => {
  const spawningEntity = event.entity;

  // 1. Check if the configuration object is empty
  if (Object.keys(MOB_CONFIG).length === 0) {
    console.warn(
      "Mob scaling configuration (MOB_PARAMS) is empty or missing from global scope!"
    );
    return;
  }

  changedMobs.forEach((mob) => {
    if (spawningEntity.type.toString() !== mob.id) return;

    // 2. Count players within the configured range
    const players = spawningEntity.level.getEntities().filter((entity) => {
      /**
       * @type {Internal.Entity}
       */
      const playerEntity = entity;
      return (
        playerEntity.isPlayer() &&
        playerEntity.getDistance(spawningEntity.position()) < mob.range
      );
    });

    const playerCount = players.length + 1;

    // --- DEFENSIVE CHECK: Skip boost if 1 or 0 players are present ---
    if (playerCount <= 1) {
      // Although the mob just spawned and theoretically has no modifiers,
      // we defensively remove them to prevent stacking if this logic were
      // accidentally placed in a tick handler or if the spawn event fires twice.

      /**
       * @type {Internal.AttributeInstance}
       */
      let healthAttr = spawningEntity
        .getAttributes()
        .getInstance("minecraft:generic.max_health");
      let healthMod = healthAttr.getModifier(HEALTH_MODIFIER_UUID);
      if (!!healthMod) {
        healthAttr?.removeModifier(HEALTH_MODIFIER_UUID.toString());
      }
      let damageAttr = spawningEntity
        .getAttributes()
        .getInstance("minecraft:generic.attack_damage");
      let damageMod = damageAttr.getModifier(DAMAGE_MODIFIER_UUID);
      if (!!damageMod) {
        damageAttr?.removeModifier(DAMAGE_MODIFIER_UUID);
      }

      return;
    }

    // 3. Calculate Multiplier (Runs ONLY if playerCount >= 2)
    let extraPlayers = playerCount - 1; // Boost applies only to extra players
    console.log(extraPlayers);

    // subtracting 1 because a 0.5 modiffier multiplies by 1.5
    let healthMultiplier = extraPlayers * (mob.healthBoost - 1);
    let damageMultiplier = extraPlayers * (mob.damageBoost - 1);

    // --- Apply Health Boost ---
    /**
     * @type {Internal.AttributeInstance}
     */
    let healthAttr = spawningEntity
      .getAttributes()
      .getInstance("minecraft:generic.max_health");
    console.log(healthAttr);
    if (healthAttr) {
      // Remove previous instances of our modifier
      healthAttr.removeModifier(HEALTH_MODIFIER_UUID);

      // Create the new modifier: (UUID, name, amount, operation)
      let healthMod = new AttributeModifier(
        HEALTH_MODIFIER_UUID,
        "Multiplayer Health Boost",
        healthMultiplier,
        MODIFIER_OP
      );

      // Add the modifier to the entity
      healthAttr.addPermanentModifier(healthMod);

      // Heal to full based on the new max health value
      spawningEntity.heal(healthAttr.getValue());
    }

    // --- Apply Damage Boost ---
    let damageAttr = spawningEntity
      .getAttributes()
      .getInstance("minecraft:generic.attack_damage");
    if (damageAttr) {
      damageAttr.removeModifier(DAMAGE_MODIFIER_UUID);

      let damageMod = new AttributeModifier(
        DAMAGE_MODIFIER_UUID,
        "Multiplayer Damage Boost",
        damageMultiplier,
        MODIFIER_OP
      );
      damageAttr.addPermanentModifier(damageMod);
    }

    // Optional log for debugging
    console.info(
      `[MobScaler] ${spawningEntity.type.toString()} buffed for ${playerCount} players. Health: ${(
        healthMultiplier + 1
      ).toFixed(2)}x Damage: ${(1 + damageMultiplier).toFixed(2)}x`
    );
  });
});
