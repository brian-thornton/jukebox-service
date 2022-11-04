const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { status } = JUtils;
  const { ok } = serviceHelper;
  const path = '/status';

  app.get(`${path}/getStatus`, (req, res) => ok(res, status.getStatus()));
  app.post(`${path}/updateStatus`, (req, res) => ok(res, status.updateStatus(req.body)));
  app.get(`${path}/getArtHistory`, (req, res) => ok(res, status.getArtHistory()));
  app.post(`${path}/updateArtHistory`, (req, res) => ok(res, status.updateArtHistory(req.body)));
};

module.exports = appRouter;
