const JUtils = require('jukebox-utils');
const { queue } = JUtils;

const queueResolver = {
  queue: queue.getQueue
};

module.exports = queueResolver;


