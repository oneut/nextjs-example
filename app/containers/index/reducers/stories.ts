import { reducerWithInitialState } from "typescript-fsa-reducers";
import { List } from "immutable";
import { Story } from "../../../models/Story";
import * as actions from "../actions/StoriesAction";
import { StoryAttributes } from "../../../attributes/Story";

export const stories = reducerWithInitialState(List()).case(
  actions.sync,
  (_, payload: StoryAttributes[]) => {
    const newState: List<Story> = List();
    return newState.withMutations((newState: List<Story>) => {
      payload.map((StoryAttributes: StoryAttributes) =>
        newState.push(new Story(StoryAttributes))
      );
    });
  }
);
