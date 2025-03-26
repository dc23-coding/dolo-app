type Job = {
  id: string;
  origin: string;
  destination: string;
  pay: string;
  distance: string;
};

const mockJobs: Job[] = [
  {
    id: "load-1",
    origin: "Atlanta, GA",
    destination: "Dallas, TX",
    pay: "$2,400",
    distance: "780 mi",
  },
  {
    id: "load-2",
    origin: "Charlotte, NC",
    destination: "Chicago, IL",
    pay: "$2,000",
    distance: "730 mi",
  },
  {
    id: "load-3",
    origin: "Houston, TX",
    destination: "Miami, FL",
    pay: "$2,750",
    distance: "965 mi",
  },
];

export default function LoadboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Loadboard</h1>
      <div className="space-y-4">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-700 bg-gray-900 p-4 rounded-lg shadow-sm hover:bg-gray-800 transition"
          >
            <div className="flex justify-between text-lg font-semibold">
              <span>{job.origin} → {job.destination}</span>
              <span className="text-green-400">{job.pay}</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">Distance: {job.distance}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
