import React from "react";
import { connect } from "react-redux";
import { Header } from "../../common/Layouts/components/Header";
import { StoryComponent } from "./components/StoryComponent";
import { Story } from "../../models/Story";
import { Comment } from "../../models/Comment";
import { Actions } from "./ProviderCreator";
import { List } from "immutable";

interface Props {
  story: Story;
  comments: List<Comment>;
  actions: Actions;
}

interface State {}

interface ConnectState {
  story: Story;
  comments: List<Comment>;
}

class StoryContainer extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Header />
        <StoryComponent
          story={this.props.story}
          comments={this.props.comments}
          actions={this.props.actions}
        />
      </div>
    );
  }
}

export const Container = connect((state: ConnectState) => ({
  story: state.story,
  comments: state.comments
}))(StoryContainer);
