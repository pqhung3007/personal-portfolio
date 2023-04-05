import { formatDate } from "@/utils/formatDate";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export default function Article({ article }: { article: ArticleMetadata }) {
  return (
    <div className="group relative flex flex-col items-start">
      <p className="relative z-20 mb-4 flex items-center pl-3 text-sm text-zinc-400">
        <span className="absolute inset-y-0 left-0 flex items-center">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
        </span>
        {formatDate(article.date)}
      </p>
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        <div className="absolute -inset-y-6 -inset-x-4 z-10 bg-zinc-50 opacity-0 transition group-hover:opacity-100 sm:rounded-xl" />
        <Link href={`/articles/${article.slug}`}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:rounded-2xl" />
          <span className="relative z-10">{article.title}</span>
        </Link>
      </h2>
      <p className="relative z-10 mt-4 text-sm leading-6 text-zinc-600">
        {article.description}
      </p>

      <div className="relative z-10 mt-4 flex items-center text-sm font-semibold text-blue-500">
        Read article
        <ChevronRightIcon className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}
