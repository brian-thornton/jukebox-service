const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const styleSchema = require("./schemas/style-schema");

const radioServiceGraphQL = (app, root) => {
  const { styleManager } = JUtils;

  app.use('/graphql/style', graphqlHTTP({
    schema: styleSchema.styleSchema,
    rootValue: {
      ...root,
      skins: styleManager.getAll(),
    },
    graphiql: true,
  }));
}

module.exports = radioServiceGraphQL;


