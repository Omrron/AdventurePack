/**
 * @param {Internal.RecipesEventJS} event 
 */
ServerEvents.recipes(event => {
    event.shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:ink_sac']);

});