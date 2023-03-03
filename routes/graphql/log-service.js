const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const logSchema = require("./schemas/log-schema");

const logServiceGraphQL = (app, root) => {
  const { log } = JUtils;

  app.use('/graphql/log', graphqlHTTP({
    schema: logSchema.logSchema,
    rootValue: {
      ...root,
      messages: log.getLogs().messages,
    },
    graphiql: true,
  }));
}

module.exports = logServiceGraphQL;


