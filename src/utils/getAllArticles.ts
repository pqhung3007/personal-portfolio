import * as path from "path";
import glob from "fast-glob";

export async function getAllArticles() {
  // glob gives access to match the file pattern in the directory
  let articlesPath = await glob(["*.mdx", "*/index.mdx"], {
    // indicate the path where the articles are located
    cwd: path.join(process.cwd(), "src/pages/articles"),
  });

  let articles = await Promise.all(articlesPath.map(importArticles));

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

async function importArticles(path: string) {
  let { metadata, default: component } = await import(
    `../pages/articles/${path}`
  );

  return {
    ...metadata,
    component,
    slug: path.replace(/(\/index)?\.mdx$/, ""),
  };
}
