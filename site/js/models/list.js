// models, list.js

define(['underscore','backbone'], function(_,Backbone){
  var List = Backbone.Model.extend({
    defaults: {
      title: ''
    }
  });

  return List;
});