import Head from "next/head";
import { formatDate } from "@/utils/formatDate";

interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export function ArticleLayout({
  metadata,
  children,
}: {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
        <header>
          <div className="flex items-center text-base text-zinc-400">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
            <span className="ml-2">{formatDate(metadata.date)}</span>
          </div>
        </header>
        <article className="prose mt-8 dark:prose-invert">{children}</article>
      </div>
    </>
  );
}
