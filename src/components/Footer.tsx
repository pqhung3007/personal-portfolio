import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="border-t border-zinc-100 py-10 pb-16">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/books">Books</NavLink>
            </div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Quang Hung Pham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:font-medium hover:text-blue-600"
    >
      {children}
    </Link>
  );
}
