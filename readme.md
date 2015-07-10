#stok
an exercise project for learning backbone.js    
**live build:**  [loopy.me/stok](loopy.me/stok)

####07/10/15 - 1st Performance Rundown

The current version of stok wasn't made to be performant, I was primarily concerned with making my first MV* app. But now that I've learned a little about measuring web app performance and what constitutes a performant app, I'll see how stok fares.

I'm going to define a performant app as [this document](https://docs.google.com/document/d/1bYMyE6NdiAupuwl7pWQfB-vOZBPSsXCv57hljLDMV8E/edit) does, 1000/100/6/50: 

- **1000ms** to load the app
- **100ms** to respond to user input
- **6ms** for animations
- **50ms** for any work done during idle time

Besides just speed profiling, though, I have a concern about how I manage the lifecycle of a view. I suspect the current implementation is either using too much memory or causing a memory leak. So I'll review the memory profile as well.

The following profiling was performed on a Lenovo ThinkPad X230 on Chrome 
v43.0.2357.132.

#### Load 
	Target: <1000ms    
	Result: ~842.25ms

![](http://loopy.me/stok/assets/perf_timeline_LOAD_pass_1.png)

The Window's load event fires a little before 840ms, but there's some painting done afterwards which ends at roughly `842.25ms`. At this point the JS has been loaded via RequireJS, as well as the CSS, the Backbone router is initialized, and the first view is rendered.

There is a visible delay between the time the initial CSS is painted (`~212.35ms`) and the first view appears (`~842.25ms)`, so it may be worth having a CSS loading screen of some sort. If, that is, the gap can be closed through javascript alone. I suspect that's unlikely since RequireJS has to load Backbone and all of its dependencies in order to render a view to begin with.

A time of `~842.25ms` isn't bad, but it does push up against the limit. This is a less than bare-boned iteration of the app, so I would hope that the load time would be way lower than it currently is. RequireJS may be a bottleneck, given the way it loads modules. At a glance, however, I ought to be able to save some time using Zepto instead of JQuery:

![](http://loopy.me/stok/assets/eval_jquery_pass_1.png)

JQuery took `116.920ms` to evaluate after being loaded by RequireJS, while *every other* module took a total of `57.937ms` to be evaluated. That's over `95%` of the total evaluation time just for JQuery! I'm definitely not taking advantage of many of the features of JQuery, so switching to Zepto should be painless.

#### Response

There are several different scenarios where stok responds to user input, and all of them currently run far below the `100ms` standard.

- Clicking the '+list' button renders a view: `10.505ms` ([timeline](http://loopy.me/stok/assets/perf_timeline_RESPONSE_listEditView.png))
- Adding a list from within the listEditView: `64.903ms` ([timeline](http://loopy.me/stok/assets/perf_timeline_RESPONSE_addList.png))

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