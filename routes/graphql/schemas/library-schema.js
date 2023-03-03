var { buildSchema } = require('graphql');

const librarySchema = buildSchema(`
  type Album {
    id: String
    path: String
    name: String
    trackCount: Int
    coverArtExists: Boolean
    allowCoverArtDownload: Boolean
    genres: [String]
  }

  type Library {
    name: String
    path: String
    enabled: Boolean
    category: String
    allowCoverArtDownload: Boolean
    scanStatus: String
    tracks: [String]
    albums: [Album]
    totalTracks: Int
  }

  type Query {
    libraries: [Library]
  }
`);

module.exports = {
  librarySchema,
}