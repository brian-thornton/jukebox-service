const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const JUtils = require('jukebox-utils');
const librarianSerivce = require("./routes/librarian-service.js");
const queueSerivce = require("./routes/queue-service.js");
const volumeService = require("./routes/volume-service.js");
const playlistService = require("./routes/playlist-service.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  dataAccessOptions: {
    type: 'file',
    storageLocation: './storage'
  }
}
const librarian = new JUtils.librarian(options);

librarianSerivce(app, options);
queueSerivce(app, options);
volumeService(app, options);
playlistService(app, options);

librarian.getAll().forEach((library) => {
  if (!fs.existsSync(library.path)) {
    librarian.disable(library.name);
  } else {
    librarian.enable(library.name);
  }
}) 

console.log(librarian.getAll());

var server = app.listen(3001, function () {
    console.log("app running on port.", server.address().port);
});