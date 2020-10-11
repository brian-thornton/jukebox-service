const JUtils = require('jukebox-utils');
const bodyParser = require('body-parser');

var appRouter = function (app, options) {
  const status = new JUtils.status(options);

  app.get("/status/getStatus", function (req, res) {
    res.status(200).send(status.getStatus());
  });

  app.post("/status/updateStatus", function (req, res) {
    res.status(200).send(status.updateStatus(req.body));
  })
}

module.exports = appRouter;