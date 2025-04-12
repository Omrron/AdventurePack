/**
 * @param {Internal.RecipeFilter_} filters 
 * @param {string} stage 
 * @param {Internal.RecipesEventJS} event 
 */
const removeRecipeFromStage = (filters, stage, event) => {
    filters.forEach((filter) => {
        event.forEachRecipe(filter, (recipe) => {
            recipe.id(recipe.getId() + 'manualonly').stage(stage);
        })
    });
}