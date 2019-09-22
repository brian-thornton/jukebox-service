const JUtils = require('jukebox-utils');
const path = require('path');

var appRouter = function (app, options) {
  const listKeeper = new JUtils.listKeeper(options);

  app.get("/playlists/getAll", function (req, res) {
    res.status(200).send(listKeeper.getAllPlaylists());
  });

  app.post("/playlists/addToPlaylist", function (req, res) {
    res.status(200).send(listKeeper.addToPlaylist(req.body.name, req.body.tracks));
  });
}

module.exports = appRouter;