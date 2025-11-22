/**
 * @param {Internal.RecipeFilter_} filters
 * @param {string} stage
 * @param {Internal.RecipesEventJS} event
 */
const removeRecipeFromStage = (filters, stage, event) => {
  filters.forEach((filter) => {
    event.forEachRecipe(filter, (recipe) => {
      recipe.id(recipe.getId() + "manualonly").stage(stage);
    });
  });
};

const generateUuid = () => {
  const s = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return (
    "$" + s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s()
  );
};
