import Article from "@/components/Article";
import ContentLayout from "@/components/ContentLayout";
import { getAllArticles } from "@/utils/getAllArticles";
import Head from "next/head";

interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export default function ArticleIndex({
  articles,
}: {
  articles: ArticleMetadata[];
}) {
  return (
    <>
      <Head>
        <title>Articles - Quang Hung</title>
        <meta
          name="description"
          content="The place where I pour out my musings on programming and design, as well as share what I've learned along the way."
        />
      </Head>
      <ContentLayout
        title="Writing on programming, design, and whatever that seems intrigue me"
        intro="The place where I pour out my musings on programming and design, as well as share what I've learned along the way."
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </ContentLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}
