import { Record } from "immutable";
import { UserAttributes } from "../attributes/User";

const UserRecord = Record<UserAttributes>({
  id: "",
  karma: 0,
  created: 0
});

export class User extends UserRecord {
  static newInstance(attributes?: UserAttributes) {
    return new User(attributes);
  }
}
