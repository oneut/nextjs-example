import Immutable, { List, Record } from "immutable";
import timeago from "timeago.js";
import { CommentAttributes } from "../attributes/Comment";

interface ClassAttributes {
  by: string;
  id: number;
  text: string;
  parent: number;
  time: number;
  type: string;
  comments: List<Comment>;
  kids?: number[];
}

const CommentRecord = Record<ClassAttributes>({
  by: "",
  id: 0,
  parent: 0,
  text: "",
  time: 0,
  type: "",
  comments: List<Comment>(),
  kids: []
});

export class Comment extends CommentRecord implements ClassAttributes {
  constructor(classAttributes: ClassAttributes) {
    super(classAttributes);
  }

  static newInstance(attributes: CommentAttributes) {
    const classAttributes = {
      by: attributes.by,
      id: attributes.id,
      parent: attributes.parent,
      text: attributes.text,
      time: attributes.time,
      type: attributes.type,
      comments: Immutable.List().withMutations((newCommentList) => {
        if (!attributes.comments) {
          return;
        }
        attributes.comments.map((commentAttributes: CommentAttributes) =>
          newCommentList.push(Comment.newInstance(commentAttributes))
        );
      }),
      kids: attributes.kids
    };

    return new Comment(classAttributes);
  }

  getTimeAgo() {
    return timeago().format(new Date(this.time * 1000));
  }
}
