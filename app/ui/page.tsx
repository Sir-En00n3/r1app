"use client";

import { JSX } from "react";

export default function UiPage(): JSX.Element {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full bg-mybg border-4 border-solid border-yellow-300 text-base">
      <h1 className="relative flex justify-center items-center font-bold text-5xl text-black">The User Interface</h1>

      <p>
        This interface serves as the primary connection between the user and the
        ResourceAI System.
      </p>

      <p>
        Users interact with ResourceAI through this interface to access User
        Profiles, manage User Accounts, configure system settings, and
        communicate directly with ResourceAI services and features.
      </p>

      <p>
        The interface remains locked until the User Profile setup process is
        completed. To begin, select User Profile from the navigation menu.
        During the initial setup process, ResourceAI will guide you through a
        short series of questions designed to collect the minimum information
        required for the system to operate programmatically, legally, securely,
        and efficiently.
      </p>

      <p>
        At the conclusion of the setup process, you will be provided with access
        to the full ResourceAI interface and its available system features.
      </p>
    </div>
  );
}
