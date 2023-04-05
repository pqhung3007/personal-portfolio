import Image from "next/image";
import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

import logoBootstrap from "@/assets/logos/bootstrap.svg";
import logoCss from "@/assets/logos/css.svg";
import logoFigma from "@/assets/logos/figma.svg";
import logoFirebase from "@/assets/logos/firebase.svg";
import logoGit from "@/assets/logos/git.svg";
import logoHtml from "@/assets/logos/html.svg";
import logoJavascript from "@/assets/logos/javascript.svg";
import logoJest from "@/assets/logos/jest.svg";
import logoMysql from "@/assets/logos/mysql.svg";
import logoNext from "@/assets/logos/nextjs.svg";
import logoNpm from "@/assets/logos/npm.svg";
import logoReact from "@/assets/logos/react.svg";
import logoRedux from "@/assets/logos/redux.svg";
import logoTailwind from "@/assets/logos/tailwind.svg";
import logoTypeScript from "@/assets/logos/typescript.svg";

export default function Skills() {
  let skills = [
    // the skill list includes HTML, CSS, JS, React, TypeScript, Tailwind, etc. Each item contain a name and a logo
    {
      name: "HTML",
      logo: logoHtml,
    },
    {
      name: "CSS",
      logo: logoCss,
    },
    {
      name: "TypeScript",
      logo: logoTypeScript,
    },
    {
      name: "JavaScript",
      logo: logoJavascript,
    },
    {
      name: "React",
      logo: logoReact,
    },
    {
      name: "Next.js",
      logo: logoNext,
    },
    {
      name: "Redux",
      logo: logoRedux,
    },
    {
      name: "TailwindCSS",
      logo: logoTailwind,
    },
    {
      name: "Bootstrap",
      logo: logoBootstrap,
    },
    {
      name: "Jest",
      logo: logoJest,
    },
    {
      name: "NPM",
      logo: logoNpm,
    },
    {
      name: "Git",
      logo: logoGit,
    },
    {
      name: "MySQL",
      logo: logoMysql,
    },
    {
      name: "Firebase",
      logo: logoFirebase,
    },
    {
      name: "Figma",
      logo: logoFigma,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-800">
        <PaintBrushIcon className="mr-2 h-5 w-5 text-zinc-500" />
        <span>Skills</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        The skills I have learned through my projects. But I am craving for
        more.
      </p>

      <ol className="mt-4 grid grid-cols-5 gap-y-4">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex}>
            <div className="group relative h-12 w-12 flex-none items-center justify-center rounded-full p-2 shadow-md ring-1 ring-zinc-100">
              <Image
                src={skill.logo}
                alt={skill.name}
                className="grayscale group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute -top-8 left-0 rounded bg-zinc-800 px-2 py-1 text-sm text-zinc-100 opacity-0 transition-opacity group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <a
        className="group mt-6 inline-flex w-full items-center justify-center rounded-md bg-zinc-50 p-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 active:text-zinc-800/60"
        href="/files/MyCV.pdf"
        target={"_blank"}
        download
      >
        Download CV
        <DocumentArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-500 group-hover:stroke-zinc-600" />
      </a>
    </div>
  );
}
