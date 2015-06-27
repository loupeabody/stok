// views, listTopView.js

define([
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
        'click .list-add': showItemAddView
      },
      initialize: function() {
        // model events
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },
      showItemAddView: function() {}
      // Add item to ~current~ collection
    });

    return listTopView;
  });