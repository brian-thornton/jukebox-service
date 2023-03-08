const JUtils = require('jukebox-utils');
var { graphqlHTTP } = require('express-graphql');

const queueSchema = require("./schemas/queue-schema");

const queueServiceGraphQL = (app, root) => {
  const { queue } = JUtils;

  app.use('/graphql/queue', graphqlHTTP({
    schema: queueSchema.queueSchema,
    rootValue: {
      ...root,
      tracks: queue.getQueue(),
      totalTracks: queue.getQueue().length,
    },
    graphiql: true,
  }));
}

module.exports = queueServiceGraphQL;


