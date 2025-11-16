ServerEvents.recipes((event) => {
  /*TODO: 
    - Add recipes for other nodes
    - Remove old recipes
    - Checkout mutavis convertion recipes
    - Maybe checkout cauldron recipes 
    */
  event
    .custom({
      type: "hexalia:ritual_table",
      ingredients: [
        {
          item: "minecraft:amethyst_shard",
        },
        {
          item: "hexalia:sunfire_tomato",
        },
        {
          item: "minecraft:sunflower",
        },
      ],
      output: {
        item: "hexalia:fire_node",
      },
    })
    .id("hexalia:fire_node_from_ritual_table");

  event
    .custom({
      type: "hexalia:ritual_table",
      ingredients: [
        {
          item: "minecraft:amethyst_shard",
        },
        {
          item: "hexalia:galeberries",
        },
        {
          item: "minecraft:feather",
        },
      ],
      output: {
        item: "hexalia:air_node",
      },
    })
    .id("hexalia:air_node_from_ritual_table");

  event
    .custom({
      type: "hexalia:ritual_table",
      ingredients: [
        {
          item: "minecraft:amethyst_shard",
        },
        {
          item: "hexalia:siren_paste",
        },
        {
          item: "minecraft:ink_sac",
        },
      ],
      output: {
        item: "hexalia:water_node",
      },
    })
    .id("hexalia:water_node_from_ritual_table");

  event
    .custom({
      type: "hexalia:ritual_table",
      ingredients: [
        {
          item: "minecraft:amethyst_shard",
        },
        {
          item: "hexalia:mandrake",
        },
        {
          item: "minecraft:clay_ball",
        },
      ],
      output: {
        item: "hexalia:earth_node",
      },
    })
    .id("hexalia:earth_node_from_ritual_table");
});
