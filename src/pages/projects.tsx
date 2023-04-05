import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";
import logoSpeaker from "@/assets/logos/speaker.svg";
import logoPainting from "@/assets/logos/painting.svg";
import logoClock from "@/assets/logos/clock.svg";
import logoQuiz from "@/assets/logos/quiz.svg";
import logoRecorder from "@/assets/logos/film-recorder.svg";
import logoNote from "@/assets/logos/note.svg";

export default function Projects() {
  const projects = [
    {
      name: "Jemember",
      description:
        "The flashcard-based learning app that helps you memorize crucial knowledge.",
      link: {
        href: "https://jemember.jsclub.tech/",
        label: "jemember.jsclub.tech",
      },
      logo: logoQuiz,
    },
    {
      name: "Dev Notes",
      description:
        "Your own notebook. Write down your notes, ideas, and thoughts and share them with your friends.",
      link: {
        href: "https://audiophile-ecommerce-website-pqhung3007.vercel.app/",
        label: "View project",
      },
      logo: logoNote,
    },
    {
      name: "Audiophile",
      description:
        "A simple, multi-page e-commerce website that sells headphones and speakers.",
      link: {
        href: "https://audiophile-ecommerce-website-pqhung3007.vercel.app/",
        label: "vercel.com",
      },
      logo: logoSpeaker,
    },
    {
      name: "Art Gallery",
      description:
        "An aesthetically pleasing gallery showing some of middle-aged masterpieces.",
      link: {
        href: "https://art-gallery-pqhung3007.vercel.app/",
        label: "vercel.com",
      },
      logo: logoPainting,
    },
    {
      name: "Pomodoro Clock",
      description:
        "A simple, yet effective pomodoro clock that helps you focus on your work.",
      link: {
        href: "https://pomodoro-clock-pqhung3007.vercel.app/",
        label: "vercel.com",
      },
      logo: logoClock,
    },
    {
      name: "Movie Entertainment App",
      description:
        "The platform that helps you find and save the best movies and TV shows.",
      link: {
        href: "https://movie-entertainment-app-yis8-pqhung3007.vercel.app/",
        label: "vercel.com",
      },
      logo: logoRecorder,
    },
  ];

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Things I've put my effort into" />
      </Head>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-32 sm:px-8">
        <header className="max-w-2xl">
          <h1 className="  text-4xl font-bold tracking-tight text-zinc-800">
            Things I&apos;ve made so far to sharpen my skills
          </h1>
          <p className="mt-6 text-base text-zinc-600">
            Welcome to my project showcase, where I highlight some of my
            favorite mini projects that showcase my skills in web development
            and design, giving you a glimpse into my creative process and the
            passion I bring to each project
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const { name, description, link, logo } = project;
              return (
                <li
                  key={name}
                  className="group relative flex flex-col items-start"
                >
                  <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-900/10">
                    <Image src={logo} alt="name" className="h-8 w-8" />
                  </div>

                  <h2 className="mt-6 text-base font-semibold text-zinc-800">
                    <div className="absolute -inset-y-6 -inset-x-4 z-10 bg-zinc-50 opacity-0 transition group-hover:opacity-100 sm:rounded-xl" />
                    <Link href={link.href}>
                      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:rounded-2xl" />
                      <span className="relative z-10">{name}</span>
                    </Link>
                  </h2>

                  <p className="z-10 mt-2 text-sm font-medium text-zinc-600">
                    {description}
                  </p>
                  <p className="z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-blue-500">
                    <LinkIcon className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600" />
                    <span className="ml-2">{link.label}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
