var { buildSchema } = require('graphql');

const playlistSchema = buildSchema(`
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
    playlists: [Playlist]
  }
`);

module.exports = {
  playlistSchema,
}