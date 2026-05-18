import NavBar from "@/components/NavBar";
import React from "react";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center border-2 border-solid border-red-500">
      <div className="relative flex flex-col w-full shrink-0 max-h-20 border-2 border-solid border-green-500">
        <NavBar />
      </div>
      <div className="relative flex flex-1 flex-col w-full h-full">
        <section className="relative flex justify-center items-center flex-col w-full h-full border-2 border-solid border-orange-500">
          {children}
        </section>
      </div>
    </div>
  );
}
