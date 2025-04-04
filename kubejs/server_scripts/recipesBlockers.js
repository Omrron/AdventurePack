ServerEvents.recipes((event) => {
    /**
     * @param {Internal.RecipeFilter_[]}
     * @param {Internal.Ingredient_} ouput
     */
    const filters = [{mod:"irons_spellbooks"}, {type:"irons_spellbooks:scroll_forge"}];
    event.printAllTypes();
    removeRecipeFromStage(filters, "one", event);
});

/**
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