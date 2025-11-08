StartupEvents.registry('item', event => {
    event.create('skill_point', "basic").glow(true)
    .fireResistant(true).rarity("alexscaves:rainbow")
    .displayName("Passive Skill Point")
    .tooltip('Can be traded in the skills quest menu')
    .maxStackSize(64)
})