import React from "react";
import { connect } from "react-redux";
import { Header } from "../../common/Layouts/components/Header";
import { StoriesComponent } from "./components/StoriesComponent";
import { List } from "immutable";
import { Story } from "../../models/Story";
import { Actions } from "./ProviderCreator";

interface Props {
  stories: List<Story>;
  url: {
    query: {
      page: string;
    };
  };
  actions: Actions;
}

interface State {}

interface ConnectState {
  stories: List<Story>;
}

class NewsContainer extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Header />
        <StoriesComponent stories={this.props.stories} url={this.props.url} />
      </div>
    );
  }
}

export const Container = connect((state: ConnectState) => ({
  stories: state.stories
}))(NewsContainer);
