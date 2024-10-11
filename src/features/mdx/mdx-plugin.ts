import rehypeShiki from "@shikijs/rehype";
import type { PluggableList } from "unified";

const shikiPlugin = [
  rehypeShiki,
  {
    theme: "github-dark",
  },
] satisfies PluggableList[number];
export const rehypePlugin = [shikiPlugin] satisfies PluggableList;
