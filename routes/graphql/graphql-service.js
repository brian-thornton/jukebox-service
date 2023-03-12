const { graphqlHTTP } = require('express-graphql');

const libraryResolver = require("./resolvers/library-resolver");
const stationResolver = require("./resolvers/station-resolver");
const skinResolver = require("./resolvers/skin-resolver");
const logResolver = require("./resolvers/log-resolver");
const playlistResolver = require("./resolvers/playlist-resolver");
const queueResolver = require("./resolvers/queue-resolver");
const settingsResolver = require("./resolvers/settings-resolver");
const graphqlSchema = require("./schemas/graphql-schema");

const radioServiceGraphQL = (app, root) => {
  app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: {
      ...root,
      ...libraryResolver,
      ...stationResolver,
      ...skinResolver,
      ...logResolver,
      ...playlistResolver,
      ...queueResolver,
      ...settingsResolver,
    },
    graphiql: true,
  }));
}

module.exports = radioServiceGraphQL;


