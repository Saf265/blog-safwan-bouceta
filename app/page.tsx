import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const fileNames = await getPosts();
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {fileNames.map((post) => (
          <div className="card bg-base-100 shadow-xl" key={post.slug}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>Date: {post.publishedAt}</p>
              <Link href={`/posts/${post.slug}`} className="btn btn-primary">
                Lire plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
