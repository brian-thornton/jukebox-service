
  var { buildSchema } = require('graphql');

  const radioSchema = buildSchema(`
    type Station {
      changeuuid: String
      stationuuid: String
      serveruuid: String
      name: String
      url: String
      url_resolved: String
      homepage: String
      favicon: String
      tags: String
      country: String
      countrycode: String
      iso_3166_2: String
      state: String
      language: String
      languagecodes: String
      votes: Int
      lastchangetime: String
      lastchangetime_iso8601: String
      codec: String
      bitrate: Int
      hls: Int
    }
  
    type Query {
      stations: [Station]
    }
  `);
  
  module.exports = {
    radioSchema,
  }
  