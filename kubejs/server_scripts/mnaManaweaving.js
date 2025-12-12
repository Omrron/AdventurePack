ServerEvents.recipes((event) => {
  event.remove({ output: "hexalia:athame" });
  event.remove({ output: "hexalia:fire_node" });
  event.remove({ output: "hexalia:water_node" });
  event.remove({ output: "hexalia:earth_node" });
  event.remove({ output: "hexalia:air_node" });
  event.remove({ output: "mna:fall_charm" });
  event.remove({ output: "mna:drown_charm" });
  event.remove({ output: "mna:burn_charm" });
  event.remove({ output: "mna:bed_charm" });

  event.custom({
    type: "mna:manaweaving-recipe",
    tier: 1,
    output: "hexalia:mutavis",
    quantity: 1,
    items: [
      "minecraft:potato",
      "hexalia:tree_resin",
      "minecraft:kelp",
      "minecraft:poppy",
      "minecraft:wheat_seeds",
      "minecraft:bone_meal",
    ],
    patterns: [
      "mna:manaweave_patterns/circle",
      "mna:manaweave_patterns/square",
      "mna:manaweave_patterns/triangle",
    ],
  });

  event.custom({
    type: "mna:manaweaving-recipe",
    tier: 1,
    output: "hexalia:athame",
    quantity: 1,
    items: ["minecraft:stick", "minecraft:flint", "mna:vinteum_dust"],
    patterns: [
      "mna:manaweave_patterns/slash",
      "mna:manaweave_patterns/backslash",
    ],
  });

  event.custom(
    /**
     * @type {Internal.RecipeJS}
     */ {
      type: "mna:manaweaving-recipe",
      tier: 1,
      output: Item.of("mna:fall_charm"),
      items: [
        "minecraft:bone",
        "mutantmonsters:mutant_skeleton_limb",
        "minecraft:feather",
        "minecraft:string",
        "minecraft:black_dye",
        "mna:vinteum_dust",
      ],
      patterns: [
        "mna:manaweave_patterns/triangle",
        "mna:manaweave_patterns/circle",
        "mna:manaweave_patterns/triangle",
      ],
    }
  );

  event.custom(
    /**
     * @type {Internal.RecipeJS}
     */ {
      type: "mna:manaweaving-recipe",
      tier: 1,
      output: Item.of("mna:drown_charm"),
      items: [
        "minecraft:sugar_cane",
        "mutantmonsters:mutant_skeleton_limb",
        "minecraft:feather",
        "minecraft:string",
        "minecraft:black_dye",
        "mna:vinteum_dust",
      ],
      patterns: [
        "mna:manaweave_patterns/circle",
        "mna:manaweave_patterns/triangle",
        "mna:manaweave_patterns/circle",
      ],
    }
  );

  event.custom(
    /**
     * @type {Internal.RecipeJS}
     */ {
      type: "mna:manaweaving-recipe",
      tier: 1,
      output: Item.of("mna:burn_charm"),
      items: [
        "minecraft:coal",
        "mutantmonsters:mutant_skeleton_limb",
        "minecraft:feather",
        "minecraft:string",
        "minecraft:black_dye",
        "mna:vinteum_dust",
      ],
      patterns: [
        "mna:manaweave_patterns/slash",
        "mna:manaweave_patterns/square",
        "mna:manaweave_patterns/backslash",
      ],
    }
  );

  event.custom(
    /**
     * @type {Internal.RecipeJS}
     */ {
      type: "mna:manaweaving-recipe",
      tier: 1,
      output: Item.of("mna:bed_charmr"),
      items: [
        "mutantmonsters:mutant_skeleton_limb",
        "minecraft:ender_pearl",
        "minecraft:feather",
        "minecraft:string",
        "minecraft:black_dye",
        "mna:purified_vinteum_dust",
      ],
      patterns: [
        "mna:manaweave_patterns/triangle",
        "mna:manaweave_patterns/square",
        "mna:manaweave_patterns/triangle",
      ],
    }
  );
});
