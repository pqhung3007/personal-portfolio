import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/assets/portrait.jpg";
import Container from "@/components/Container";

interface SocialLinkProps {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  children?: React.ReactNode;
}

function SocialLink({
  href,
  icon: Icon,
  className,
  children,
}: SocialLinkProps) {
  return (
    <li className={`flex ${className}`}>
      <Link
        href={href}
        className="group flex items-center text-sm font-semibold text-zinc-800 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
      >
        <Icon className="h-6 w-6 fill-zinc-600 group-hover:fill-blue-600 dark:fill-zinc-200 dark:group-hover:fill-blue-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="I'm Quang Hung Pham and this is my personal website. Hope you like it!"
        />
      </Head>

      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 ">
          <div className="lg:pl-20">
            <div className="max-w-xs px-12 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Portrait of Quang Hung Pham"
                className="aspect-square rotate-2 rounded-2xl object-cover"
                sizes="(min-width: 1024px) 32rem, 20rem"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className=" text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
              I&apos;m Quang Hung. I live in Hanoi, Vietnam, where I start to
              build my career.
            </h1>
            <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I entered the frontend web development zone in late 2021 and it
                was by far the best decision of my life. The combination of
                creativity, problem-solving, and technical skills make me feel
                more fulfilled and excited when doing frontend coding.
              </p>
              <p>
                Despite having gained a considerable amount of knowledge,
                I&apos;m still eager to learn more and more. Backend development
                and UX design seem appealing, and I would surely put them in my
                bucket list.
              </p>
              <p>
                When I&apos;m not working on a project, I like to spend my time
                with books. Whether it is about software requirements, project
                management or UI/UX design, I&apos;m always looking for new ways
                to dive deeper and finding inspiration from it. Because I
                believe that by staying knowledgeable, I can help other people
                to build better products.
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <ul className="px-12">
              <SocialLink
                href="https://www.facebook.com/hung.pq3007/"
                icon={FacebookIcon}
              >
                See my Facebook
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/hung.pq3007/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow my Instagram
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/hung.pq3007/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Visit my Github page
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/hung.pq3007/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                See my LinkedIn profile
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
