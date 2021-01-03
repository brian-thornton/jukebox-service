const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const spotify = new JUtils.spotify(options);

  app.get('/spotify/findAlbums', (req, res) => {
    const {
      token,
      search,
      limit,
      offset,
    } = req.query;

    spotify.findAlbums(token, search, limit, offset).then((data) => res.status(200).send(data));
  });

  app.get('/spotify/newReleases', (req, res) => {
    spotify.newReleases(req.query.token, req.query.limit, req.query.offset).then((data) => (
      res.status(200).send(data)
    ));
  });

  app.get('/spotify/getCategories', (req, res) => {
    spotify.getCategories(req.query.token).then((data) => (
      res.status(200).send(data)
    ));
  });

  app.get('/spotify/getTracks', (req, res) => {
    spotify.getTracks(req.query.token, req.query.albumId).then((data) => (
      res.status(200).send(data)
    ));
  });
};

module.exports = appRouter;
