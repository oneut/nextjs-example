import * as React from "react";
import { Link } from "../../../../routes";
import { Story } from "../../../models/Story";

interface Props {
  story: Story;
}

interface State {}

export class StoryComponent extends React.Component<Props, State> {
  render() {
    return (
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
            <li className="comments-link">
              <Link route={`/story/${this.props.story.id}`}>
                <a>{this.props.story.descendants} comments</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
