const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const status = new JUtils.status(options);

  app.get('/status/getStatus', (req, res) => res.status(200).send(status.getStatus()));

  app.post('/status/updateStatus', (req, res) => {
    res.status(200).send(status.updateStatus(req.body));
  });
};

module.exports = appRouter;
