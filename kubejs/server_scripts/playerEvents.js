// Function that iterates through saved boosts and reapplies them (no change needed)
// NOTE: You must include this function definition OR put it in a global helper file.
function reapplyAllBoosts(player) {
  // 1. Check if the 'chosen_attributes' tag exists at all.
  if (!player.persistentData.contains("chosen_attributes")) {
    // If the tag doesn't exist (new player), we stop.
    return;
  }

  // 2. Get the list (we know it exists due to the check above).
  const boosts = player.persistentData.getList("chosen_attributes");

  // 3. CRITICAL CHECK: Ensure the list is not empty before iterating.
  if (boosts.isEmpty()) {
    // If the list is empty (e.g., initialized but never populated), we stop.
    return;
  }

  //   boosts.forEach((boost) => {
  //     const uuid = boost.getString("uuid");
  //     const attribute = boost.getString("attribute");
  //     const value = boost.getFloat("value");
  //     const operation = boost.getString("operation");

  //     // Execute the single-boost function with FOUR arguments
  //     player.server.runCommandSilent(
  //       `execute as ${player.username} run function my_pack:apply_single_boost ${uuid} ${attribute} ${value} ${operation}`
  //     );
  //   });

  player.tell("All chosen attributes have been restored.");
}

// ----------------------------------------------------
// EVENT 1: Player Logs In (FIXED KJS6 Syntax)
// ----------------------------------------------------
// This hook directly replaces onEvent('player.logged_in', ...)
// KJS6 uses the event object directly.
PlayerEvents.loggedIn((event) => {
  // Apply when a player joins, in case a server restart resets attributes
  reapplyAllBoosts(event.player);
});

// ----------------------------------------------------
// EVENT 2: Player Respawned (FIXED KJS6 Syntax)
// ----------------------------------------------------
// This hook directly replaces onEvent('player.respawned', ...)
PlayerEvents.respawned((event) => {
  // Apply when a player dies and respawns
  // Add a slight delay to ensure the attribute component is initialized post-respawn
  event.server.schedule(2, event.player, (callback) => {
    reapplyAllBoosts(callback.data);
  });
});
