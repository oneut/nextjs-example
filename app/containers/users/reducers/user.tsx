import { User } from "../../../models/User";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions/UserAction";
import { UserAttributes } from "../../../attributes/User";

export const user = reducerWithInitialState(User.newInstance()).case(
  actions.newInstance,
  (_, Payload: UserAttributes) => {
    return User.newInstance(Payload);
  }
);
