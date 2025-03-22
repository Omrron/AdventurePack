ServerEvents.recipes(event => {
    event.shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:ink_sac']);
    const recipes = event.getRecipes();
    console.log(recipes);
});