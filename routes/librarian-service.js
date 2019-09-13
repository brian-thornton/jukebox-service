const JUtils = require('jukebox-utils');
const path = require('path');

var appRouter = function (app, options) {
  const librarian = new JUtils.librarian(options);

  app.get("/librarian/libraries", function (req, res) {
    res.status(200).send(librarian.getAll());
  });

  app.get("/librarian/albums", function (req, res) {
    const start = req.query.start;
    const limit = req.query.limit;
    res.status(200).send(librarian.getAlbums(start, limit));
  });

  app.get("/librarian/albums/search", function (req, res) {
    res.status(200).send(librarian.searchAlbums(req.query.search));
  });

  app.get("/librarian/coverArt", function (req, res) {
    res.sendFile(path.join(req.query.path, 'folder.jpg'));
  });

  app.get("/librarian/tracks", function (req, res) {
    const start = req.query.start;
    const limit = req.query.limit;
    res.status(200).send(librarian.getTracks(start, limit));
  });

  app.get("/librarian/albumTracks", function (req, res) {
    res.status(200).send(librarian.getAlbumTracks(req.query.path));
  });

  app.delete("/librarian", function(req, res) {
    res.status(200).send(librarian.remove(req.query));
  });
}

module.exports = appRouter;