import { combineReducers } from "redux";
import { story } from "./story";
import { comments } from "./comments";

export const rootReducer = combineReducers({
  comments,
  story
});
