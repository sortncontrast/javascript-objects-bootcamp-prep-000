var playlist = {Beyonce: "Crazy In Love"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, "Drake", "Hotline Bling");

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}