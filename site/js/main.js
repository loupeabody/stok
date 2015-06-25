require.config({
  // baseUrl: '../',
  paths: {
    'jquery': 'libs/jquery/jquery-2.1.4.min',
    'underscore': 'libs/underscore/underscore.min',
    'backbone': 'libs/backbone/backbone-min',
    'localStorage': 'libs/backbone/backbone.localStorage',
    'text': 'libs/require/text'
  },
  shims {
    'underscore': { exports: '_' },
    'jquery': { exports: '$' },
    'backbone': { 
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'localStorage': { exports: 'Store' }
  }
});

// require(['views/app'], function(AppView) {
//   var app_view = new AppView;
// });