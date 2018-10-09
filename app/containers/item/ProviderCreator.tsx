import React from "react";
import { bindActionCreators, createStore } from "redux";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import { Container } from "./Container";
import { StoryAttributes } from "../../attributes/Story";
import * as storyAction from "./actions/StoryAction";
import * as commentsAction from "./actions/CommentsAction";

interface Props {
  story: StoryAttributes;
}

export interface Actions {
  story: {
    newInstance: storyAction.NewInstance;
  };
  comments: {
    sync: commentsAction.Sync;
  };
}

export function createProvider(): React.SFC<Props> {
  return (props: Props) => {
    const store = createStore(rootReducer);

    const actions: Actions = {
      story: bindActionCreators(storyAction, store.dispatch),
      comments: bindActionCreators(commentsAction, store.dispatch)
    };
    actions.story.newInstance(props.story);

    return (
      <Provider store={store}>
        <Container actions={actions} />
      </Provider>
    );
  };
}
