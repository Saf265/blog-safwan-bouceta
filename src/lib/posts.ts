import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "content");

const PostShema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.string(),
  published: z.boolean().optional().default(false),
});

type Post = z.infer<typeof PostShema> & {
  slug: string;
  content: string;
};

export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = [];
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    console.log(fileName);
    const frontmatter = matter(fileContent);

    const safeData = PostShema.safeParse(frontmatter.data);

    if (!safeData.success) {
      console.error(
        `Erreur lors de l'analyse du fichier : ${fileName}\n` +
          `Problèmes rencontrés :\n` +
          safeData.error.issues.map((i) => `- ${i.message}`).join("\n")
      );
      continue;
    }

    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    posts.push({
      ...safeData.data,
      slug: fileName.replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return posts;
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
