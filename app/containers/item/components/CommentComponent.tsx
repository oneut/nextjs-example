import React from "react";
import { Link } from "../../../../routes";
import { Comment } from "../../../models/Comment";

interface Props {
  comment: Comment;
}

interface State {}

export class CommentComponent extends React.Component<Props, State> {
  render() {
    const commentComponents = this.props.comment.comments
      .filter((comment: Comment) => !!comment.by)
      .map((comment: Comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ));
    return (
      <li>
        <dl>
          <dt>
            <ul className="list-inline">
              <li className="by">
                <Link route={`/user/${this.props.comment.by}`}>
                  <a>{this.props.comment.by}</a>
                </Link>
              </li>
              <li className="time">{this.props.comment.getTimeAgo()}</li>
            </ul>
          </dt>
          <dd>
            <p dangerouslySetInnerHTML={{ __html: this.props.comment.text }} />
            <ul>{commentComponents}</ul>
          </dd>
        </dl>
      </li>
    );
  }
}
