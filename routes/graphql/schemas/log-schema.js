var { buildSchema } = require('graphql');

const logSchema = buildSchema(`
  type Log {
    message: String
    type: String
  }

  type Query {
    messages: [Log]
  }
`);

module.exports = {
  logSchema,
}