"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 🚧 Replace with real auth logic (Clerk, Firebase, Supabase, etc.)
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        {/* App Logo */}
        <div className="flex justify-center mb-5">
          <Image
            src="/dolo.png"
            alt="DOLO Logo"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>

        <h1 className="text-xl text-center font-semibold text-gray-900 dark:text-white mb-4">
          Welcome to DOLO
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition duration-150"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 text-center text-gray-500 dark:text-gray-400 text-xs relative">
          <span className="bg-white dark:bg-gray-900 px-2">or</span>
          <hr className="absolute top-2 left-0 w-full border-t border-gray-300 dark:border-gray-700 z-0" />
        </div>

        {/* Google Auth Placeholder */}
        <button
          onClick={() => alert("Google Sign-In coming soon")}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Image src="/google-icon.svg" alt="Google" width={18} height={18} />
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
