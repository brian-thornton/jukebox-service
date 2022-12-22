const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { metadata } = JUtils;
  const { ok } = serviceHelper;
  const path = '/metadata';

  app.get(`${path}/getArtistsByGenre`, async (req, res) => ok(res, await metadata.getArtistsByGenre(req.query.genre)));
  app.get(`${path}/linkGenre`, async (req, res) => ok(res, await metadata.linkGenereToLibrary(req.query.genre)));
};

module.exports = appRouter;
