const JUtils = require('jukebox-utils');
const bodyParser = require('body-parser');

var appRouter = function (app, options) {
  const settings = new JUtils.settings(options);

  app.get("/settings/getSettings", function (req, res) {
    res.status(200).send(settings.getSettings());
  });

  app.post("/settings/updateSettings", function (req, res) {
    res.status(200).send(settings.updateSettings(req.body));
  })
}

module.exports = appRouter;