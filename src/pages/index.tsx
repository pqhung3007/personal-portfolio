import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Skills from "@/components/Skills";
import Article from "@/components/Article";
import Container from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/components/SocialIcons";
import { getAllArticles } from "@/utils/getAllArticles";

import image1 from "@/assets/row/image-1.jpg";
import image2 from "@/assets/row/image-2.jpg";
import image3 from "@/assets/row/image-3.jpg";
import image4 from "@/assets/row/image-4.jpg";
import image5 from "@/assets/row/image-5.jpg";

interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
}

function PhotosRow() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "-rotate-2",
    "rotate-2",
  ];
  let assets = [image1, image2, image3, image4, image5];

  return (
    <div className="mx-auto mt-16 max-w-screen-xl overflow-hidden sm:mt-20">
      <div className="flex gap-4 sm:gap-10">
        <div className="flex min-w-full flex-shrink-0 animate-flow justify-center gap-4 py-4 sm:gap-10">
          {assets.map((image, index) => (
            <div
              className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 ${
                rotations[index % rotations.length]
              }`}
              key={image.src}
            >
              <Image
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* doubling the image rows to create a seamless scrolling effect */}
        <div
          aria-hidden="true"
          className="flex min-w-full flex-shrink-0 animate-flow justify-center gap-4 py-4 sm:gap-10"
        >
          {assets.map((image, index) => (
            <div
              className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 ${
                rotations[index % rotations.length]
              }`}
              key={image.src}
            >
              <Image
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <Link href={href} className="group -m-1 p-1">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-blue-600 dark:fill-zinc-200 group-hover:dark:fill-blue-400" />
    </Link>
  );
}

export default function Home({ articles }: { articles: ArticleMetadata[] }) {
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
      <Container className="relative mt-10">
        <div className="max-w-2xl">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Front-end developer and book enthusiast
          </h1>
          <p className="track mt-6 text-base leading-7 tracking-[0.01rem] text-zinc-600 dark:text-zinc-400">
            I&apos;m Quang Hung, a frontend developer and a senior student based
            in Hanoi, Vietnam. My top priority is to arm myself with the best
            software knowledge in order to prepare for the future profession.
          </p>

          <div className="mt-8 flex gap-4">
            <SocialLink
              href="https://www.facebook.com/hung.pq3007/"
              icon={FacebookIcon}
            />
            <SocialLink
              href="https://www.facebook.com/hung.pq3007/"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.facebook.com/hung.pq3007/"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.facebook.com/hung.pq3007/"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <PhotosRow />

      <Container className="mt-20">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          <div className="lg:pl-16">
            <Skills />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 3)
        .map(({ component, ...metadata }) => metadata),
    },
  };
}
