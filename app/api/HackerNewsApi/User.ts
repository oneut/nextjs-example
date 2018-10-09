import * as User from "./Request/User";
import { UserAttributes } from "../../attributes/User";

export async function find(id: number): Promise<UserAttributes> {
  return User.find(id);
}
