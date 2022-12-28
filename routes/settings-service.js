const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { settings } = JUtils;
  const { ok } = serviceHelper;
  const path = '/settings';

  app.get(`${path}/getSettings`, (req, res) => ok(res, settings.getSettings()));
  app.post(`${path}/updateSettings`, (req, res) => ok(res, settings.updateSettings(req.body)));
  app.get(`${path}/restrictionGroups`, (req, res) => ok(res, settings.getRestrictionGroups()));
  app.post(`${path}/deleteRestrictionGroup`, (req, res) => ok(res, settings.deleteRestrictionGroup(req.body.name)));

  app.post(`${path}/createRestrictionGroup`, (req, res) => {
    ok(res, settings.createRestrictionGroup(req.body));
  });

  app.post(`${path}/updateRestrictionGroup`, (req, res) => {
    ok(res, settings.updateRestrictionGroup(req.body));
  });
};

module.exports = appRouter;
