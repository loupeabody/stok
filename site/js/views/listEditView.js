// views, listEditView.js

define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/itemEditViewTemplate.html'],
  function(_,$,Backbone,itemEditViewTemplate) {

    var listEditView = Backbone.extend.View({
      tagName: 'form',
      className: 'collect cf',
      template: _.template(listEditViewTemplate),
      events: {
        'click .collect-submit': updateList
        // cancel or close
        // delete...!
      },
      initialize: function() {
        // model events
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },
      updateList: function() {}
      // Upsert new title (input val)
      // with save; no validation initially...
    });

    return listEditView;
  });