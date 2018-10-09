import { ActionCreator, actionCreatorFactory } from "typescript-fsa";
import { UserAttributes } from "../../../attributes/User";

export type NewInstance = ActionCreator<UserAttributes>;

const actionCreator = actionCreatorFactory();

export const newInstance: NewInstance = actionCreator<UserAttributes>(
  "user/newInstance"
);
