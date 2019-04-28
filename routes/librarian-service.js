const JUtils = require('jukebox-utils');
const path = require('path');

var appRouter = function (app, options) {
  const librarian = new JUtils.librarian(options);

  app.get("/librarian/albums", function (req, res) {
    res.status(200).send(librarian.getAlbums());
  });

  app.get("/librarian/coverArt", function (req, res) {
    res.sendFile(path.join(req.query.path, 'folder.jpg'));
  });

  app.get("/librarian/tracks", function (req, res) {
    res.status(200).send(librarian.getTracks());
  });

  app.get("/librarian/albumTracks", function (req, res) {
    res.status(200).send(librarian.getAlbumTracks(req.query.path));
  });
}

module.exports = appRouter;