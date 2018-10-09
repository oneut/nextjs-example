import { Record } from "immutable";
import timeago from "timeago.js";
import { StoryAttributes } from "../attributes/Story";

const ItemRecord = Record<StoryAttributes>({
  by: "",
  descendants: 0,
  id: 0,
  score: 0,
  time: 0,
  title: "",
  type: "",
  url: "",
  kids: []
});

export class Story extends ItemRecord implements StoryAttributes {
  static newInstance(attributes?: StoryAttributes) {
    return new Story(attributes);
  }

  getUrl() {
    if (this.url) {
      return this.url;
    }

    return `/item/${this.id}}`;
  }

  getTimeAgo() {
    if (!this.time) {
      return null;
    }

    return timeago().format(new Date(this.time * 1000));
  }
}
