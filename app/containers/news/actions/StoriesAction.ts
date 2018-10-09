import actionCreatorFactory, { ActionCreator } from "typescript-fsa";
import { StoryAttributes } from "../../../attributes/Story";

export type Sync = ActionCreator<StoryAttributes[]>;

const actionCreator = actionCreatorFactory();

export const sync: Sync = actionCreator<StoryAttributes[]>("stories/sync");
