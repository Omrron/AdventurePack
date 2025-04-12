/**
 * @param {Internal.RecipesEventJS} event
 */
ServerEvents.recipes((event) => {
    /**
     * @param {Internal.RecipeFilter_[]}
     * @param {Internal.Ingredient_} ouput
     */
    const filters = [{mod:"irons_spellbooks"}, {type:"irons_spellbooks:scroll_forge"}];
    removeRecipeFromStage(filters, "one", event);

    // stage one
    removeRecipeFromStage([{input: 'minecraft:diamond'}, {input: 'minecraft:emerald'}], 'one', event);
    removeRecipeFromStage([{input: 'minecraft:diamond', type: 'mna:manaweaving-recipe'}, {input: 'minecraft:emerald', type: 'mna:manaweaving-recipe'}], 'one', event);
    removeRecipeFromStage([{input: 'minecraft:diamond', type: 'create:mechanical_crafting'}, {input: 'minecraft:emerald', type: 'create:mechanical_crafting'}], 'one', event);
    removeRecipeFromStage([{input: 'minecraft:diamond', type: 'create:mixing'}, {input: 'minecraft:emerald', type: 'create:mixing'}], 'one', event);
    removeRecipeFromStage([{mod: 'create'}], 'one', event);
});

