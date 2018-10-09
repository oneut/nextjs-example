import React from "react";
import { connect } from "react-redux";
import { StoriesComponent } from "./components/StoriesComponent";
import { Story } from "../../models/Story";
import { List } from "immutable";
import { Header } from "../../common/Layouts/components/Header";

interface Props {
  stories: List<Story>;
}

interface State {}

interface ConnectState {
  stories: List<Story>;
}

class HomeContainer extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Header />
        <StoriesComponent stories={this.props.stories} />
      </div>
    );
  }
}

export const Container = connect((state: ConnectState) => ({
  stories: state.stories
}))(HomeContainer);
