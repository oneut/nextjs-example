import { List } from "immutable";
import { Comment } from "../../../models/Comment";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions/CommentsAction";
import { CommentAttributes } from "../../../attributes/Comment";

export const comments = reducerWithInitialState(List()).case(
  actions.sync,
  (_, payload: CommentAttributes[]) => {
    const newState = List();
    return newState.withMutations((newState) => {
      payload.forEach((commentAttributes) =>
        newState.push(Comment.newInstance(commentAttributes))
      );
    });
  }
);
