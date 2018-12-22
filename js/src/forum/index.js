import app from 'flarum/app';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { extend } from "flarum/extend";

app.initializers.add('reflar/enso-theme', () => {
  extend(DiscussionListItem.prototype, "view", vnode => {
    vnode.children.push(<span>iH</span>);
  });
});