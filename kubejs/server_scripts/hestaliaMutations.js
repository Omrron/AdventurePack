ServerEvents.recipes((event) => {
  event.custom({
    type: "hexalia:mutation",
    input: {
      item: "minecraft:granite",
    },
    output: {
      item: "minecraft:andesite",
    },
  });
});
