
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOLO – Drive Smarter",
  description: "Your smart assistant for life on the road",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
