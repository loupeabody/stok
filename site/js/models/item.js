// models, item.js

define(['underscore','backbone'], function(_,Backbone){
  var Item = Backbone.Model.extend({
    defaults: {
      name: '',
      manufacturer: '',
      price: '',
      url: '',
      img: ''
    }
  });

  return Item;
});