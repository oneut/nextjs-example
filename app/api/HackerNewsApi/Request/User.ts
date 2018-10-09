import { api } from "./Api";
import { cache } from "./Cache";
import { UserAttributes } from "../../../attributes/User";

export async function find(id: number): Promise<UserAttributes> {
  if (cache.has(`/user/${id}`)) return cache.get(`/user/${id}`);
  const snapshot = await api.child(`/user/${id}`).once("value");
  const value: UserAttributes = snapshot.val();
  cache.set(`/user/${id}`, value);
  return value;
}
