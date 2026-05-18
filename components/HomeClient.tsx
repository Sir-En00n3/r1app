"use client";

import { useState } from "react";
import Modal from "./Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

type ActiveModal = "signin" | "signup" | null;

export default function HomeClient() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const close = () => setActiveModal(null);

  return (
    <>
      <div className="relative flex flex-col w-full">
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome to ResourceAI!! This is the Welcome Page.
        </p>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <button
            onClick={() => setActiveModal("signup")}
            className="border-blue-400 border border-solid text-blue-400 hover:text-blue-600 px-1 hover:cursor-pointer"
          >
            Sign Up
          </button>
          {" "}to create an account.
        </p>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          or
        </p>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <button
            onClick={() => setActiveModal("signin")}
            className="border-blue-400 border border-solid text-blue-400 hover:text-blue-600 px-1 hover:cursor-pointer"
          >
            Sign In
          </button>
          {" "}to access your account.
        </p>
      </div>

      <Modal isOpen={activeModal === "signin"} onClose={close}>
        <SignIn />
      </Modal>

      <Modal isOpen={activeModal === "signup"} onClose={close}>
        <SignUp onSuccess={() => setActiveModal("signin")} />
      </Modal>
    </>
  );
}
