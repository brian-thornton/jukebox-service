const JUtils = require('jukebox-utils');

const appRouter = (app, options) => {
  const lighting = new JUtils.lighting(options);

  app.get('/lighting/discover', async (req, res) => {
    return res.status(200).send(await lighting.discover());
  });

  app.get('/lighting/createSegment', async (req, res) => {
    return res.status(200).send(await lighting.createSegment(req.query.ip, req.query.start, req.query.stop));
  });

  app.get('/lighting/removeSegment', async (req, res) => {
    return res.status(200).send(await lighting.removeSegment(req.query.ip, req.query.start, req.query.stop));
  });

  app.get('/lighting/currentState', async (req, res) => {
    return res.status(200).send(await lighting.getStatus(req.query.ip));
  });

  app.get('/lighting/powerOn', async (req, res) => {
    return res.status(200).send(await lighting.powerOn(req.query.ip));
  });

  app.get('/lighting/powerOff', async (req, res) => {
    return res.status(200).send(await lighting.powerOff(req.query.ip));
  });

  app.get('/lighting/setEffect', async (req, res) => {
    return res.status(200).send(await lighting.setEffect(req.query.ip, req.query.effect, req.query.palette, req.query.start, req.query.stop));
  });

  app.get('/lighting/demoEffect', async (req, res) => {
    return res.status(200).send(await lighting.demoEffect(req.query.ip, req.query.effect, req.query.palette, req.query.start, req.query.stop));
  });

  app.post('/lighting/applyEventSegments', async (req, res) => {
    return res.status(200).send(await lighting.applyEventSegments(req.query.ip, JSON.parse(req.body.body).eventSegments));
  });

  app.get('/lighting/setSolidColor', async (req, res) => {
    return res.status(200).send(await lighting.setSolidColor(req.query.ip, req.query.rgbColor, req.query.start, req.query.stop));
  });
};

module.exports = appRouter;
