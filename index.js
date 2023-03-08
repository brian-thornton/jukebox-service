const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const JUtils = require('jukebox-utils');

const librarianSerivce = require("./routes/librarian-service.js");
const queueSerivce = require("./routes/queue-service.js");
const volumeService = require("./routes/volume-service.js");
const playlistService = require("./routes/playlist-service.js");
const spotifyService = require("./routes/spotify-service.js");
const settingsService = require("./routes/settings-service.js");
const statusService = require("./routes/status-service.js");
const styleService = require("./routes/style-service.js");
const lightingService = require("./routes/lighting-service.js");
const radioService = require("./routes/radio-service.js");
const logService = require("./routes/log-service.js");
const metadataService = require("./routes/metadata-service.js");

// GraphQL Services
const settingsServiceGraphQL = require("./routes/graphql/settings-service.js");
const librarianSerivceGraphQL = require("./routes/graphql/library-service");
const playlistSerivceGraphQL = require("./routes/graphql/playlist-service");
const logSerivceGraphQL = require("./routes/graphql/log-service");
const queueSerivceGraphQL = require("./routes/graphql/queue-service");
const radioSerivceGraphQL = require("./routes/graphql/radio-service");
const styleSerivceGraphQL = require("./routes/graphql/style-service");

const app = express();

var root = {};
settingsServiceGraphQL(app, root);
librarianSerivceGraphQL(app, root);
logSerivceGraphQL(app, root);
playlistSerivceGraphQL(app, root);
queueSerivceGraphQL(app, root);
radioSerivceGraphQL(app, root);
styleSerivceGraphQL(app, root);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

const options = {
  dataAccessOptions: {
    type: 'file',
    storageLocation: './storage'
  }
}

if (!fs.existsSync(options.dataAccessOptions.storageLocation)) {
  fs.mkdirSync(options.dataAccessOptions.storageLocation);
  fs.mkdirSync(`${options.dataAccessOptions.storageLocation}/library`);
}

const { lighting, librarian, log, settings } = JUtils;
const { logError, logInfo } = log;

librarianSerivce(app, options);
queueSerivce(app, options);
volumeService(app, options);
playlistService(app, options);
spotifyService(app, options);
settingsService(app, options);
statusService(app, options);
styleService(app, options);
lightingService(app, options);
radioService(app, options);
logService(app, options);
metadataService(app, options);

logInfo('Checking libraries...');
librarian.getAll().forEach((library) => {
  if (!fs.existsSync(library.path)) {
    librarian.disable(library.name);
  } else {
    librarian.enable(library.name);
  }
});

logInfo('Checking lighting controllers...');
const masterSettings = settings.getSettings();
const definedControllers = masterSettings?.controllers;
if (definedControllers?.length > 0) {
  definedControllers.forEach((c) => {
    logInfo(`Checking controller ${c.ip}...`);
    lighting.getStatus(c.ip).then((status) => {
      if (status?.state?.seg.length > 0) {
        logInfo(`Controller ${c.ip} is online.`);
        c.online = true;
        settings.updateSettings(masterSettings);
      } else {
        logInfo(`Controller ${c.ip} is offline.`);
        c.online = false;
        settings.updateSettings(masterSettings);
      }
    });
  })
}


librarian.getAll().forEach((library) => {
  if (!fs.existsSync(library.path)) {
    librarian.disable(library.name);
  } else {
    librarian.enable(library.name);
  }
});

app.use((err, req, res, next) => {
  if (err && (!err.path || !err.path.includes('folder'))) {
    logError(err);
  }
  next();
});

var server = app.listen(3001, function () {

  setTimeout(() => {
    console.clear();
    console.log(`
     ██ ██    ██ ██   ██ ███████ ██████   ██████  ██   ██ 
     ██ ██    ██ ██  ██  ██      ██   ██ ██    ██  ██ ██  
     ██ ██    ██ █████   █████   ██████  ██    ██   ███   
██   ██ ██    ██ ██  ██  ██      ██   ██ ██    ██  ██ ██  
 █████   ██████  ██   ██ ███████ ██████   ██████  ██   ██`);





    console.log('*------------------------------------------*');
    console.log("* Browse to http://localhost:3000 to rock. *");
    console.log('*------------------------------------------*');
  }, 15000);
});