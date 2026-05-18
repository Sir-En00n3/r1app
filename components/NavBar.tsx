"use client";

import { JSX } from "react";
import Image from "next/image";
import r1 from "@/public/r1.png";
import HomeBtn from "@/components/HomeBtn";
import SignOutBtn from "@/components/SignOutBtn";
import Link from "next/link";

export default function NavBar(): JSX.Element {
  return (
    <>
      <nav className="relative flex-1 z-50 flex flex-row justify-center font-mono items-center text-center w-full border-2 border-solid border-myacc max-h-20 bg-mybg">
        <div className="relative flex justify-start items-center h-full w-1/4 border-hidden">
          <div className="relative flex justify-center items-center border border-myacc">
            <Link href={"/"}>
              <Image
                src={r1}
                className="relative m-2 rounded-2xl border border-solid border-myacc"
                width="50"
                height="50"
                alt="Recource A.I. logo."
              />
            </Link>
          </div>
          <div className="relative flex justify-center items-center h-full flex-1 border-hidden">
            <HomeBtn />
          </div>
        </div>

        <div className="relative flex justify-center items-center w-1/2 h-full border-hidden">
          <SignOutBtn />
        </div>

        <div className="relative flex justify-center items-center h-full w-1/4 border-hidden">
          <ul className="relative flex flex-col items-end justify-center font-sans text-sm text-myacc text-left">
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
