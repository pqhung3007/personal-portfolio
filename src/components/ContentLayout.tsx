interface LayoutProps {
  title: string;
  intro: string;
  children: React.ReactNode;
}

export default function ContentLayout({ title, intro, children }: LayoutProps) {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-32 sm:px-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600">{intro}</p>
      </header>
      <main className="mt-16 sm:mt-20">{children}</main>
    </section>
  );
}
