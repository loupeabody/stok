require.config({
  // baseUrl: '../',
  paths: {
    'jquery': 'libs/jquery/jquery-2.1.4.min',
    'underscore': 'libs/underscore/underscore.min',
    'backbone': 'libs/backbone/backbone-min',
    'localStorage': 'libs/backbone/backbone.localStorage',
    'masonry': 'libs/masonry/masonry.pkgd.min',
    'text': 'libs/require/text'
  },
  shims: {
    'underscore': { exports: '_' },
    'jquery': { exports: '$' },
    'backbone': { 
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'masonry': { exports: 'Masonry' },
    'localStorage': { exports: 'Store' }
  }
});

// Initialize and Configure Masonry
require(['masonry'], function(Masonry){
  var grid = document.querySelector('.content-wrap'),
      msnry = new Masonry(grid, {
        itemSelector: '.list, .item',
        columnwidth: 320,
        "gutter": 25,
        transitionDuration: 0
      });
});

// require(['views/app'], function(AppView) {
//   var app_view = new AppView;
// });