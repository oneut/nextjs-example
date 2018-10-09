import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Story } from "../../../models/Story";
import * as actions from "../actions/StoryAction";
import { StoryAttributes } from "../../../attributes/Story";

export const story = reducerWithInitialState(Story.newInstance()).case(
  actions.newInstance,
  (_, payload: StoryAttributes) => {
    return Story.newInstance(payload);
  }
);
