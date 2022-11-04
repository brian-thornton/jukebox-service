const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { listKeeper } = JUtils;
  const { ok } = serviceHelper;
  const path = '/playlists';

  app.get(`${path}/getPlaylist`, (req, res) => ok(res, listKeeper.getPlaylist(req.query.name)));
  app.post(`${path}/delete`, (req, res) => ok(res, listKeeper.deletePlaylist(req.body.name)));

  app.get(`${path}/getAll`, (req, res) => {
    const { start, limit } = req.query;
    ok(res, listKeeper.getAllPlaylists(start, limit));
  });

  app.post(`${path}/addToPlaylist`, (req, res) => {
    ok(res, listKeeper.addToPlaylist(req.body.name, req.body.tracks));
  });

  app.post(`${path}/removeFromPlaylist`, (req, res) => {
    ok(res, listKeeper.removeFromPlaylist(req.body.name, req.body.tracks));
  });

  app.post(`${path}/add`, (req, res) => {
    ok(res, listKeeper.createPlaylist(req.body.id, req.body.name, req.body.tracks));
  });

  app.post(`${path}/addTrackAtPosition`, (req, res) => {
    ok(res, listKeeper.addTrackAtPosition(req.body.name, req.body.track, req.body.position));
  });
};

module.exports = appRouter;
