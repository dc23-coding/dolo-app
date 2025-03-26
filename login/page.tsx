"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real auth logic
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/dolo.png" alt="Dolo Logo" width={64} height={64} />
        </div>

        <h1 className="text-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Welcome to DOLO
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-sm transition"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          or
        </div>

        {/* Google Auth Placeholder */}
        <button
          onClick={() => alert("Google login coming soon")}
          className="w-full mt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Image src="/google-icon.svg" alt="Google" width={18} height={18} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
