import app from 'flarum/app';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { extend } from "flarum/extend";

function genUnreadIdentifier(){
  var span = document.createElement("span");
  var node = document.createTextNode("NEW");
  span.appendChild(node);
}

app.initializers.add('reflar/enso-theme', () => {
  extend(DiscussionListItem.prototype, "view", vnode => {
    // Inport the CSS file into the DOM for the new elements to use.
    (new Extend\Frontend('forum'))
      ->css(__DIR__.'unreadpost-style.css')

    // Find all the elements in the DOM that have the unread class
    // and add them to an array.  Then iterate over appending
    // our custom element to the post.
    var elem = document.getElementsByClassName("unread");
    for (var i = 0; i < elem.length; i++) {
       var identifier = genUnreadIdentifier();
       elem[i].children[2].children[0].appendChild(identifier);
    }
    console.log(elem);
   }
  )}
);
