import { api } from "./Api";
import { cache } from "./Cache";

export async function find<T>(id: number): Promise<T> {
  if (cache.has(`item/${id}`)) {
    const cacheValue: T = cache.get(`item/${id}`);
    if (cacheValue) return cacheValue;
  }
  const snapshot = await api.child(`/item/${id}`).once("value");
  const value: T = snapshot.val();
  cache.set(`item/${id}`, value);
  return value;
}
