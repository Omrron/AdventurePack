ServerEvents.recipes((event) => {
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: 1,
        output: "minecraft:potion",
        functions: [
            {
                function: "minecraft:set_potion",
                id: "minecraft:slowness"
            }
        ],
        quantity: 7,
        items: ["minecraft:stone"],
        patterns: ["mna:manaweave_patterns/circle"],
    });
    console.log("I tried");
});
