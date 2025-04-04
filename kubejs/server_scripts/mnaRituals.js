// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes((event) => {
  event.custom({
    type: 'mna:ritual',
    tier: 1,
    pattern: [
      [0,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,-1,0,-1,0,0,0,0],
      [0,0,-1,-1,-1,-1,-1,-1,-1,0,0],
      [0,0,-1,0,0,0,0,0,-1,0,0],
      [0,-1,-1,0,-1,-1,-1,0,-1,-1,0],
      [3,0,-1,0,-1,5,-1,0,-1,0,4],
      [0,-1,-1,0,-1,-1,-1,0,-1,-1,0],
      [0,0,-1,0,0,0,0,0,-1,0,0],
      [0,0,-1,-1,-1,-1,-1,-1,-1,0,0],
      [0,0,0,0,-1,0,-1,0,0,0,0],
      [0,0,0,0,0,2,0,0,0,0,0],
    ],
    reagents: [
      "     A     ",
      "           ",
      "           ",
      "           ",
      "           ",
      "W    T    F",
      "           ",
      "           ",
      "           ",
      "           ",
      "     E     ",
    ],
    "keys": {
      A: {
        "item": 'hexalia:air_node',
        optional: false,
        consume: true,
      },
      F: {
        "item": 'hexalia:fire_node',
        optional: false,
        consume: true,
      },
      W: {
        "item": 'hexalia:water_node',
        optional: false,
        consume: true,
      },
      E: {
        "item": 'hexalia:earth_node',
        optional: false,
        consume: true,
      },
      T: {
        "item": 'minecraft:iron_ingot',
        optional: false,
        consume: true,
      },
    },
    manaweave: [
      "mna:circle",
      "mna:square",
      "mna:triangle",
      "mna:circle",
    ],
    command: '/summon mutantmonsters:mutant_skeleton'
  }).id('mna:rituals/ritual_of_first_ascension');

  event.custom({
    type: 'mna:ritual',
    tier: 2,
    pattern: [
      [0,0,0,1,0,0,0],
      [0,0,-1,0,-1,0,0],
      [0,-1,8,0,2,-1,0],
      [7,0,0,9,0,0,3],
      [0,-1,6,0,4,-1,0],
      [0,0,-1,0,-1,0,0],
      [0,0,0,5,0,0,0],
    ],
    displayPattern: [
      [0,0,0,1,0,0,0],
      [0,0,-1,0,-1,0,0],
      [0,-1,8,0,2,-1,0],
      [7,0,0,-1,0,0,3],
      [0,-1,6,0,4,-1,0],
      [0,0,-1,0,-1,0,0],
      [0,0,0,5,0,0,0],
    ],
    reagents: [
      "   A   ",
      "       ",
      "  H B  ",
      "G  I  C",
      "  F D  ",
      "       ",
      "   E   ",
    ],
    keys: {
      A: {
        item: 'deeperdarker:sculk_bone',
        optional: false,
        consume: false,
      },
      B: {
        item: 'alexscaves:radiant_essence',
        optional: false,
        consume: false,
      },
      C: {
        item: 'minecraft:nether_star',
        optional: false,
        consume: false,
      },
      D: {
        item: 'alexscaves:nuclear_bomb',
        optional: false,
        consume: false,
      },
      E: {
        item: 'aether:golden_amber',
        optional: false,
        consume: false,
      },
      F: {
        item: 'alexscaves:resistor_shield',
        optional: false,
        consume: false,
      },
      G: {
        item: 'cataclysm:amethyst_crab_meat',
        optional: false,
        consume: false,
      },
      H: {
        item: 'alexscaves:tectonic_shard',
        optional: false,
        consume: false,
      },
      I: {
        item: 'soulsweapons:lord_soul_red',
        optional: false,
        consume: false,
      },
    },
    manaweave: [
      'mna:triangle',
      'mna:inverted_triangle',
      'mna:knot4',
      'mna:knot',
      'mna:diamond',
    ],
    // as it stands right now this doesn't work even though it should according to the docs.
    // TODO: FIX THIS
    command:'/give @s macabre:sacrificial_dirk',
    createsItem: 'macabre:sacrificial_dirk',
  }).id('mna:call_of_the_macabre');
});