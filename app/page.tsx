import { getPosts } from "@/lib/posts";

export default async function Home() {
  const fileNames = await getPosts();
  return (
    <>
      <ul>
        {fileNames.map((fileName) => (
          <li key={fileName}>{fileName}</li>
        ))}
      </ul>
      {/* <button className="btn btn-primary">Click me!</button> */}
    </>
  );
}
