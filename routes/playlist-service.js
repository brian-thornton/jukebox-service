const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const listKeeper = new JUtils.listKeeper(options);

  app.get('/playlists/getAll', (req, res) => {
    const { start, limit } = req.query;
    res.status(200).send(listKeeper.getAllPlaylists(start, limit));
  });

  app.get('/playlists/getPlaylist', (req, res) => {
    res.status(200).send(listKeeper.getPlaylist(req.query.name));
  });

  app.post('/playlists/addToPlaylist', (req, res) => {
    res.status(200).send(listKeeper.addToPlaylist(req.body.name, req.body.tracks));
  });

  app.post('/playlists/removeFromPlaylist', (req, res) => {
    res.status(200).send(listKeeper.removeFromPlaylist(req.body.name, req.body.tracks));
  });

  app.post('/playlists/add', (req, res) => {
    res.status(200).send(listKeeper.createPlaylist(req.body.name, req.body.tracks));
  });

  app.post('/playlists/delete', (req, res) => {
    res.status(200).send(listKeeper.deletePlaylist(req.body.name));
  });
};

module.exports = appRouter;
