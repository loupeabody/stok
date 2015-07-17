some thoughts for animations in the new stok design


####Main Navigation

- All views (lists and items) loaded up at once (gotta be smart about this... when are views created? how many to load... preload?)    

Given that a full list view is available, clicking on the associated list will:    
  
- slide lists out to the left (staggered) and fade [-100%, 0]
- slide list--top and 'lists' nav button in from right and become opaque [0,1]
- items slide up and become opaque  [0,1]

Navigating back to 

[FLIP](https://aerotwist.com/blog/flip-your-animations/) where possible...

####Edit Views

Use SVG to animate new edit [fab](http://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-floating-action-button) with gooey jigglin, according to [codrops](http://tympanus.net/codrops/2015/03/10/creative-gooey-effects/)

Edit fab will expand to contain the list/item edit/add form

Edit fab must indicate that it will add an item or list. It's supposed to be on a separate layer of material, so animate accordingly... really only needs to change its url

####Wiring In Backbone

...