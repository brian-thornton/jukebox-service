const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const radioSchema = require("./schemas/radio-schema");

const radioServiceGraphQL = (app, root) => {
  const { radio } = JUtils;

  app.use('/graphql/radio', graphqlHTTP({
    schema: radioSchema.radioSchema,
    rootValue: {
      ...root,
      stations: radio.getStations(),
    },
    graphiql: true,
  }));
}

module.exports = radioServiceGraphQL;


