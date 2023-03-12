const JUtils = require('jukebox-utils');
const { radio } = JUtils;

const stationResolver = {
  stations: radio.getStations()
};

module.exports = stationResolver;


