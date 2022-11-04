const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { styleManager } = JUtils;
  const { ok } = serviceHelper;
  const path = '/styles';

  app.get(`${path}/skins`, (req, res) => ok(res, styleManager.getAll()));
  app.post(`${path}/delete`, (req, res) => ok(res, styleManager.deleteSkin(req.body.name)));

  app.post(`${path}/skins`, (req, res) => {
    ok(res, styleManager.createSkin(req.body.name, req.body.skin));
  });
};

module.exports = appRouter;
