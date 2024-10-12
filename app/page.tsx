import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const fileNames = await getPosts();
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {fileNames.map((fileName) => (
          <div className="card bg-base-100 shadow-xl" key={fileName.slug}>
            <div className="card-body">
              <h2 className="card-title">{fileName.title}</h2>
              <p>Date: {fileName.publishedAt}</p>
              <Link
                href={`/posts/${fileName.slug}`}
                className="btn btn-primary"
              >
                Lire plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
