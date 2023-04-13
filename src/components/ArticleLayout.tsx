import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useEffect, useState } from "react";

import { formatDate } from "@/utils/formatDate";
import { ArticleMetadata } from "@/utils/types";

export function ArticleLayout({
  metadata,
  children,
}: {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", showScrollButton);
    return () => window.removeEventListener("scroll", showScrollButton);
  }, []);

  function showScrollButton() {
    return window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="relative mx-auto mt-16 max-w-2xl px-4 sm:mt-20 lg:px-0">
        <header>
          <div className="flex items-center text-base text-zinc-400">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
            <span className="ml-2">{formatDate(metadata.date)}</span>
          </div>
        </header>
        <article className="prose mt-8 dark:prose-invert">{children}</article>

        <button
          type="button"
          className={`${
            isVisible ? "block" : "hidden"
          } group fixed bottom-12 right-20 rounded-full bg-white p-3 shadow-md shadow-zinc-800/5 dark:bg-zinc-700`}
          onClick={handleScrollToTop}
        >
          <ArrowUpIcon className="h-6 w-6 text-zinc-400 transition group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
        </button>
      </div>
    </>
  );
}
