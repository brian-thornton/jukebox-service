const JUtils = require('jukebox-utils');
const bodyParser = require('body-parser');

var appRouter = function (app, options) {
  const queue = new JUtils.queue(options);

  app.get("/queue/getQueue", function (req, res) {
    res.status(200).send(queue.getQueue());
  });

  app.get("/queue/enqueue", function (req, res) {
    res.status(200).send(queue.enqueue(req.query.track));
  });

  app.post("/queue/enqueueTracks", function (req, res) {
    res.status(200).send(queue.enqueueTracks(req.body));
  });

  app.post("/queue/enqueueTracksTop", function (req, res) {
    res.status(200).send(queue.enqueueTracksTop(req.body));
  });

  app.get("/queue/enqueueTop", function (req, res) {
    res.status(200).send(queue.enqueueTop(req.query.track));
  });

  app.get("/queue/play", function (req, res) {
    res.status(200).send(queue.play());
  });

  app.get("/queue/stop", function (req, res) {
    res.status(200).send(queue.stop());
  });

  app.get("/queue/next", function (req, res) {
    res.status(200).send(queue.next());
  });
}

module.exports = appRouter;