/**
 * @param {Internal.RecipesEventJS} event
 */
ServerEvents.recipes((event) => {
  event.shapeless(Item.of("minecraft:black_dye", 1), ["minecraft:ink_sac"]);

  event.replaceInput(
    { output: "mna:practitioners_pouch" },
    "minecraft:chest",
    "mutantmonsters:mutant_skeleton_rib_cage"
  );
});
