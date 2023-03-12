const JUtils = require('jukebox-utils');
const { listKeeper } = JUtils;

const playlistResolver = {
  playlists: listKeeper.getAllPlaylists().playlists,
};

module.exports = playlistResolver;


