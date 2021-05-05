const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const queue = new JUtils.queue(options);

  app.get('/queue/getQueue', (req, res) => res.status(200).send(queue.getQueue(req.query.start, req.query.limit)));
  app.get('/queue/enqueue', (req, res) => res.status(200).send(queue.enqueue(req.query.track)));
  app.post('/queue/clearQueue', (req, res) => res.status(200).send(queue.clearQueue()));
  app.get('/queue/play', (req, res) => res.status(200).send(queue.play()));
  app.get('/queue/next', (req, res) => res.status(200).send(queue.next()));

  app.post('/queue/removeFromQueue', (req, res) => {
    res.status(200).send(queue.removeFromQueue(req.body.tracks));
  });

  app.post('/queue/enqueueTracks', (req, res) => {
    res.status(200).send(queue.enqueueTracks(req.body));
  });

  app.post('/queue/enqueueTracksTop', (req, res) => {
    res.status(200).send(queue.enqueueTracksTop(req.body));
  });

  app.get('/queue/enqueueTop', (req, res) => {
    res.status(200).send(queue.enqueueTop(req.query.track));
  });

  app.get('/queue/stop', (req, res) => {
    res.status(200).send(queue.stop(req.query.token));
  });
};

module.exports = appRouter;
