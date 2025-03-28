/**
 * @param {Internal.RecipesEventJS} event 
 */
ServerEvents.recipes(event => {
    event.shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:ink_sac']);

});


ServerEvents.recipes((event) => {
    /**
     * @param {Internal.RecipeFilter_[]}
     */
    const filters = [
        {mod:"irons_spellbooks"},
        {type:"irons_spellbooks:scroll_forge"},
        { exact: false, output: 'irons_spellbooks:scroll' },
        { output: 'irons_spellbooks:rare_ink' },
        {output: "oak_planks"}
    ];

    removeRecipeFromStage(filters, "one", event);
});


/**
 * 
 * @param {Internal.RecipeFilter_} filters 
 * @param {string} stage 
 * @param {Internal.RecipesEventJS} event 
 */
const removeRecipeFromStage = (filters, stage, event) => {
    filters.forEach((filter) => {
        event.forEachRecipe(filter, (b) => {
            event.addRecipe(b, true).stage(stage);
        })
    });
}