const JUtils = require('jukebox-utils');
const path = require('path');
const fs = require('fs');

const serviceHelper = require('./service-helper');
const { off } = require('process');

const appRouter = (app) => {
  const { ok } = serviceHelper;
  const servicePath = '/file-service';

  app.get(`${servicePath}/directories`, async (req, res) => {
    console.log('get directories');
    console.log(req.query)
    ok(res, fs.readdirSync(req.query.path || '/', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    );
  });


};

module.exports = appRouter;