import React from "react";
import { StoryComponent } from "./StoryComponent";
import { Link } from "../../../../routes";
import { List } from "immutable";
import { Story } from "../../../models/Story";

interface Props {
  stories: List<Story>;
  url: {
    query: {
      page: string;
    };
  };
}

interface State {}

export class StoriesComponent extends React.Component<Props, State> {
  render() {
    const storyComponents = this.props.stories.map((story) => (
      <StoryComponent key={story.id} story={story} />
    ));
    return (
      <div className="container">
        {storyComponents}
        <h3>
          <Link route={`/news/${Number(this.props.url.query.page) + 1}`}>
            <a>more</a>
          </Link>
        </h3>
      </div>
    );
  }
}
