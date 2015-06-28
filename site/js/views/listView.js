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
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });

    return listView;
  });