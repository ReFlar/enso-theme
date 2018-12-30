import app from 'flarum/app';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { extend } from "flarum/extend";

function genUnreadIdentifier(){
  // Using a 'span' because it is a inline  element.
  var span = document.createElement("span");
  var node = document.createTextNode("NEW");
  span.classList.add("post-identifier");
  span.appendChild(node);
  return span; // Sends the new element to the caller.
}

app.initializers.add('reflar/enso-theme', () => {
  extend(DiscussionListItem.prototype, "view", vnode => {
    // Get all the elements with the 'unread' class.
    var elem = document.getElementsByClassName("unread");

    // Then iterate over all the elements provided in the array above.
    for (var i = 0; i < elem.length; i++) {
      // Check if the 'identifier' (function above) has allredy
      // been appended the the element.
      if (elem[i].children[2].children[0].childNodes.length <= 1)   // The holding element gets included in this value
      {                                                             // So we check if there are more than 1 children.
        // Generate the identifier using the above function.
        var identifier = genUnreadIdentifier();

        // finally append it to the post's title.
        elem[i].children[2].children[0].appendChild(identifier);
      }
    }
   }
  )}
);
