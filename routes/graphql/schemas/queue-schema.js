var { buildSchema } = require('graphql');

const queueSchema = buildSchema(`
  type Track {
    path: String
    name: String
  }

  type Playlist {
    id: String
    name: String
    tracks: [Track]
  }

  type Query {
    tracks: [Track]
    totalTracks: Int
  }
`);

module.exports = {
  queueSchema,
}