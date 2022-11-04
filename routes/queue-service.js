const JUtils = require('jukebox-utils');
const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { queue } = JUtils;
  const { ok } = serviceHelper;
  const path = '/queue';

  app.get(`${path}/getQueue`, (req, res) => ok(res, queue.getQueue(req.query.start, req.query.limit)));
  app.get(`${path}/enqueue`, (req, res) => ok(res, queue.enqueue(req.query.track)));
  app.post(`${path}/clearQueue`, (req, res) => ok(res, queue.clearQueue()));
  app.get(`${path}/play`, (req, res) => ok(res, queue.play()));
  app.get(`${path}/next`, (req, res) => ok(res, queue.next()));

  app.post(`${path}/removeFromQueue`, (req, res) => {
    ok(res, queue.removeFromQueue(req.body.tracks));
  });

  app.post(`${path}/enqueueTracks`, (req, res) => {
    ok(res, queue.enqueueTracks(req.body));
  });

  app.post(`${path}/enqueueTracksTop`, (req, res) => {
    ok(res, queue.enqueueTracksTop(req.body));
  });

  app.get(`${path}/enqueueTop`, (req, res) => {
    ok(res, queue.enqueueTop(req.query.track));
  });

  app.get(`${path}/stop`, (req, res) => {
    ok(res, queue.stop(req.query.token));
  });
};

module.exports = appRouter;
