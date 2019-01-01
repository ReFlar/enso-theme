import app from 'flarum/app';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { extend } from "flarum/extend";

function addToDiscussionDropDown(title, icon) {   // icon will be a FA Icon.  e.g: "icon fas fa-check Button-icon"
  // Find the drop donw list we need.
  var listHolder = document.getElementsByClassName("DiscussionListItem-controls");

  // Then iterate over all the elements provided in the array above.
  for (var i = 0; i < listHolder.length; i++) {
    // Get all of the children of dropdown list.
    console.log()

    if (listHolder[i].children[1].getElementsByClassName("item-" + title.match(/[a-zA-Z]+/g).join('')).length <= 0) {
      var temp = listHolder[i].children[1].children[0].cloneNode(true);
      var separators = listHolder[i].children[1].getElementsByClassName("Dropdown-separator");

      temp.className = "item-" + title.match(/[a-zA-Z]+/g).join('');  // Regex function to only use letters.
      temp.children[0].title = title;
      temp.children[0].children[0].className = "icon fas fa-check Button-icon";
      temp.children[0].children[1].innerHTML = title;

      listHolder[i].children[1].insertBefore(temp, separators[1]);
    } else {
      console.log("ENSO-THEME: [ERROR]: addToDiscussionDropDown('" + title + "', '" + icon + "');");
      console.log("ENSO-THEME:        : That 'classname' has allredy been used.");
      console.log("ENSO-THEME:   [FIX]: Try changing the 'calssname' to something that hasn't been used otherwise, post a GitHub issue here:");
      console.log("ENSO-THEME:        : https://github.com/ReFlar/enso-theme/issues");
    }
  }
}

function addIdentifier() {
  // Using a 'span' because it is a inline  element.
  var identifier = document.createElement("span");
  var identifierText = document.createTextNode("NEW");
  identifier.classList.add("post-identifier");
  identifier.appendChild(identifierText);

  // Get all the elements with the 'unread' class.
  var elem = document.getElementsByClassName("unread");

  // Then iterate over all the elements provided in the array above.
  for (var i = 0; i < elem.length; i++) {
    // Check if the 'identifier' (function above) has allredy
    // been appended the the element.
    if (elem[i].children[2].children[0].childNodes.length <= 1)   // The 'length' value counts form 1 not 0.
    {
      // finally append it to the post's title.
      elem[i].children[2].children[0].appendChild(identifier);
    }
  }
}

app.initializers.add('reflar/enso-theme', () => {
  extend(DiscussionListItem.prototype, "view", vnode => {
    addToDiscussionDropDown("Mark all as read", "icon fas fa-check Button-icon");
    addIdentifier();
   }
  )}
);
