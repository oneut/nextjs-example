import actionCreatorFactory, { ActionCreator } from "typescript-fsa";
import { StoryAttributes } from "../../../attributes/Story";

export type NewInstance = ActionCreator<StoryAttributes>;

const actionCreator = actionCreatorFactory();

export const newInstance: NewInstance = actionCreator<StoryAttributes>(
  "item/newInstance"
);
