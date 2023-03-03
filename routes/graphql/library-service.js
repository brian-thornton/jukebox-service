const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const librarySchema = require("./schemas/library-schema");

const libraryServiceGraphQL = (app, root) => {
  const { librarian } = JUtils;

  app.use('/graphql/library', graphqlHTTP({
    schema: librarySchema.librarySchema,
    rootValue: {
      ...root,
      libraries: librarian.getAll(),
    },
    graphiql: true,
  }));
}

module.exports = libraryServiceGraphQL;


