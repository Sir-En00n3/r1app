"use client";

import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

export default function SignOutBtn() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button className="mybtn text-nowrap" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
