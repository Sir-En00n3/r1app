import Image from "next/image";
import { JSX } from "react";
import HomeClient from "@/components/HomeClient";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="relative w-full flex flex-row justify-center gap-4 items-center text-center">
            <Image
              className="relative rounded-full p-2 border-blue-200 border-4 border-solid"
              src="/favicon.ico"
              alt="R1 Icon"
              width="64"
              height="64"
            />

            <h1 className="max-w-xs text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              ResourceAI
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <Image
              className="relative bottom-0 dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={40}
              height={15}
              priority
            />
          </div>
        </div>

        <HomeClient />

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors
              hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors
              hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
