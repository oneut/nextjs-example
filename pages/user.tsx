// import NProgress from "nprogress";
import React from "react";
import { hackerNewsApi } from "../app/api/HackerNewsApi/";
import { createProvider } from "../app/containers/users/ProviderCreator";
import Error from "next/error";
import { UserAttributes } from "../app/attributes/User";

interface Props {
  user: UserAttributes;
  router: {
    query: {
      page: string;
    };
  };
}

interface State {}

interface Params {
  query: {
    userId: number;
  };
}

export default class User extends React.Component<Props, State> {
  static async getInitialProps(params: Params) {
    return {
      user: await hackerNewsApi.findUser(params.query.userId)
    };
  }

  render() {
    if (!this.props.user) return <Error statusCode={404} />;

    const Provider = createProvider();

    return <Provider user={this.props.user} />;
  }
}
