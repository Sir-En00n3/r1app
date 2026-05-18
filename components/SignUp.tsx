"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

interface SignUpProps {
  onSuccess?: () => void;
}

export default function SignUp({ onSuccess }: SignUpProps = {}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setError(null);

    const { data, error: signUpError } = await authClient.signUp.email({
      email: email,
      password,
      name,
      callbackURL: "/dev/sign-in",
    });

    setIsLoading(false);

    if (signUpError) {
      setError(signUpError.message ?? "Sign up failed");
      return;
    }

    if (onSuccess) {
      onSuccess();
    } else {
      router.push("/dev/sign-in");
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col gap-4 justify-center items-center text-center p-6 text-black dark:text-white"
    >
      <h1>Sign Up</h1>
      <fieldset
        className="flex flex-col gap-2 w-[90%] p-2"
        form="signup-form"
        id="auth-fieldset"
        name="auth-fieldset"
        aria-label="Authentication"
      >
        <legend>Authentication</legend>

        <label
          htmlFor="email"
          className="relative flex flex-col gap-2 text-left"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <label
          htmlFor="password"
          className="relative flex flex-col gap-2 text-left"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <label
          htmlFor="confirmPassword"
          className="relative flex flex-col gap-2 text-left"
        >
          Confirm Password
        </label>

        <input
          className="relative flex w-full bg-white"
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2 w-[90%] p-2">
        <label
          htmlFor="name"
          className="relative flex flex-col gap-2 text-left"
        >
          Full Name
        </label>

        <input
          className="bg-white"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </fieldset>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="rounded bg-black dark:bg-white dark:text-black p-2 px-4 text-white disabled:opacity-50"
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
