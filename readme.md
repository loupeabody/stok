#stok
an exercise project for learning backbone.js

####07/02/15
The first working build is live at [loopy.me/stok](loopy.me/stok).

This is the first MVC (MV\*) app I've built from scratch. I feel like I've got a better grasp on the nature of MVC (MV\*) apps, but still like I'm just scratching the surface.

Besides just needing some cleaning up, stok doesn't take full advantage of Backbone's data binding via Backbone.events. The views are destroyed and re-rendered on every route, certainly there's a better way? I suppose this is mostly the result of the add/edit views being a modal which hides the rest of the page.

In any case, there are many things I can and will improve over time. 

The plan is to turn stok into a hosted node app with Restify and Mongoose, at which point I'll stop publicly updating this repo.

Some noted (short-term) errors/things to improve:   

- Marquees are no bueno, find a better way to control input lengths in layout
- No input validation whatsoever
- Find performance bottlenecks (get familiar with dev tools timeline)
  - images are a major cause here, it's trivial to compress them, but compression alone doesn't address long-term method of image handling

######more coming soon...