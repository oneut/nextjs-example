import * as Item from "./Request/Item";
import { StoryAttributes } from "../../attributes/Story";
import { getIds } from "./Request/TopStories";

const displayNumber = 20;

export async function get(page: number = 1): Promise<StoryAttributes[]> {
  const ids: number[] = await getIds();
  const offset: number = displayNumber * (page - 1);
  const limit: number = offset + displayNumber;
  return Promise.all(
    ids.slice(offset, limit).map(async (id) => Item.find<StoryAttributes>(id))
  );
}
