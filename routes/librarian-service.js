const JUtils = require('jukebox-utils');
const path = require('path');
const fs = require('fs');

const serviceHelper = require('./service-helper');

const appRouter = (app) => {
  const { librarian } = JUtils;
  const { ok } = serviceHelper;
  const servicePath = '/librarian';

  const libraries = (req, res) => ok(res, librarian.getAll());
  const runSearch = (req, res) => {
    const {
      start, limit, search, type, startsWithFilter,
    } = req.query;

    if (type === 'tracks') {
      const data = librarian.searchTracks(search, start, limit);
      ok(res, data);
    } else {
      const data = librarian.searchAlbums(search, start, limit, startsWithFilter);
      ok(res, data);
    }
  };

  const coverArt = (req, res) => {
    if (fs.existsSync(path.join(req.query.path, 'folder.jpg'))) {
      return res.sendFile(path.join(req.query.path, 'folder.jpg'));
    }

    if (fs.existsSync(path.join(req.query.path, 'folder.jpeg'))) {
      return res.sendFile(path.join(req.query.path, 'folder.jpeg'));
    }

    return res.sendFile(path.join(req.query.path, 'folder.jpg'));
  };

  const trackAlbums = (req, res) => ok(res, librarian.getTrackAlbums(req.body));
  const albumTracks = (req, res) => ok(res, librarian.getAlbumTracks(req.query.path));
  const deleteLibrary = (req, res) => ok(res, librarian.remove(req.query));
  const scan = (req, res) => librarian.scan(req.body).then(res.status(200).send.bind(res));
  const add = (req, res) => ok(res, librarian.add(req.body));
  const discover = (req, res) => ok(res, librarian.discover(req.query.path));
  const saveCoverArt = (req, res) => ok(res, librarian.saveCoverArt(req.body));
  const removeCoverArt = (req, res) => ok(res, librarian.removeCoverArt(req.body));

  const albums = (req, res) => {
    const {
      start, limit, category, filters,
    } = req.query;

    ok(res, librarian.getAlbums(start, limit, category, filters));
  };

  const tracks = (req, res) => {
    const { start, limit } = req.query;
    ok(res, librarian.getTracks(start, limit));
  };

  const downloadTrack = (req, res) => {
    const file = fs.createReadStream(req.query.file);
    const stat = fs.statSync(req.query.file);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename=test.mp3');
    file.pipe(res);
  };

  app.get(`${servicePath}/libraries`, libraries);
  app.get(`${servicePath}/albums`, albums);
  app.get(`${servicePath}/search`, runSearch);
  app.get(`${servicePath}/coverArt`, coverArt);
  app.get(`${servicePath}/tracks`, tracks);
  app.get(`${servicePath}/albumTracks`, albumTracks);
  app.get(`${servicePath}/discover`, discover);
  app.get(`${servicePath}/downloadTrack`, downloadTrack);
  app.post(`${servicePath}/getTrackAlbums`, trackAlbums);
  app.post(`${servicePath}/scan`, scan);
  app.post(`${servicePath}/add`, add);
  app.post(`${servicePath}/saveCoverArt`, saveCoverArt);
  app.post(`${servicePath}/removeCoverArt`, removeCoverArt);
  app.delete(`${servicePath}`, deleteLibrary);
};

module.exports = appRouter;
