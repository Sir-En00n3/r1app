"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const { error: signInError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/ui",
    });

    setIsLoading(false);

    if (signInError) {
      setError(signInError.message || "Failed to sign in.");
      return;
    }

    router.push("/ui");
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="flex w-full flex-col gap-4 rounded-lg p-6"
    >
      <h1 className="text-2xl font-bold">Sign In</h1>

      {error && (
        <div className="rounded bg-red-100 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded border p-2"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="rounded border p-2"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="rounded bg-black p-2 text-white disabled:opacity-50"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}

// TODO: implement social sign-in.
