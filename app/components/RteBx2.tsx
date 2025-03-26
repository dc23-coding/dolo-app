"use client";

import { useState } from "react";

export default function RouteBox() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState<{
    distance: string;
    weather: string;
    route: string;
  } | null>(null);

  const handleCompute = () => {
    // For now, we set dummy values.
    setResults({
      distance: "500 miles",
      weather: "Clear skies",
      route: "Optimized route with minimal stops",
    });
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h3 className="text-lg font-medium mb-4">Route Calculator</h3>
      <div className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Enter origin" 
          value={origin} 
          onChange={(e) => setOrigin(e.target.value)}
          className="border rounded p-2"
        />
        <input 
          type="text" 
          placeholder="Enter destination" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)}
          className="border rounded p-2"
        />
        <button 
          onClick={handleCompute} 
          className="bg-blue-600 text-white rounded py-2"
        >
          Compute Route
        </button>
      </div>
      {results && (
        <div className="mt-4 border-t pt-4">
          <p><strong>Distance:</strong> {results.distance}</p>
          <p><strong>Weather:</strong> {results.weather}</p>
          <p><strong>Route:</strong> {results.route}</p>
        </div>
      )}
    </div>
  );
}
