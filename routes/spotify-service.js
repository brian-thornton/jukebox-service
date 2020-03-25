const JUtils = require('jukebox-utils');

var appRouter = function (app, options) {
  const spotify = new JUtils.spotify(options);

  app.get("/spotify/findAlbums", function (req, res) {
    spotify.findAlbums(req.query.token, req.query.search, req.query.limit, req.query.offset).then(data => {
      return res.status(200).send(data);
    });
  });

  app.get("/spotify/newReleases", function (req, res) {
    spotify.newReleases(req.query.token, req.query.limit, req.query.offset).then(data => {
      return res.status(200).send(data);
    });
  });

  app.get("/spotify/getCategories", function (req, res) {
    spotify.getCategories(req.query.token).then(data => {
      return res.status(200).send(data);
    });
  });

  app.get("/spotify/getTracks", function (req, res) {
    spotify.getTracks(req.query.token, req.query.albumId).then(data => {
      return res.status(200).send(data);
    });
  });
}

module.exports = appRouter;