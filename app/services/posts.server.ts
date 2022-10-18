import { db } from "../db.server";
import type { Post } from "@prisma/client";

export const getPosts = async () => {
  const posts: Post[] = await db.post.findMany();
  return posts;
};
