require.config({
  baseUrl: '/js',
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

// Test Item Model and View
require([
  'models/item',
  'models/list',
  'views/itemView',
  'views/listView'],
  function(Item,List,itemView,listView) {

    // var bagItem = new Item({
    //   name: 'GR1',
    //   manufacturer: 'GORUCK',
    //   price: 295,
    //   url: 'http://www.goruck.com/gr1-black-/p/GEAR-000066',
    //   img: 'img/gr1.jpg'
    // });

    // var bagItemView = new itemView({model: bagItem});

    // $('.content-wrap').append(bagItemView.$el);

    var bagList = new List({
      name: 'All-in-One-Bag'
    });

    var bagListView = new listView({model: bagList});
    $('.content-wrap').append(bagListView.$el);
});