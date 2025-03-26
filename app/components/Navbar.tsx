"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Map", href: "/map" },
  { name: "Loadboard", href: "/loadboard" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-white">🛻 DOLO</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-300">
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-white ${
                  pathname === href ? "text-white underline" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
