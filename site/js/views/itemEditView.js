// view, itemEditView.js

define([
  'underscore',
  'jquery',
  'backbone',
  'text!templates/itemEditViewTemplate.html',
  'text!templates/itemEditViewTemplate--attr.html'],
  function(_,$,Backbone,itemEdit,itemAttrEdit) {

    var itemEditView = Backbone.View.extend({
      tagName: 'div',
      className: 'modal',
      newTemplate: _.template(itemEdit),
      editTemplate: _.template(itemAttrEdit),
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
          this.$el.html(this.editTemplate(this.model.attributes));
        } else {
          // render without model
          this.$el.html(this.newTemplate());
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