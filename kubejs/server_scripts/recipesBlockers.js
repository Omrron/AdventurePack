/**
 * @param {Internal.RecipesEventJS} event
 */
ServerEvents.recipes((event) => {
    /**
     * @param {Internal.RecipeFilter_[]}
     * @param {Internal.Ingredient_} ouput
     */
    const filters = [{mod:"irons_spellbooks"}, {type:"irons_spellbooks:scroll_forge"}, {output:"oak_planks"}];
    event.printAllTypes();
    removeRecipeFromStage(filters, "one", event);
});

