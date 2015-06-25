// views, listTopView.js

require([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/listViewTopTemplate.html'],
  function(_,$,Backbone,listViewTemplate) {

    var listTopView = Backbone.extend.View({
      tagName: 'div',
      className: 'list--top cf',
      template: _.template(listViewTopTemplate),
      events: {
        'click .list-add': addItem
      },
      initialize: function() {
        // model events
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },
      addItem: function() {}
      // Add item to ~current~ collection
    });

    return listTopView;
  });