ServerEvents.recipes(event => {
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: 1,
        output: "hexalia:sunfire_tomato_seeds",
        quantity: 1,
        items: ["minecraft:wheat_seeds"],
        patterns: ["mna:manaweave_patterns/circle"],
    });
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: 1,
        output: "hexalia:siren_kelp",
        quantity: 1,
        items: ["minecraft:kelp"],
        patterns: ["mna:manaweave_patterns/triangle"],
    });
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: 1,
        output: "hexalia:mandrake_seeds",
        quantity: 1,
        items: ["minecraft:wheat_seeds"],
        patterns: ["mna:manaweave_patterns/square"],
    });
    
    event.custom(/**
        * @type {Internal.RecipeJS}
        */{
        type: 'mna:manaweaving-recipe',
        tier: 3,
        output: Item.of("irons_spellbooks:common_ink"),
        items: [
            'minecraft:ink_sac',
            'irons_spellbooks:arcane_essence',
            'mna:chimerite_gem',
            'minecraft:glass_bottle',
        ],
        patterns: [
            "mna:manaweave_patterns/circle",
            "mna:manaweave_patterns/knot",
            "mna:manaweave_patterns/knot2",
            "mna:manaweave_patterns/diamond",
        ]
    });
    event.custom(/**
        * @type {Internal.RecipeJS}
        */{
        type: 'mna:manaweaving-recipe',
        tier: 3,
        output: Item.of("irons_spellbooks:common_ink"),
        quantity: 8,
        items: [
            'minecraft:ink_sac',
            'irons_spellbooks:arcane_essence',
            'minecraft:nether_star',
            'minecraft:glass_bottle',
        ],
        patterns: [
            "mna:manaweave_patterns/circle",
            "mna:manaweave_patterns/knot",
            "mna:manaweave_patterns/knot2",
            "mna:manaweave_patterns/diamond",
        ]
    });
})