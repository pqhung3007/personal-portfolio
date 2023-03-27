import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Skills from "@/components/Skills";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/components/SocialIcons";

import image1 from "@/assets/row/image-1.jpg";
import image2 from "@/assets/row/image-2.jpg";
import image3 from "@/assets/row/image-3.jpg";
import image4 from "@/assets/row/image-4.jpg";
import image5 from "@/assets/row/image-5.jpg";

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
    <div className="mt-16 max-w-screen-xl overflow-hidden sm:mt-20">
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
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
    </Link>
  );
}

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
      <section className="relative mt-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-700 sm:text-5xl">
            Front-end developer and book enthusiast
          </h1>
          <p className="track mt-6 text-base leading-7 tracking-[0.01rem] text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quam at aut, repellat impedit aliquam veniam, labore voluptatibus
            recusandae est, doloribus unde voluptates itaque porro fugit ipsam
            fuga? Numquam, ducimus?
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
      </section>
      <PhotosRow />

      <div className="mx-auto max-w-xl ">
        <Skills />
      </div>
    </>
  );
}
