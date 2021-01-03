const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const volume = new JUtils.volume(options);

  app.get('/volume/up', (req, res) => res.status(200).send(volume.increaseVolume()));
  app.get('/volume/down', (req, res) => res.status(200).send(volume.decreaseVolume()));
};

module.exports = appRouter;
