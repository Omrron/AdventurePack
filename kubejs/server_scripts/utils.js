/**
 * @param {Internal.RecipeFilter_} filters 
 * @param {string} stage 
 * @param {Internal.RecipesEventJS} event 
 */
const removeRecipeFromStage = (filters, stage, event) => {
    filters.forEach((filter) => {
        event.forEachRecipe(filter, (b) => {
            b.id(b.getId() + 'manualonly').stage(stage);
        })
    });
}