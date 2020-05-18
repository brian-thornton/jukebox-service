const JUtils = require('jukebox-utils');

var appRouter = function (app, options) {
  const volume = new JUtils.volume(options);

  app.get("/volume/up", function (req, res) {
    res.status(200).send(volume.increaseVolume());
  });

  app.get("/volume/down", function (req, res) {
    console.log('volume down');
    res.status(200).send(volume.decreaseVolume());
  });
}

module.exports = appRouter;