const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const styleManager = new JUtils.styleManager(options);

  app.post('/styles/skins', (req, res) => {
    res.status(200).send(styleManager.createSkin(req.body.name, req.body.skin));
  });

  app.get('/styles/skins', (req, res) => {
    res.status(200).send(styleManager.getAll());
  });

  app.post('/styles/delete', (req, res) => {
    res.status(200).send(styleManager.deleteSkin(req.body.name));
  });
};

module.exports = appRouter;
