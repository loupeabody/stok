// view, listView.js

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/listViewTemplate.html'],
  function($,_,Backbone,listViewTemplate) {

    var listView = Backbone.View.extend({
      tagName: 'div',
      className: 'list',
      template: _.template(listViewTemplate),
      initialize: function() {
        this.render();
        this.listenTo(this.model, 'change', this.render);
        // I need to remove these views when the getLists
        // route is requested...
        // Use an event aggregator with Backbone object!!
        Backbone.on('refreshListViews', this.remove, this);
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });

    return listView;
  });