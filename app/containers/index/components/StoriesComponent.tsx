import * as React from "react";
import { StoryComponent } from "./StoryComponent";
import { Link } from "../../../../routes";
import { Story } from "../../../models/Story";
import { List } from "immutable";

interface Props {
  stories: List<Story>;
}

interface State {}

export class StoriesComponent extends React.Component<Props, State> {
  render() {
    const StoryComponents = this.props.stories.map((story: Story) => (
      <StoryComponent key={story.id} story={story} />
    ));
    return (
      <div className="container">
        {StoryComponents}
        <h3>
          <Link route="/news/2">
            <a>more</a>
          </Link>
        </h3>
      </div>
    );
  }
}
