import { getPosts } from "@/lib/posts";
import Link from "next/link"; // Ajout de l'importation du composant Link

export default async function Home() {
  const fileNames = await getPosts();
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {fileNames.map((fileName) => (
          <div className="card bg-base-100 shadow-xl" key={fileName.slug}>
            <div className="card-body">
              <h2 className="card-title">{fileName.title}</h2>
              <p>Date: {fileName.publishedAt}</p> {/* Ajout de la date */}
              <Link
                href={`/posts/${fileName.slug}`}
                className="btn btn-primary"
              >
                Lire plus
              </Link>{" "}
              {/* Lien vers le post */}
            </div>
          </div>
        ))}
      </div>
      {/* <button className="btn btn-primary">Click me!</button> */}
    </>
  );
}
