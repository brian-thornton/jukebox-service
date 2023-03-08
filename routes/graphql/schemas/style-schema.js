var { buildSchema } = require('graphql');

const styleSchema = buildSchema(`
  type Skin {
    isEditable: Boolean
    headerColor: String
    headerFont: String
    footerColor: String
    fontColor: String
    fontWeight: String
    backgroundColor: String
    popupBackgroundColor: String
    buttonBackgroundColor: String
    activeButtonColor: String
    buttonFont: String
    buttonFontColor: String
    buttonFontWeight: String
    trackBackgroundColor: String
    listFont: String
    name: String
  }

  type Query {
    skins: [Skin]
  }
`);

module.exports = {
  styleSchema,
}