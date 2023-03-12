const JUtils = require('jukebox-utils');
const { log } = JUtils;

const logResolver = {
  messages: log.getLogs().messages
};

module.exports = logResolver;


