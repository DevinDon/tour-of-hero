export interface Comment {
  id: number;
  belong: number; // hero.id
  content: string;
  date: number;
  dislike: number;
  like: number;
  reply?: number; // comment.id
}
