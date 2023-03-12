const JUtils = require('jukebox-utils');
const { settings } = JUtils;

const settingsResolver = {
  settings: settings.getSettings()
};

module.exports = settingsResolver;


