// import NProgress from "nprogress";
import React from "react";
import { hackerNewsApi } from "../app/api/HackerNewsApi/";
import { createProvider } from "../app/containers/item/ProviderCreator";
import { StoryAttributes } from "../app/attributes/Story";
import Error from "next/error";

interface Props {
  story: StoryAttributes;
}

interface State {}

export default class Story extends React.Component<Props, State> {
  static async getInitialProps(attributes: any) {
    return {
      story: await hackerNewsApi.findStory(attributes.query.storyId)
    };
  }

  render() {
    if (!this.props.story) return <Error statusCode={404} />;

    const Provider = createProvider();

    return <Provider story={this.props.story} />;
  }
}
