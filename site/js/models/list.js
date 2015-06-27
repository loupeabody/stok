// models, list.js

define([
  'underscore',
  'backbone',
  'collections/items'],
  function(_,Backbone,stokItems){
    
    var List = Backbone.Model.extend({
      defaults: {
        title: '',
        _total: 0,
        _no: 0
      },
      getitems: function(stokItems) {
        if (this.cid) {
          return _.find(_.toArray(stokItems), function(item) {
            return item.list === this.cid;
          });
        }
      },
      initialize: function() {
        this.setNotes();
        stokItems.on('update', this.setNotes, this);
      },
      setNotes: function() {
        var prices = [];

        _.forEach(_.toArray(stokItems),function(item) {
          prices.push(item.get('price'));
        });

        var total = prices.reduce(function(p,c,i,a) {
          return p + c;
        });

        this.set('_no', prices.length);
        this.set('total', total);

      }
    });

    return List;
});