var
  extend      = require('util')._extend,
  ENVIRONMENT = process.env.ENVIRONMENT || 'production',
  ROOT_PATH   = process.env.WEBSERVER_PROJECT_PATH || '/export/htdocs',
  VERSION     = process.env.BUILD_ID || parseInt(Date.now(), 10),
  MODULE_PATH = ROOT_PATH + '/uol.deezer/skins/email/',
  DEFAULTS    = {
    build : {
    images: ROOT_PATH + '/imguol.com/c/radio/3/genesys',
    css   : ROOT_PATH + '/jsuol.com/c/radio/3/genesys',
    js    : ROOT_PATH + '/jsuol.com/c/radio/3/genesys',
    dist  : MODULE_PATH
  },

  fontPath: 'http://stc.uol.com/c/radio/3'
},
  configs     = {
    dev: {
      url: {
        home: 'http://dev.musica.uol.com.br',
        css : 'http://dev.jsuol.com.br/c/radio/3/genesys',
        js  : 'http://dev.jsuol.com.br/c/radio/3/genesys',
        img : 'http://dev.imguol.com.br/c/radio/3/genesys'
      },

      build: extend({}, DEFAULTS.build, {})
    },
    qa: {
      url: {
        home: 'http://qa.musica.uol.com.br',
        css : 'http://qa.jsuol.com.br/c/radio/3/genesys',
        js  : 'http://qa.jsuol.com.br/c/radio/3/genesys',
        img : 'http://qa.imguol.com.br/c/radio/3/genesys'
      },

      build: extend({}, DEFAULTS.build, {})
    },
    production: {
      url: {
        home: 'http://musica.uol.com.br/deezer',
        css : 'http://jsuol.com.br/c/radio/3/genesys',
        js  : 'http://jsuol.com.br/c/radio/3/genesys',
        img : 'http://imguol.com.br/c/radio/3/genesys'
      },

      build: extend({}, DEFAULTS.build, {})
    }
  };

module.exports = extend({environment: ENVIRONMENT}, configs[ENVIRONMENT]);
