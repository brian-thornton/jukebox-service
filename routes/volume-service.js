const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { volume } = JUtils;
  const { ok } = serviceHelper;
  const path = '/volume';

  app.get(`${path}/up`, (req, res) => ok(res, volume.increaseVolume()));
  app.get(`${path}/down`, (req, res) => ok(res, volume.decreaseVolume()));
};

module.exports = appRouter;
