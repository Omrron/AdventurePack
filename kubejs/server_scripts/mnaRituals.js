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
  });
});