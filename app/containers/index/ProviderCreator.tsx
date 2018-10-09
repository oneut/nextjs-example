import React from "react";
import { Provider } from "react-redux";
import { bindActionCreators, createStore } from "redux";
import * as storiesAction from "./actions/StoriesAction";
import { StoryAttributes } from "../../attributes/Story";
import { Container } from "./Container";
import { rootReducer } from "./reducers/";

interface Props {
  stories: StoryAttributes[];
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
        <Container />
      </Provider>
    );
  };
}
