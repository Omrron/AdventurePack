ItemEvents.rightClicked(event => {
    const { item, player, server } = event;
    if (item.id === 'kubejs:skill_point') {
        item.count--;
        player.tell(Text.green('You have gained a skill point!'));
        server.runCommandSilent(`puffish_skills points add ${player.name.string} adventure:skills 1`);
  }
});