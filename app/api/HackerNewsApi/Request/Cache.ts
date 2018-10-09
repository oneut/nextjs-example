import LRU from "lru-cache";

export const cache = LRU<string, any>({
  max: 500,
  maxAge: 1000 * 60 * 60
});
