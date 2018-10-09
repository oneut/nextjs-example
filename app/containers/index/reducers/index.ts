import { combineReducers } from "redux";
import { List } from "immutable";
import { stories } from "./stories";
import { Story } from "../../../models/Story";

export interface CombinedState {
  stories: List<Story>;
}

export const rootReducer = combineReducers<CombinedState>({
  stories
});
