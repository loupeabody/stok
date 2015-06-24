require.config({
  // baseUrl: '../',
  paths: {
    jquery: 'libs/jquery/jquery-2.1.4.min',
    underscore: 'libs/underscore/underscore.min',
    backbone: 'libs/backbone/backbone-min',
    text: 'libs/require/text'
  }
});

require(['views/app'], function(AppView) {
  var app_view = new AppView;
});