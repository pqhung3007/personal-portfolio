import { ArrowUpIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
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
      <div className="relative mx-auto mt-16 max-w-prose px-4 sm:mt-20 lg:px-0">
        <header>
          <div className="flex items-center text-base text-zinc-400">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
            <span className="ml-2">{formatDate(metadata.date)}</span>
          </div>
        </header>
        <Link
          href="/articles"
          className="absolute -left-44 -top-2 hidden items-center rounded-lg px-3 py-2 font-semibold text-slate-700 transition hover:bg-slate-200/60 dark:text-slate-100 hover:dark:bg-blue-100/30 lg:inline-flex"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          See all posts
        </Link>

        <article className="prose mt-8 dark:prose-invert prose-img:rounded-lg">
          {children}
        </article>

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
