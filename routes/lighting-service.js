const JUtils = require('jukebox-utils');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { lighting } = JUtils;
  const { ok } = serviceHelper;
  const path = '/lighting';

  app.get(`${path}/discover`, async (req, res) => ok(res, await lighting.discover()));
  app.get(`${path}/reset`, async (req, res) => ok(res, await lighting.reset(req.query.ip)));
  app.get(`${path}/powerOn`, async (req, res) => ok(res, await lighting.powerOn(req.query.ip)));
  app.get(`${path}/powerOff`, async (req, res) => ok(res, await lighting.powerOff(req.query.ip)));
  app.get(`${path}/presets`, async (req, res) => ok(res, await lighting.getPresets(req.query.ip)));
  app.get(`${path}/applyPreset`, async (req, res) => ok(res, await lighting.applyPreset(req.query.ip, req.query.name)));

  app.get(`${path}/createSegment`, async (req, res) => (
    ok(res, await lighting.createSegment(req.query.ip, req.query.start, req.query.stop))
  ));

  app.get(`${path}/removeSegment`, async (req, res) => (
    ok(res, await lighting.removeSegment(req.query.ip, req.query.start, req.query.stop))
  ));

  app.get(`${path}/currentState`, async (req, res) => (
    ok(res, await lighting.getStatus(req.query.ip))
  ));

  app.get(`${path}/setEffect`, async (req, res) => (
    ok(res, await lighting.setEffect(
      req.query.ip, req.query.effect, req.query.palette, req.query.start, req.query.stop,
    ))
  ));

  app.get(`${path}/demoEffect`, async (req, res) => (
    ok(res, await lighting.demoEffect(
      req.query.ip, req.query.effect, req.query.palette, req.query.start, req.query.stop, req.query.speed, req.query.brightness,
    ))
  ));

  app.post(`${path}/applyEventSegments`, async (req, res) => (
    ok(res, await lighting.applyEventSegments(
      req.query.ip, JSON.parse(req.body.body).eventSegments,
    ))
  ));

  app.get(`${path}/setSolidColor`, async (req, res) => (
    ok(res, await lighting.setSolidColor(
      req.query.ip, req.query.rgbColor, req.query.start, req.query.stop,
    ))
  ));
};

module.exports = appRouter;
