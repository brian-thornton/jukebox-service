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
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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


const librarian = new JUtils.Librarian(options);

librarianSerivce(app, options);
queueSerivce(app, options);
volumeService(app, options);
playlistService(app, options);
spotifyService(app, options);
settingsService(app, options);
statusService(app, options);
styleService(app, options);

librarian.getAll().forEach((library) => {
  if (!fs.existsSync(library.path)) {
    librarian.disable(library.name);
  } else {
    librarian.enable(library.name);
  }
})

app.use((err, req, res, next) => {
  if (err) {

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