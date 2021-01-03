const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const settings = new JUtils.settings(options);

  app.get('/settings/getSettings', (req, res) => {
    res.status(200).send(settings.getSettings());
  });

  app.post('/settings/updateSettings', (req, res) => {
    res.status(200).send(settings.updateSettings(req.body));
  });
};

module.exports = appRouter;
