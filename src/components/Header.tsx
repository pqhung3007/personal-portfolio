import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import Container from "./Container";

import portrait from "@/assets/portrait.jpg";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function Header() {
  function handleSetTheme() {
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let isDarkMode = document.documentElement.classList.toggle("dark");
    if (isDarkMode === systemTheme) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <div className="sticky top-8 z-10 mt-8">
      <Container>
        <div className="flex items-center gap-4">
          <div className="flex flex-1">
            <Image
              src={portrait}
              alt="portrait"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-zinc-300 ring-offset-1 md:h-10 md:w-10"
            />
          </div>
          <div className=" flex flex-1 justify-end md:justify-center">
            <DesktopNavigation className="hidden md:block" />
            <MobileNavigation className="block md:hidden" />
          </div>
          <div className="flex justify-end md:flex-1">
            <button
              aria-label="Toggle dark mode"
              className="ring1 rounded-full bg-white px-3 py-2 shadow-md shadow-zinc-800/5 ring-zinc-200"
              onClick={handleSetTheme}
            >
              <SunIcon className="h-6 w-6 text-zinc-500 dark:hidden" />
              <MoonIcon className="hidden h-6 w-6 text-zinc-500 dark:block" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function DesktopNavigation(props: { className?: string }) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full px-4 text-sm font-semibold text-zinc-800 shadow-lg ring-zinc-900/10 backdrop-blur">
        <DesktopNavItem href="/">Home</DesktopNavItem>
        <DesktopNavItem href="/about">About</DesktopNavItem>
        <DesktopNavItem href="/articles">Articles</DesktopNavItem>
        <DesktopNavItem href="/projects">Projects</DesktopNavItem>
        <DesktopNavItem href="/books">Books</DesktopNavItem>
      </ul>
    </nav>
  );
}

function MobileNavigation(props: { className?: string }) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-md shadow-zinc-800/10 ring-1 ring-zinc-900/10">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
      </Popover.Button>

      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-20 bg-zinc-800/40 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute inset-x-4 z-30 origin-top transform rounded-2xl bg-white px-8 py-6 transition">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-600">
                Navigation
              </h2>
              <Popover.Button
                aria-label="Close panel"
                className="-m-1 rounded-full bg-white/90 p-1"
              >
                <XMarkIcon className="h-6 w-6 text-zinc-600" />
              </Popover.Button>
            </div>

            <nav className="mt-6">
              <ul className="flex flex-col divide-y divide-zinc-100 text-base text-zinc-800">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/books">Books</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function DesktopNavItem({ href, children }: NavItemProps) {
  let isActive = useRouter().pathname === href;
  return (
    <Link
      href={href}
      className={`relative block p-3 transition ${
        isActive ? "text-blue-600" : "text-zinc-800"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
      )}
    </Link>
  );
}

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <Popover.Button as={Link} href={href} className="py-2">
      {children}
    </Popover.Button>
  );
}
