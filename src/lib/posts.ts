import fs from "fs/promises";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content");

export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  console.log(fileNames);

  return fileNames;
};
