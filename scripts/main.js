Events.on(PlayerLeave, e => {
  if (Groups.player.size() < 1) {
    Vars.state.serverPaused = true
  };
});

Events.on(PlayerJoin, e => {
  Vars.state.serverPaused = false
});