/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'library-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
    apiKey: "AIzaSyDYJQwFxoRS85Vrwy61aNceGHKEjQ6N3GM",
    authDomain: "library-67291.firebaseapp.com",
    databaseURL: "https://library-67291.firebaseio.com",
    projectId: "library-67291",
    storageBucket: "",
    messagingSenderId: "489516330962"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
       ENV.APP.LOG_ACTIVE_GENERATION = true;
       ENV.APP.LOG_TRANSITIONS = true;
       ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
       ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
