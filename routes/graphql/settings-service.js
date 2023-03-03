const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const settingsSchema = require("./schemas/settings-schema");

const settingsServiceGraphQL = (app, root) => {
  const { settings } = JUtils;

  app.use('/graphql/settings', graphqlHTTP({
    schema: settingsSchema.settingsSchema,
    rootValue: {
      ...root,
      settings: settings.getSettings
    },
    graphiql: true,
  }));
}

module.exports = settingsServiceGraphQL;


