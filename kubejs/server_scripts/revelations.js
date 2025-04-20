ServerEvents.revelation(event => {
    event.register("mna:tier_1/advance_tier_2", revBuilder => {
        revBuilder
            .cloakBlockState('minecraft:deepslate_diamond_ore', 'minecraft:deepslate_lapis_ore')
            .cloakBlockState('undergarden:shiverstone_diamond_ore', 'minecraft:deepslate_lapis_ore')
            .cloakBlockState('undergarden:depthrock_diamond_ore', 'minecraft:deepslate_lapis_ore')
            .cloakBlockState('deeperdarker:gloomslate_diamond_ore', 'deeperdarker:gloomslate_lapis_ore')
            .cloakBlockState('deeperdarker:sculk_stone_diamond_ore', 'deeperdarker:sculk_stone_lapis_ore')
            .cloakBlockState('minecraft:enchanting_table', 'minecraft:lectern')
            .cloakItem('minecraft:diamond', 'minecraft:lapis_lazuli')
            .cloakItem('minecraft:diamond_helmet', 'deeperdarker:resonarium_helmet')
            .cloakItem('minecraft:diamond_chestplate', 'deeperdarker:resonarium_chestplate')
            .cloakItem('minecraft:diamond_leggings', 'deeperdarker:resonarium_leggings')
            .cloakItem('minecraft:diamond_boots', 'deeperdarker:resonarium_boots')
            .cloakItem('minecraft:diamond_sword', 'deeperdarker:resonarium_sword')
            .cloakItem('minecraft:diamond_hoe', 'deeperdarker:resonarium_hoe')
            .cloakItem('minecraft:diamond_shovel', 'deeperdarker:resonarium_shovel')
            .cloakItem('minecraft:diamond_axe', 'deeperdarker:resonarium_axe')
            .cloakItem('minecraft:diamond_pickaxe', 'deeperdarker:resonarium_pickaxe')
            .cloakItem('minecraft:enchanting_table', 'minecraft:lectern')
            .replaceItemName('minecraft:diamond', 'Very Hard Lapis')
            .replaceItemName('minecraft:diamond_helmet', 'Very Hard Helmet')
            .replaceItemName('minecraft:diamond_chestplate', 'Very Hard Chestplate')
            .replaceItemName('minecraft:diamond_leggings', 'Very Hard Leggins')
            .replaceItemName('minecraft:diamond_boots', 'Very Hard Boots')
            .replaceItemName('minecraft:diamond_sword', 'Very Hard Sword')
            .replaceItemName('minecraft:diamond_hoe', 'Very Hard Hoe')
            .replaceItemName('minecraft:diamond_shovel', 'Very Hard Shovel')
            .replaceItemName('minecraft:diamond_axe', 'Very Hard Axe')
            .replaceItemName('minecraft:diamond_pickaxe', 'Very Hard Pickaxe')
            .replaceItemName('minecraft:enchanting_table', 'Magic Lectern')
            .replaceBlockName('minecraft:enchanting_table', 'Magic Lectern')
    });

    event.onReveal(resourceLocationSet => {
        event.notifyAll();
    })
})