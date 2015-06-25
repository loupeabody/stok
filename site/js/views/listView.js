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
      // events: {
      //   'click': gotoList,
      //   'click .edit': showEditView
      // },
      initialize: function() {
        this.render();
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change', this.generateNotes);
        // this.model.set('_total',..);
        // this.model.set('_no',..);
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
      // gotoList: function() {},
      // Route to list, store route... by id...
      // showEditView: function() {}
      // Show edit view for ~current~ list
    });

    return listView;
  });