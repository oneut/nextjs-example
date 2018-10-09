import { bindActionCreators, createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { rootReducer } from "./reducers";
import * as storiesAction from "./actions/StoriesAction";
import { Container } from "./Container";
import { StoryAttributes } from "../../attributes/Story";

interface Props {
  stories: StoryAttributes[];
  url: {
    query: {
      page: string;
    };
  };
}

export interface Actions {
  stories: {
    sync: storiesAction.Sync;
  };
}

export function createProvider(): React.SFC<Props> {
  return (props: Props) => {
    const store = createStore(rootReducer);

    const actions: Actions = {
      stories: bindActionCreators(storiesAction, store.dispatch)
    };
    actions.stories.sync(props.stories);

    return (
      <Provider store={store}>
        <Container url={props.url} actions={actions} />
      </Provider>
    );
  };
}
