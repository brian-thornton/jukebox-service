const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { radio } = JUtils;
  const { ok } = serviceHelper;
  const path = '/radio';

  app.get(`${path}/getStations`, async (req, res) => ok(res, await radio.getStations(req.query.category, req.query.start, req.query.limit)));
  app.get(`${path}/play`, async (req, res) => ok(res, await radio.play(req.query.url)));
  app.get(`${path}/stop`, async (req, res) => ok(res, await radio.stop()));
  app.get(`${path}/status`, async (req, res) => ok(res, await radio.status()));
};

module.exports = appRouter;
