// view, itemView.js

require([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/itemViewTemplate.html'],
  function(_,$,Backbone,itemViewTemplate) {

    var itemView = Backbone.View.extend({
      tagName: 'div',
      className: 'item',
      template: _.template(itemViewTemplate),
      events: {
        'click .edit': showEditView
      },
      initialize: function() {
        // model events
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },
      showEditView: function() {}
      // This will ~generate~ an itemEditView
      // which will try to use existing data, 
      // if any, to fill placeholders
    });

  return itemView;
});