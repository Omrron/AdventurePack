ServerEvents.recipes((event) => {

    /*TODO: 
    - Add recipes for other nodes
    - Remove old recipes
    - Checkout mutavis convertion recipes
    - Maybe checkout cauldron recipes 
    */
    event.custom({
        "type": "hexalia:ritual_table",
        "ingredients": [
            {
            "item": "minecraft:amethyst_shard"
            },
            {
            "item": "hexalia:sunfire_tomato"
            },
            {
            "item": "minecraft:dandelion"
            }
        ],
        "output": {
            "item": "hexalia:fire_node"
        }
    });
});
