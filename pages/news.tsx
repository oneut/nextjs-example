import { withRouter, WithRouterProps } from "next/router";
import React from "react";
import { hackerNewsApi } from "../app/api/HackerNewsApi/";
import { createProvider } from "../app/containers/news/ProviderCreator";
import { StoryAttributes } from "../app/attributes/Story";
import Error from "next/error";

interface Props {
  stories: StoryAttributes[];
  router: {
    query: {
      page: string;
    };
  };
}

interface State {}

class News extends React.Component<Props & WithRouterProps, State> {
  static async getInitialProps(attributes: any) {
    if (
      isNaN(parseFloat(attributes.query.page)) ||
      !isFinite(attributes.query.page)
    ) {
      return {
        stories: []
      };
    }

    const page = attributes.query.page || 1;
    return {
      stories: await hackerNewsApi.getTopStories(page)
    };
  }

  render() {
    if (!this.props.stories.length) return <Error statusCode={404} />;

    const Provider = createProvider();

    return <Provider stories={this.props.stories} url={this.props.router} />;
  }
}

export default withRouter(News);
