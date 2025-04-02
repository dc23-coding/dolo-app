"use client";

import Image from "next/image";
import { auth } from "@clerk/nextjs/server";


export default function DashboardPage() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground p-4 space-y-6">
      {/* Greeting */}
      <div className="text-left">
        <h1 className="text-xl font-semibold">Good morning, Driver</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{today}</p>
      </div>

      {/* Route Summary Card */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 space-y-2">
        <h2 className="text-lg font-medium">Today’s Route</h2>
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <span>📍 Atlanta, GA → Dallas, TX</span>
          <span>ETA: 7h 25m</span>
        </div>
        <Image
          src="/route-map-placeholder.png"
          alt="Route map"
          width={500}
          height={200}
          className="rounded-lg w-full h-auto object-cover"
        />
      </section>

      {/* Load Status */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 space-y-1">
        <h2 className="text-lg font-medium">Current Load</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          📦 Status: In Transit
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Load ID: #DL-20432
        </p>
      </section>

      {/* Hours Left */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <h2 className="text-lg font-medium">Driving Hours Left</h2>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">5h 45m</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Based on your current route and break history
        </p>
      </section>

      {/* Alerts */}
      <section className="bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 rounded-xl shadow p-4 text-sm">
        ⚠️ Weather alert near Shreveport, LA. Rain expected. Fuel stop at Pilot #213 in 120 miles.
      </section>
    </div>
  );
}
