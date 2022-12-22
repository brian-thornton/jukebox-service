const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { log } = JUtils;
  const { ok } = serviceHelper;
  const path = '/log';

  app.get(`${path}/get`, (req, res) => ok(res, log.getLogs(req.query.level, req.query.start, req.query.limit)));
};

module.exports = appRouter;
