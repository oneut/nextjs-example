import * as Item from "./Request/Item";
import { CommentAttributes } from "../../attributes/Comment";

export async function getByIds(ids: number[]): Promise<CommentAttributes[]> {
  if (!ids) {
    return [];
  }

  const comments: CommentAttributes[] = await Promise.all(
    ids.map(async (id: number) => Item.find<CommentAttributes>(id))
  );
  return Promise.all(
    comments.map(async (comment: CommentAttributes) => {
      if (!comment.kids) {
        return comment;
      }
      comment.comments = await getByIds(comment.kids);
      return comment;
    })
  );
}
