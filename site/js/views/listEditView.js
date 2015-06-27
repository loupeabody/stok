// views, listEditView.js

define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/listEditViewTemplate.html'],
  function(_,$,Backbone,listEdit) {

    var listEditView = Backbone.View.extend({
      tagName: 'div',
      className: 'modal',
      template: _.template(listEdit),
      events: {
        'click .collect-submit'   : 'updateList',
        'click .collect-close'    : 'closeEditView',
        'click .collect-delete'   : 'deleteList'
      },
      initialize: function() {
        // model events
        this.render();
      },
      render: function() {
        if (this.model) {
          this.$el.html(this.template(this.model.attributes));
        } else {
          // render without model 
          this.$el.html(this.template());
        }
        return this;
      },
      updateList: function() {
        var inputs = this.getTitle();
      },
      deleteList: function(e) {
        e.preventDefault();
        if (this.model) {
          // HTTP delete model 
        }
      },
      getTitle: function() {},
      closeEditView: function(e) {
        e.preventDefault();
        $('body').remove('.modal');
        this.remove();
        window.history.back();
      }
    });

    return listEditView;
  });