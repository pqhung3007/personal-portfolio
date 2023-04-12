import Head from "next/head";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

import { Card } from "@/components/Card";
import ContentLayout from "@/components/ContentLayout";
import { cardVariants } from "@/utils/animation";

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

      <ContentLayout
        title="Things I've made so far to sharpen my skills"
        intro="Welcome to my project showcase, where I highlight some of my favorite mini projects that showcase my skills in web development and design, giving you a glimpse into my creative process and the passion I bring to each project"
      >
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {projects.map((project) => {
              const {
                name,
                description,
                link: { label, href },
                logo,
              } = project;
              return (
                <motion.div
                  key={name}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card as="li">
                    <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-900/10">
                      <Image src={logo} alt="name" className="h-8 w-8" />
                    </div>

                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <Card.Link href={href}>{name}</Card.Link>
                    </h2>

                    <Card.Description>{description}</Card.Description>
                    <Card.Cta>
                      <LinkIcon className="mr-2 h-4 w-4 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-600 dark:group-hover:text-zinc-400" />
                      {label}
                    </Card.Cta>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </ul>
      </ContentLayout>
    </>
  );
}
