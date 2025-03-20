
import Image from "next/image";
import ChatbotWrapper from "../components/ChatbotWrapper";
import RouteBox from "../components/RouteBox";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow">
        <div className="flex items-center gap-3">
          <Image src="/dolo.png" alt="Company Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">Harvest Union</h1>
        </div>
        <nav>
          <a href="#about" className="px-4 text-sm hover:text-blue-600">About</a>
          <a href="#services" className="px-4 text-sm hover:text-blue-600">Services</a>
          <a href="#contact" className="px-4 text-sm hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Dolo: Truck Driving Assistant
            </h2>
            <p>
              Optimize your routes, check real-time weather, and access compliance
              information with ease.
            </p>
            <p>
              Our app is designed to improve your efficiency and safety on the road.
            </p>
          </section>

          {/* Right Column: Route Calculator & Chatbot */}
          <section className="flex flex-col gap-8">
            <RouteBox />
            <div className="bg-white shadow-md rounded p-6">
              <h3 className="text-lg font-medium mb-4">Chat with Us</h3>
              <ChatbotWrapper />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-white shadow-t">
        <div className="container mx-auto text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Harvest Union. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
