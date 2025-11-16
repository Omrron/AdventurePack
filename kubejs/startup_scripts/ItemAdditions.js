StartupEvents.registry("item", (event) => {
  event
    .create("skill_point", "basic")
    .glow(true)
    .fireResistant(true)
    .rarity("alexscaves:rainbow")
    .displayName("Skill Point")
    .tooltip("Can be traded in the skills quest menu")
    .maxStackSize(64);

  event
    .create("stat_point_r", "basic")
    .glow(true)
    .fireResistant(true)
    .rarity("alexscaves:rainbow")
    .displayName("Stat Point")
    .tooltip("Can be traded in the skills quest menu")
    .maxStackSize(64);

  event
    .create("stat_point_g", "basic")
    .glow(true)
    .fireResistant(true)
    .rarity("alexscaves:rainbow")
    .displayName("Stat Point")
    .tooltip("Can be traded in the skills quest menu")
    .maxStackSize(64);
});
