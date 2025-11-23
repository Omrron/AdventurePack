// attributeCommands.js
ServerEvents.commandRegistry((event) => {
  const cmds = event.commands;
  const args = event.arguments;

  /**
   *
   * @param {Internal.CommandContext<Internal.CommandSourceStack>} ctx
   * @returns {Internal.ServerPlayer?}
   */
  function getPlayer(ctx) {
    try {
      return ctx.getSource().getPlayer();
    } catch (e) {
      console.log(`Failed getting player ${e}`);
      return null;
    }
  }

  function sendFailure(src, text) {
    try {
      src.sendFailure(Component.literal(text));
    } catch (e) {
      console.log("sendFailure failure: " + text);
    }
  }

  function sendSuccess(src, text) {
    try {
      src.sendSuccess(Component.literal(text), false);
    } catch (e) {
      console.log("sendSuccess failure: " + text);
    }
  }

  function safeGetAttributeInstance(player, attributeId) {
    try {
      return player.getAttribute(attributeId);
    } catch (e) {
      console.log("GetAttribute failure: " + e);
      return null;
    }
  }

  function addModifier(player, attributeId, modId, amount, operation) {
    // remove existing if any
    try {
      player.removeAttributeModifier(attributeId, modId);
    } catch (e) {}
    try {
      player.modifyAttribute(attributeId, modId, amount, operation);
      return true;
    } catch (e) {
      return false;
    }
  }

  function removeModifier(player, attributeId, modId) {
    try {
      // Get the attribute instance; this is where modifiers live
      let inst = player.getAttribute(attributeId);
      if (!inst) {
        player.sendSystemMessage(
          `Attribute ${attributeId} not found on player.`
        );
        return false;
      }

      // Remove the modifier from the attribute instance
      inst.removeModifier(modId);

      let stored = loadStored(player, attributeId); // your function to get stored mods
      stored = stored.filter((m) => m && m.id !== modId);
      saveStored(player, attributeId, stored); // your function to save back

      return true;
    } catch (e) {
      player.sendSystemMessage(`Failed to remove modifier: ${e}`);
      return false;
    }
  }

  function loadStored(player, attributeId) {
    var loadedKey = "mods_" + attributeId;
    if (!player || !player.persistentData) return [];
    if (!player.persistentData.contains(loadedKey)) return [];
    try {
      var s = player.persistentData.getString(loadedKey);
      var arr = JSON.parse(s);
      if (Array.isArray(arr)) return arr;
    } catch (e) {
      player.persistentData.remove(loadedKey);
    }
    return [];
  }

  function saveStored(player, attributeId, arr) {
    try {
      var savedKey = "mods_" + attributeId;
      player.persistentData.putString(savedKey, JSON.stringify(arr || []));
    } catch (e) {
      console.log("Error saving stored mods for " + attributeId + ": " + e);
    }
  }

  /**
   *
   * @param {Internal.CommandContext<Internal.CommandSourceStack>} ctx
   * @param {Internal.AttributeModifier$Operation_} operation
   * @returns {void}
   */
  function handleAdd(ctx, operation) {
    const src = ctx.getSource();
    const player = getPlayer(ctx);
    player.getAttribute().addPermanentModifier();
    if (!player) {
      sendFailure(src, "You must be a player to run this command.");
    }

    const attributeId = args.STRING.getResult(ctx, "attribute");
    const value = args.DOUBLE.getResult(ctx, "value");
    if (value === undefined || value === null || isNaN(value)) {
      sendFailure(src, "Invalid value.");
    }
    const amount = Number(value);

    // generate mod ID
    const modId = generateUuid();

    const inst = safeGetAttributeInstance(player, attributeId);
    if (!inst) {
      sendFailure(
        src,
        "Attribute " + attributeId + " not present on this entity."
      );
    }

    const ok = addModifier(player, attributeId, modId, amount, operation);
    if (!ok) {
      sendFailure(src, "Failed to add modifier.");
    }

    // store persistently
    var stored = loadStored(player, attributeId);
    stored.push({ id: modId, amount: amount, operation: operation });
    saveStored(player, attributeId, stored);

    sendSuccess(
      src,
      "Added modifier " +
        modId +
        " => " +
        amount +
        " (" +
        operation +
        ") on " +
        attributeId
    );
  }

  function handleRemove(ctx) {
    const src = ctx.getSource();
    const player = getPlayer(ctx);
    if (!player) {
      sendFailure(src, "You must be a player to run this command.");
      return 0;
    }

    const attributeId = args.STRING.getResult(ctx, "attribute");
    const modId = args.STRING.getResult(ctx, "id");

    const inst = safeGetAttributeInstance(player, attributeId);
    if (!inst) {
      sendFailure(
        src,
        "Attribute " + attributeId + " not present on this entity."
      );
      return 0;
    }

    player.sendSystemMessage(
      `attempting to remove mod ${modId} from ${player} of attribute ${attributeId}`
    );
    const ok = removeModifier(player, attributeId, modId);
    if (!ok) {
      sendFailure(src, "Failed to remove modifier.");
      return 0;
    }

    var stored = loadStored(player, attributeId);
    var newArr = [];
    for (var i = 0; i < stored.length; i++) {
      if (!stored[i] || stored[i].id === modId) continue;
      newArr.push(stored[i]);
    }
    saveStored(player, attributeId, newArr);

    sendSuccess(src, "Removed modifier " + modId + " from " + attributeId);
    return 1;
  }

  function handleView(ctx) {
    const src = ctx.getSource();
    const player = getPlayer(ctx);
    if (!player) {
      sendFailure(src, "You must be a player to run this command.");
      return 0;
    }

    const attributeId = args.STRING.getResult(ctx, "attribute");

    const inst = safeGetAttributeInstance(player, attributeId);
    if (!inst) {
      sendFailure(
        src,
        "Attribute " + attributeId + " not present on this entity."
      );
      return 0;
    }

    // gather current modifiers
    var cur = [];
    try {
      var mods = inst.getModifiers();
      if (mods) {
        if (mods.iterator) {
          var it = mods.iterator();
          while (it.hasNext()) {
            var mm = it.next();
            var mid = mm.getId ? String(mm.getId()) : "unknown";
            var mamp = mm.getAmount ? String(mm.getAmount()) : "unknown";
            var mop = mm.getOperation ? String(mm.getOperation()) : "unknown";
            cur.push(mid + ":" + mamp + "(" + mop + ")");
          }
        } else if (mods.length !== undefined) {
          for (var j = 0; j < mods.length; j++) {
            var mm2 = mods[j];
            var mid2 = mm2.getId ? String(mm2.getId()) : "unknown";
            var mamp2 = mm2.getAmount ? String(mm2.getAmount()) : "unknown";
            var mop2 = mm2.getOperation
              ? String(mm2.getOperation())
              : "unknown";
            cur.push(mid2 + ":" + mamp2 + "(" + mop2 + ")");
          }
        }
      }
    } catch (e) {
      console.log("Error gathering modifiers: " + e);
    }

    var stored = loadStored(player, attributeId);
    var msg =
      "Attribute " +
      attributeId +
      " — Current mods: " +
      cur.length +
      ", Stored mods: " +
      stored.length +
      "\n";
    if (cur.length) msg += "Current: " + cur.join(", ") + "\n";
    if (stored.length) {
      var parts = [];
      for (var k = 0; k < stored.length; k++) {
        parts.push(
          stored[k].id +
            ":" +
            stored[k].amount +
            "(" +
            stored[k].operation +
            ")"
        );
      }
      msg += "Stored: " + parts.join(", ");
    }

    player.sendSystemMessage(Component.literal(msg));
    return 1;
  }

  // register commands
  // /addmod <attribute> <value> <operation>
  event.register(
    cmds
      .literal("addmod")
      .then(
        cmds
          .argument("attribute", args.STRING.create(event))
          .then(
            cmds
              .argument("value", args.DOUBLE.create(event))
              .then(
                cmds
                  .argument("operation", args.STRING.create(event))
                  .executes((ctx) =>
                    handleAdd(ctx, args.STRING.getResult(ctx, "operation"))
                  )
              )
          )
      )
  );

  // /removemod <attribute> <id>
  event.register(
    cmds
      .literal("removemod")
      .then(
        cmds
          .argument("attribute", args.STRING.create(event))
          .then(
            cmds
              .argument("id", args.STRING.create(event))
              .executes((ctx) => handleRemove(ctx))
          )
      )
  );

  // /viewmod <attribute>
  event.register(
    cmds
      .literal("viewmod")
      .then(
        cmds
          .argument("attribute", args.STRING.create(event))
          .executes((ctx) => handleView(ctx))
      )
  );
});
