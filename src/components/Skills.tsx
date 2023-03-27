import { PaintBrushIcon } from "@heroicons/react/24/outline";

import logoBootstrap from "@/images/logos/bootstrap.svg";
import logoCss from "@/images/logos/css.svg";
import logoFigma from "@/images/logos/figma.svg";
import logoFirebase from "@/images/logos/firebase.svg";
import logoGit from "@/images/logos/git.svg";
import logoHtml from "@/images/logos/html.svg";
import logoJavascript from "@/images/logos/javascript.svg";
import logoJest from "@/images/logos/jest.svg";
import logoMysql from "@/images/logos/mysql.svg";
import logoNext from "@/images/logos/nextjs.svg";
import logoNpm from "@/images/logos/npm.svg";
import logoReact from "@/images/logos/react.svg";
import logoRedux from "@/images/logos/redux.svg";
import logoTailwind from "@/images/logos/tailwind.svg";
import logoTypeScript from "@/images/logos/typescript.svg";

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
      <ol className="mt-4 grid grid-cols-5 gap-y-2"></ol>
    </div>
  );
}
