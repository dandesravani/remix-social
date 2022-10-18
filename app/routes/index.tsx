import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../services/posts.server";

type LoaderData = Awaited<ReturnType<typeof getPosts>>;

export const loader: LoaderFunction = async () => {
  const posts: LoaderData = await getPosts();
  return json(posts);
};

export default function Index() {
  const posts = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="font-bold red underline">Welcome to Remix</h1>
      <ul>
        {posts.map((post) => (
          <div key={post.title}>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
