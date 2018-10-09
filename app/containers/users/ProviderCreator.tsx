import { bindActionCreators, createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import { UserAttributes } from "../../attributes/User";
import { rootReducer } from "./reducers/";
import * as userAction from "./actions/UserAction";
import { Container } from "./Container";

interface Props {
  user: UserAttributes;
}

interface Actions {
  user: {
    newInstance: userAction.NewInstance;
  };
}

export function createProvider(): React.SFC<Props> {
  return (props: Props) => {
    const store = createStore(rootReducer);

    const actions: Actions = {
      user: bindActionCreators(userAction, store.dispatch)
    };
    actions.user.newInstance(props.user);

    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  };
}
