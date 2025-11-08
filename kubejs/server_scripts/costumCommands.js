// This is the core logic that the FTB Quest reward will run.
// We will create a command that saves the boost and then applies it immediately.
ServerEvents.commandRegistry((event) => {
  const {
    commands: { literal, argument },
    arguments: { FLOAT, STRING },
  } = event;

  event.register(
    literal("choose_boost")
      .requires((src) => src.isPlayer())

      // --- 1. HEALTH BOOST ---
      .then(
        literal("health")
          // Argument 1: Amount (FLOAT)
          .then(
            argument("amount", FLOAT.create(event))
              // Argument 2: Operation (STRING)
              .then(
                argument("operation", STRING.create(event)) // <-- NEW STRING ARGUMENT
                  .executes((ctx) => {
                    const player = ctx.source.player;
                    const boost_value = ctx.getArgument("amount");
                    const boost_operation = ctx.getArgument("operation"); // <-- GET OPERATION STRING

                    // Basic validation to prevent server errors from typos
                    if (
                      !["add", "multiply_base", "multiply"].includes(
                        boost_operation.toLowerCase()
                      )
                    ) {
                      player.tell(
                        `§cError: Invalid operation type "${boost_operation}". Must be add, multiply_base, or multiply.`
                      );
                      return 0;
                    }

                    const new_uuid = generateUuid();
                    const attribute = "minecraft:generic.max_health";

                    // 1. Create a new boost object (MUST save the operation type!)
                    const new_boost = {
                      uuid: new_uuid,
                      attribute: attribute,
                      value: boost_value,
                      operation: boost_operation, // <-- SAVE OPERATION IN PERSISTENT DATA
                    };

                    // 2. Save it to the player's persistent list
                    player.persistentData
                      .getList("chosen_attributes", true)
                      .add(new_boost);

                    // 3. Apply the boost immediately (passing the operation as the fourth argument)
                    player.server.runCommandSilent(
                      `execute as ${player.username} run function my_pack:apply_single_boost ${new_uuid} ${attribute} ${boost_value} ${boost_operation}`
                    );

                    player.tell(
                      `Max Health +${boost_value} applied via ${boost_operation.toUpperCase()} permanently!`
                    );
                    return 1;
                  })
              )
          )
      )
    // ... (You would copy and paste this structure for 'speed', 'attack_damage', etc.)
  );
});
