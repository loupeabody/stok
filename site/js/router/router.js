// router, router.js

define([
  'jquery',
  'backbone',
  'views/listView',
  'views/itemView',
  'views/listEditView',
  'views/itemEditView',
  'collections/lists',
  'collections/items',
  'front/masonryConfig'],
  function(
    $,
    Backbone,
    listView,
    itemView,
    listEditView,
    itemEditView,
    stokLists,
    stokItems,
    msnry) {
    var Workspace = Backbone.Router.extend({
      routes: {
        '/'               : 'getLists',
        'lists'           : 'getLists',
        'list/:id'        : 'getList',
        'lists/add'       : 'addList',
        'list/:id/edit'   : 'editList',
        'list/:id/add'    : 'addItem',
        'item/:id/edit'   : 'editItem',
        '*notFound'       : 'getLists'
      },
      getLists: function() {
        // Revert header-add back to appropriate state
        var add = this.getHeaderAdd();
      
        if (add.className == 'header-add--back') {
          add.className = 'header-add';
          add.href = '#lists/add';
          add.innerHTML = '&plus; list';
        }

        // stokLists.fetch();
        // Render all list models
        stokLists.each(function(list){
          var buffer = new listView({model:list});
          $('.content-wrap').append(buffer.$el);
          msnry.appended(buffer.$el);
        });

      },
      getList: function(id) {
        // Revert header-add back to appropriate state
        var add = this.getHeaderAdd();

        if (add.className == 'header-add') {
          add.className = 'header-add--back';
          add.href = '#lists';
          add.innerHTML = 'lists';
        } 
        // get list by id and render list--top


      },
      addList: function() {
        // create list edit view
        var newList = new listEditView();
        $('body').append(newList.$el);
      },
      editList: function(id) {},
      addItem: function(id) {
        // create item edit view
        var newItem = new itemEditView();
        $('body').append(newItem.$el);
      },
      editItem: function(id) {},

      getHeaderAdd: function() {
        var add = document.querySelector('[class^=header-add]');
        return add;
      }
    });

    return Workspace;
});