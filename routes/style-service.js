const JUtils = require('jukebox-utils');
const path = require('path');
const fs = require('fs');

var appRouter = function (app, options) {
  const styleManager = new JUtils.styleManager(options);

  app.post("/styles/skins", function (req, res) {
    res.status(200).send(styleManager.createSkin(req.body.name, req.body.skin));
  });

  app.get("/styles/skins", function (req, res) {
    res.status(200).send(styleManager.getAll());
  });

  app.post("/styles/delete", function (req, res) {
    res.status(200).send(styleManager.deleteSkin(req.body.name));
  });
}

module.exports = appRouter;