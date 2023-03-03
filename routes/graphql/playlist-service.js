const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const playlistSchema = require("./schemas/playlist-schema");

const playlistServiceGraphQL = (app, root) => {
  const { listKeeper } = JUtils;

  app.use('/graphql/playlists', graphqlHTTP({
    schema: playlistSchema.playlistSchema,
    rootValue: {
      ...root,
      playlists: listKeeper.getAllPlaylists().playlists,
    },
    graphiql: true,
  }));
}

module.exports = playlistServiceGraphQL;


