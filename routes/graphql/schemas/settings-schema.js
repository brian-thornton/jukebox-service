var { buildSchema } = require('graphql');

const settingsSchema = buildSchema(`
  type FeaturesType {
    albums: Boolean
    tracks: Boolean
    playlists: Boolean
    radio: Boolean
    queue: Boolean
    settings: Boolean
    volume: Boolean
    next: Boolean
    stop: Boolean
    play: Boolean
    playNow: Boolean
    enqueue: Boolean
    playAlbum: Boolean
    addToPlaylist: Boolean
    deletePlaylist: Boolean
    admin: Boolean
    downloadTrack: Boolean
    isLocked: Boolean
    genres: Boolean
  }

  type PreferencesType {
    name: String
    showAlbumName: Boolean
    showAlbumsWithoutCoverArt: Boolean
    pinEnabled: Boolean
    pin: String
    startsWithLocation: String
    showLibraryFilter: Boolean
    showAlbumTable: Boolean
    vlcHost: String
    vlcPort: String
    vlcPassword: String
    coverSize: String
    experimentalMode: Boolean
  },

  type StylesType {
    headerColor: String
    footerColor: String
    fontColor: String
    fontWeight: String
    backgroundColor: String
    popupBackgroundColor: String
    buttonBackgroundColor: String
    buttonFontColor: String
    buttonFontWeight: String
    trackBackgroundColor: String
    headerFont: String
    navButtonType: String
    buttonFont: String
    controlButtonSize: String
    activeButtonColor: String
    listFont: String
    wallpaper: String
    navButtonSize: String
    buttonShape: String
    controlUseBackground: Boolean
  }

  type Controller {
    name: String
    ip: String
    mac: String
    online: Boolean
  }

  type SettingsType {
    display: String
    features: FeaturesType
    preferences: PreferencesType
    styles: StylesType
    categories: [String]
    controllers: [Controller]
    isScreenSmall: Boolean
  }

  type Query {
    settings: SettingsType
  }
`);

module.exports = {
  settingsSchema,
}