Events.run(Trigger.update, () => {
  Vars.state.serverPaused = Groups.player.size() == 0
})