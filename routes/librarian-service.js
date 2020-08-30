const JUtils = require('jukebox-utils');
const path = require('path');
const fs = require('fs');

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

  app.get("/librarian/tracks/search", function (req, res) {
    res.status(200).send(librarian.searchTracks(req.query.search));
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

  app.delete("/librarian", function (req, res) {
    res.status(200).send(librarian.remove(req.query));
  });

  app.post("/librarian/scan", function (req, res) {
    librarian.scan(req.body).then(res.status(200).send.bind(res));
  });

  app.post("/librarian/add", function (req, res) {
    res.status(200).send(librarian.add(req.body));
  });

  app.post("/librarian/saveCoverArt", function (req, res) {
    res.status(200).send(librarian.saveCoverArt(req.body));
  });

  app.post("/librarian/removeCoverArt", function (req, res) {
    res.status(200).send(librarian.removeCoverArt(req.body));
  });

  app.get('/librarian/downloadTrack', function (req, res) {
    var file = fs.createReadStream(req.query.file);
    var stat = fs.statSync(req.query.file);
    res.setHeader('Content-Length', stat.size);
    console.log(stat.size);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename=test.mp3');
    file.pipe(res);
  });
}

module.exports = appRouter;