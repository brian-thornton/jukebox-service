const JUtils = require('jukebox-utils');

var appRouter = function (app, options) {
  const queue = new JUtils.queue(options);

  app.get("/queue/enqueue", function (req, res) {
    res.status(200).send(queue.enqueue(req.query.track));
  });

  app.get("/queue/enqueueTop", function (req, res) {
    res.status(200).send(queue.enqueueTop(req.query.track));
  });

  app.get("/queue/play", function (req, res) {
    res.status(200).send(queue.play());
  });
}

module.exports = appRouter;