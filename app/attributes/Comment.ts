export interface CommentAttributes {
  by: string;
  id: number;
  text: string;
  parent: number;
  time: number;
  type: string;
  comments: CommentAttributes[];
  kids?: number[];
}
