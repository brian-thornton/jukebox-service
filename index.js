const express = require("express");
const bodyParser = require("body-parser");
const librarianSerivce = require("./routes/librarian-service.js");
const queueSerivce = require("./routes/queue-service.js");
const volumeService = require("./routes/volume-service.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  dataAccessOptions: {
    type: 'file',
    storageLocation: './storage'
  }
}

librarianSerivce(app, options);
queueSerivce(app, options);
volumeService(app, options);

var server = app.listen(3001, function () {
    console.log("app running on port.", server.address().port);
});