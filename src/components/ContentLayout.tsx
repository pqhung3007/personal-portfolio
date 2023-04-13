import { headingVariants } from "@/utils/animation";
import { LayoutProps } from "@/utils/types";
import { motion } from "framer-motion";
import Container from "./Container";

export default function ContentLayout({ title, intro, children }: LayoutProps) {
  return (
    <Container className="mt-16 sm:mt-24">
      <motion.header
        className="max-w-2xl"
        variants={headingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </motion.header>
      <main className="mt-16 sm:mt-20">{children}</main>
    </Container>
  );
}
