import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function Card({
  as: Component = "div",
  children,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Component className="group relative flex flex-col items-start">
      {children}
    </Component>
  );
}

Card.Title = function CardTitle({
  as: Component = "h2",
  href,
  children,
}: {
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Component className="text-base font-semibold text-zinc-800">
      {href ? <Card.Link href={href}>{children}</Card.Link> : { children }}
    </Component>
  );
};

Card.Link = function CardLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 shadow-sm shadow-zinc-300 transition group-hover:scale-100 group-hover:opacity-100  sm:rounded-2xl" />
      <Link href={href}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.HelperText = function CardHelperText({
  as: Component = "p",
  children,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Component className="relative z-20 mb-4 flex items-center pl-3 text-sm text-zinc-400">
      <span className="absolute inset-y-0 left-0 flex items-center">
        <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
      </span>
      {children}
    </Component>
  );
};

Card.Description = function CardDescription({
  as: Component = "p",
  children,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Component className="relative z-10 mt-4 text-sm leading-6 text-zinc-600">
      {children}
    </Component>
  );
};

Card.Cta = function CardCta({
  as: Component = "a",
  children,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Component className="relative z-10 mt-4 flex items-center text-sm font-semibold text-zinc-600 group-hover:text-blue-500">
      {children}
      <ChevronRightIcon className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
    </Component>
  );
};
