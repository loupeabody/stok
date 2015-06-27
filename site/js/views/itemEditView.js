// view, itemEditView.js

define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/itemEditViewTemplate.html'],
  function(_,$,Backbone,itemEdit) {

    var itemEditView = Backbone.View.extend({
      tagName: 'div',
      className: 'modal',
      template: _.template(itemEdit),
      events: {
        'click .collect-submit'   : 'updateItem',
        'click .collect-close'    : 'closeEditView',
        'click .collect-delete'   : 'deleteItem'
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
      updateItem: function() {
        var inputs = this.getinputs();
      },
      getInputs: function() {},
      deleteItem: function(e) {
        e.preventDefault();
        if (this.model) {
          // HTTP delete model
        }
      },
      closeEditView: function(e) {
        e.preventDefault();
        $('body').remove('.modal');
        this.remove();
        window.history.back();
      }
    });

    return itemEditView;
  });