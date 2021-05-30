const JUtils = require('jukebox-utils');
const path = require('path');
const fs = require('fs');

const appRouter = (app, options) => {
  const librarian = new JUtils.Librarian(options);

  const libraries = (req, res) => res.status(200).send(librarian.getAll());
  const search = (req, res) => {
    if (req.query.type === 'tracks') {
      console.log('yo');
      const data = librarian.searchTracks(req.query.search);
      res.status(200).send(data);
    } else {
      const data = librarian.searchAlbums(req.query.search);
      res.status(200).send(data);
    }
  };
  const coverArt = (req, res) => res.sendFile(path.join(req.query.path, 'folder.jpg'));
  const trackAlbums = (req, res) => res.status(200).send(librarian.getTrackAlbums(req.body));
  const albumTracks = (req, res) => res.status(200).send(librarian.getAlbumTracks(req.query.path));
  const deleteLibrary = (req, res) => res.status(200).send(librarian.remove(req.query));
  const scan = (req, res) => librarian.scan(req.body).then(res.status(200).send.bind(res));
  const add = (req, res) => res.status(200).send(librarian.add(req.body));
  const discover = (req, res) => res.status(200).send(librarian.discover(req.query.path));
  const saveCoverArt = (req, res) => res.status(200).send(librarian.saveCoverArt(req.body));
  const removeCoverArt = (req, res) => res.status(200).send(librarian.removeCoverArt(req.body));

  const albums = (req, res) => {
    const { start, limit } = req.query;
    res.status(200).send(librarian.getAlbums(start, limit));
  };

  const tracks = (req, res) => {
    const { start, limit } = req.query;
    res.status(200).send(librarian.getTracks(start, limit));
  };

  const downloadTrack = (req, res) => {
    const file = fs.createReadStream(req.query.file);
    const stat = fs.statSync(req.query.file);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename=test.mp3');
    file.pipe(res);
  };

  app.get('/librarian/libraries', libraries);
  app.get('/librarian/albums', albums);
  app.get('/librarian/search', search);
  app.get('/librarian/coverArt', coverArt);
  app.get('/librarian/tracks', tracks);
  app.get('/librarian/albumTracks', albumTracks);
  app.get('/librarian/discover', discover);
  app.get('/librarian/downloadTrack', downloadTrack);
  app.post('/librarian/getTrackAlbums', trackAlbums);
  app.post('/librarian/scan', scan);
  app.post('/librarian/add', add);
  app.post('/librarian/saveCoverArt', saveCoverArt);
  app.post('/librarian/removeCoverArt', removeCoverArt);
  app.delete('/librarian', deleteLibrary);
};

module.exports = appRouter;
