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
        className="group flex items-center text-sm font-semibold text-zinc-800 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-zinc-100"
      >
        <Icon className="h-6 w-6 fill-zinc-600 group-hover:fill-blue-500 dark:fill-zinc-200" />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                sequi optio ex quis laboriosam cupiditate vel, libero impedit
                magni molestiae exercitationem tenetur esse voluptatum
                perferendis consectetur, quae voluptatem nostrum corrupti!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta labore ad ipsam ullam consequatur ducimus vel earum, enim
                temporibus numquam eaque aliquid maiores odio? Ipsa odio eaque
                saepe, laborum doloribus architecto ab quo error enim provident
                dolore repellendus nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                voluptatum deleniti repellendus libero ad neque similique
                laborum! Fugit facilis necessitatibus praesentium rem, iste
                nostrum est qui id corrupti nemo vel quis, eius enim ea. Dolorum
                earum quis ad provident aliquid.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                iste nulla quae autem ut vel sequi repellendus facilis fugit,
                necessitatibus totam consectetur incidunt cumque dolor
                doloremque culpa perspiciatis omnis harum. Ducimus, nam.
                Recusandae illo expedita natus optio laudantium illum reiciendis
                culpa dolore reprehenderit sed iure veritatis tenetur magnam
                ipsam soluta architecto, dolores autem aliquam, distinctio non
                quia accusamus! Culpa, impedit!
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
