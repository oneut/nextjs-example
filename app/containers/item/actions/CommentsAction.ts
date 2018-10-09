import actionCreatorFactory, { ActionCreator } from "typescript-fsa";
import { CommentAttributes } from "../../../attributes/Comment";

export type Sync = ActionCreator<CommentAttributes[]>;

const actionCreator = actionCreatorFactory();

export const sync: Sync = actionCreator<CommentAttributes[]>("comments/sync");
