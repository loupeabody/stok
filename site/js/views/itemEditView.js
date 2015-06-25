// view, itemEditView.js

require([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/itemEditViewTemplate.html'],
  function(_,$,Backbone,itemEditViewTemplate) {

    var itemEditView = Backbone.extend.View({
      tagName: 'form',
      className: 'collect cf',
      template: _.template(itemEditViewTemplate),
      events: {
        'click .collect-submit': updateItem
        // no validation, upsert, HTTP PUT
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
      updateItem: function() {}
      // Upsert new attributes (input vals)
      // with save; no validation initially...
    });

    return itemEditView;
  });