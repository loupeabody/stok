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
        var add = this.getHeaderAdd(),
            wrap = $('.content-wrap'),
            existingViews = wrap.find('.list, .item');
      
        // Revert header-add back to appropriate state
        if (add.className == 'header-add--back') {
          add.className = 'header-add';
          add.href = '#lists/add';
          add.innerHTML = '&plus; list';
        }

        // Reset Masonry and remove any existing views
        if (existingViews) {
          // Views are only being removed from the DOM
          // ghost views will cause memory leaks
          msnry.remove(existingViews);
          msnry.layout();
          wrap.empty();
        }

        // Render all list models
        stokLists.each(function(list){
          console.log('view rendered');
          var buffer = new listView({model:list});
          wrap.append(buffer.$el);
          msnry.appended(buffer.$el);
        });

      },
      getList: function(id) {
        var add = this.getHeaderAdd();


        // Revert header-add back to appropriate state
        if (add.className == 'header-add') {
          add.className = 'header-add--back';
          add.href = '#lists';
          add.innerHTML = 'lists';
        } 
        // get list by id and render list--top


      },
      addList: function() {
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