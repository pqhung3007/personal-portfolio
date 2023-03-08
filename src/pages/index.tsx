import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pham Quang Hung - Senior student, Front-end enthusiast</title>
        <meta
          name="description"
          content="I'm Quang Hung Pham and this is my personal website. Hope you like it!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10 relative px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-700">
            Front-end developer and book enthusiast
          </h1>
          <p className="mt-6 text-zinc-600">I'm Pham Quang Hung</p>
        </div>
      </main>
    </>
  );
}
