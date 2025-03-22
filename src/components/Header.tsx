import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage for the user's dark mode preference
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/dolo.png" alt="Dolo Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">Harvest Union</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/">
            <a className="px-4 text-sm hover:underline">Dashboard</a>
          </Link>
          <Link href="/chat">
            <a className="px-4 text-sm hover:underline">Chatbot</a>
          </Link>
          <Link href="/settings">
            <a className="px-4 text-sm hover:underline">Settings</a>
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
