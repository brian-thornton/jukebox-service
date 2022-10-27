const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const radio = new JUtils.radio(options);

  app.get('/radio/getStations', async (req, res) => res.status(200).send(await radio.getStations(req.query.category, req.query.start, req.query.limit)));
  app.get('/radio/play', async (req, res) => res.status(200).send(await radio.play(req.query.url)));
  app.get('/radio/stop', async (req, res) => res.status(200).send(await radio.stop()));
  app.get('/radio/status', async (req, res) => res.status(200).send(await radio.status()));
};

module.exports = appRouter;
