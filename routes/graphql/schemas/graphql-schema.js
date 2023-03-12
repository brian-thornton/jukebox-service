var { buildSchema } = require('graphql');

const schema = buildSchema(`
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

    type Album {
      id: String
      path: String
      name: String
      trackCount: Int
      coverArtExists: Boolean
      allowCoverArtDownload: Boolean
      genres: [String]
    }

    type Library {
      name: String
      path: String
      enabled: Boolean
      category: String
      allowCoverArtDownload: Boolean
      scanStatus: String
      tracks: [String]
      albums: [Album]
      totalTracks: Int
    }

    type Log {
      message: String
      type: String
    }

    type Track {
      path: String
      name: String
    }
  
    type Playlist {
      id: String
      name: String
      tracks: [Track]
    }

    type Queue {
      tracks: [Track]
      totalTracks: Int
    }

    type Station {
      changeuuid: String
      stationuuid: String
      serveruuid: String
      name: String
      url: String
      url_resolved: String
      homepage: String
      favicon: String
      tags: String
      country: String
      countrycode: String
      iso_3166_2: String
      state: String
      language: String
      languagecodes: String
      votes: Int
      lastchangetime: String
      lastchangetime_iso8601: String
      codec: String
      bitrate: Int
      hls: Int
    }

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
      skins: [Skin]
      library(name: String!): Library
      libraries: [Library]
      messages: [Log]
      playlists: [Playlist]
      queue: Queue
      stations: [Station]
      settings: SettingsType
    }`
);


module.exports = schema;


