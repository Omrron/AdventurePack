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
})