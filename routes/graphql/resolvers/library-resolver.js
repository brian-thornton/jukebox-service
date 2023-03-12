const JUtils = require('jukebox-utils');
const { librarian } = JUtils;

const libraryResolver = {
  library: (args) => {
    const { name } = args;
    return librarian.getAll().find(lib => lib.name === name)
  },
  libraries: librarian.getAll()
};

module.exports = libraryResolver;


