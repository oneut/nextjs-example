import React from "react";
import { from } from "rxjs";
import { hackerNewsApi } from "../../../api/HackerNewsApi/";
import { CommentComponent } from "./CommentComponent";
import { Link } from "../../../../routes";
import { Story } from "../../../models/Story";
import { Comment } from "../../../models/Comment";
import { Actions } from "../ProviderCreator";
import { CommentAttributes } from "../../../attributes/Comment";
import { List } from "immutable";

interface Props {
  story: Story;
  comments: List<Comment>;
  actions: Actions;
}

interface State {
  isLoading: boolean;
}

export class StoryComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    from(hackerNewsApi.getCommentsByIds(this.props.story.kids)).subscribe(
      (comments: CommentAttributes[]) => {
        this.props.actions.comments.sync(comments);
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const loadingComponent = this.getLoadingComponent();
    const commentComponents = this.getCommentComponents();
    return (
      <div className="container">
        <div className="news-item">
          <h3 className="title">
            <a href={this.props.story.getUrl()}>{this.props.story.title}</a>
          </h3>
          <div>
            <ul className="list-inline">
              <li className="score">{this.props.story.score} points</li>
              <li className="by">
                by{" "}
                <Link route={`/user/${this.props.story.by}`}>
                  <a>{this.props.story.by}</a>
                </Link>
              </li>
              <li className="time">{this.props.story.getTimeAgo()}</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Comment {loadingComponent}</h4>
          <ul>{commentComponents}</ul>
        </div>
      </div>
    );
  }

  getCommentComponents() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    if (this.props.comments.isEmpty()) {
      return <p>No comments yet.</p>;
    }

    return this.props.comments
      .filter((comment: Comment): boolean => !!comment.by)
      .map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ));
  }

  getLoadingComponent() {
    if (this.state.isLoading) {
      return (
        <span>
          <i className="fa fa-refresh fa-spin fa-fw" />
        </span>
      );
    }

    return null;
  }
}
