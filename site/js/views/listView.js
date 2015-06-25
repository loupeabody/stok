// views, listView.js

require([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/listViewTemplate.html'],
  function(_,$,Backbone,listViewTemplate) {

    var listView = Backbone.extend.View({
      tagName: 'div',
      className: 'list',
      template: _.template(listViewTemplate),
      events: {
        'click': gotoList,
        'click .edit': showEditView
      },
      initialize: function() {
        // model events
      },
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },
      gotoList: function() {},
      // Route to list, store route... by id...
      showEditView: function() {}
      // Show edit view for ~current~ list
    });

    return listView;
  });