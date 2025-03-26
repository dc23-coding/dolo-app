import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "DOLO – Drive Smarter",
  description: "Your smart assistant for life on the road",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
