import React from "react";
import { hackerNewsApi } from "../app/api/HackerNewsApi/";
import { createProvider } from "../app/containers/index/ProviderCreator";
import { StoryAttributes } from "../app/attributes/Story";
import Error from "next/error";

interface Props {
  stories: StoryAttributes[];
}

interface State {}

export default class Index extends React.Component<Props, State> {
  static async getInitialProps() {
    return {
      stories: await hackerNewsApi.getTopStories()
    };
  }

  render() {
    if (!this.props.stories.length) return <Error statusCode={404} />;

    const Provider = createProvider();

    return <Provider stories={this.props.stories} />;
  }
}
