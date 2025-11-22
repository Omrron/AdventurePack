// in your attributeCommands (or another script file)

PlayerEvents.respawned((event) => {
  const newPlayer = event.player;
  newPlayer.sendSystemMessage(`here`);

  if (!newPlayer || !newPlayer.persistentData) {
    newPlayer.sendSystemMessage(`some null data: ${newPlayer}`);
    return;
  }

  const ATTRIBUTES = [
    "generic.max_health",
    "generic.attack_damage",
    "generic.movement_speed",
    // add other attr IDs as needed
  ];

  newPlayer.sendSystemMessage(`there`);
  const pd = newPlayer.persistentData;
  for (let attr of ATTRIBUTES) {
    let reaplyKey = `mods_${attr}`;
    newPlayer.sendSystemMessage(`mod attribute: ${reaplyKey}`);
    // load stored from the *original* or new player's data
    let stored = [];
    try {
      // Prefer reading from original (if available)
      newPlayer.sendSystemMessage(`persistent data: ${pd}`);
      let s = pd.getString(reaplyKey);
      newPlayer.sendSystemMessage(`attribute modifiers: ${s}`);
      stored = s ? JSON.parse(s) : [];
    } catch (e) {
      newPlayer.sendSystemMessage(`error ${e}`);
      stored = [];
    }

    newPlayer.sendSystemMessage(`stored: ${stored}`);
    for (let m of stored) {
      newPlayer.sendSystemMessage(`stored modifier: ${m}`);
      if (!m || !m.id) continue;
      try {
        newPlayer.sendSystemMessage(`adding the attribute ${attr}`);
        newPlayer.modifyAttribute(attr, m.id, m.amount, m.operation);
      } catch (e) {}
      try {
        newPlayer.sendSystemMessage(`removing the attribute ${attr}`);
        newPlayer.removeAttributeModifier(attr, m.id);
      } catch (e) {
        console.log(
          `Failed to reapply mod ${m.id} for attribute ${attr}: ${e}`
        );
      }
    }
  }
});
