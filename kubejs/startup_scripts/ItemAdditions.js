StartupEvents.registry('item', event => {
    event.create('skill_point', "basic").glow(true)
    .fireResistant(true).rarity("alexscaves:rainbow")
    .displayName("Passive Skill Point")
    .tooltip('Right-click to gain a skill point')
    .maxStackSize(64)
})