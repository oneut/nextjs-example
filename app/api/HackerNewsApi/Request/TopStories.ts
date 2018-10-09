import { cache } from "./Cache";
import { api } from "./Api";

export async function getIds(): Promise<number[]> {
  if (cache.has("topstories")) {
    const cacheValue = cache.get("topstories");
    if (cacheValue) {
      return cacheValue;
    }
  }
  const snapshot = await api.child("/topstories").once("value");
  const value: number[] = snapshot.val();
  cache.set("topstories", value);
  return value;
}
