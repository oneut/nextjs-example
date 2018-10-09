import { CommentAttributes } from "../../attributes/Comment";
import { StoryAttributes } from "../../attributes/Story";
import { getIds } from "./Request/TopStories";
import { UserAttributes } from "../../attributes/User";
import * as Item from "./Request/Item";
import * as User from "./Request/User";

class HackerNewsApi {
  private displayNumber: number = 20;

  async getTopStories(page: number = 1): Promise<StoryAttributes[]> {
    const ids: number[] = await getIds();
    const offset: number = this.displayNumber * (page - 1);
    const limit: number = offset + this.displayNumber;
    return Promise.all(
      ids
        .slice(offset, limit)
        .map(async (id: number) => Item.find<StoryAttributes>(id))
    );
  }

  async findStory(id: number): Promise<StoryAttributes> {
    return Item.find<StoryAttributes>(id);
  }

  async getCommentsByIds(ids: number[]): Promise<CommentAttributes[]> {
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
        comment.comments = await this.getCommentsByIds(comment.kids);
        return comment;
      })
    );
  }

  async findUser(id: number): Promise<UserAttributes> {
    return User.find(id);
  }
}

export const hackerNewsApi = new HackerNewsApi();
