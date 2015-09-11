some thoughts for animations in the new stok design


####Main Navigation

- All views (lists and items) loaded up at once (gotta be smart about this... when are views created? how many to load... preload?)    

Given that a full list view is available, clicking on the associated list will:    
  
- slide lists out to the left (staggered) and fade [-100%, 0]
- slide list--top and 'lists' nav button in from right and become opaque [0,1]
- items slide up and become opaque  [0,1]

Navigating back to 

[FLIP](https://aerotwist.com/blog/flip-your-animations/) where possible...

---

Let's get more detailed about the behavior and implementation of the new design.   
**Which elements are handling which events?** and **Which animation does each event cause?**

Users can click:

- anywhere on a list
- on the lists index nav button
- on the add list/item fab <small>(save that for the editing views)</small>.

Current implementation: the index of `lists` and the rendered `list-items view` are wrapped in two separate containers. Each fills the full-width of the viewport and is positioned absolutely, with the second (`list-items view`) being positioned beside the index, offscreen to the right.

The lists (".list") in the index move independently of their container (staggered slide-in)... **Is there a practical need for the index container?** One container is needed to maintain the grid, but otherwise, the `lists` can position themselves. **Remove the outermost index container.**

The initial `list` styles put them outside of the viewport <strike>(translateX(-200%))</strike>. Upon the `loaded` state (where all work to load has been done within 1000ms), <strike>the `lists` will `slide-in` from the right</strike>...

! - Does the grid container need to be transitioned offscreen or otherwise hidden?

**Are the animations you have in mind accounting all viewport widths/style breakpoints?** No. But, **adding opacity transitions should make for universally suitable animations**. Yet, I want to approach desktop animations more thoughtfully. We'll see which issues emerge.

... will `fade and slide-in` from the top <small>*(perhaps in rows at larger breakpoints?)*</small>. So, the lists' initial positions will be slightly above (`translateY(-300px)`?) where they are normally. 

When a `list` is clicked, the `lists` will `slide-left` and `fade-out` <small>let's see how this looks before committing to anything</small>. In whatever position they end up, the lists should be non-interactable and should not be involved in painting events until they are caused to be rendered again.
 
As the lists `fade away` the `list-items view` and the `lists index nav button ` will `fade and slide-in` from the right.

<table style="border-collapse:collapse">
<tr>
  <th></th>
  <th>Event</th>
  <th>Animation</th>
</tr>
<tr>
  <td>Lists</td>
  <td>Loaded</td>
  <td>EnterStaggered</td>
</tr>
<tr>
  <td>List</td>
  <td>Click</td>
  <td>ExitStaggered</td>
</tr>
<tr>
  <td>Index Nav</td>
  <td>Complete <small>(exitStaggered)</small></td>
  <td>EnterRight</td>
</tr>
<tr>
  <td>List-Items</td>
  <td>Complete <small>(exitStaggered)</small></td>
  <td>EnterRight</td>
</tr>
<tr>
  <td>Index Nav</td>
  <td>Click</small></td>
  <td>ExitRight</td>
</tr>
<tr>
  <td>List-Items</td>
  <td>Begin <small>(index nav onclick animation)</small></td>
  <td>ExitRight</td>
</tr>
</table>

Clicking on the 

---

####Edit Views

Use SVG to animate new edit [fab](http://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-floating-action-button) with gooey jigglin, according to [codrops](http://tympanus.net/codrops/2015/03/10/creative-gooey-effects/)

Edit fab will expand to contain the list/item edit/add form

Edit fab must indicate that it will add an item or list. It's supposed to be on a separate layer of material, so animate accordingly... really only needs to change its url

####Wiring In Backbone

...