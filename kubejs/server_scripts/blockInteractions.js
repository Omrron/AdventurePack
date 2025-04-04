BlockEvents.rightClicked(event => {

    if (event.block.id == "irons_spellbooks:scroll_forge")
    {
        event.cancel();
    }
})