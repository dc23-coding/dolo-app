// src/components/ChatbotWrapper.tsx
"use client";
import dynamic from "next/dynamic";

// Dynamically import the Chatbot with SSR disabled
const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false });

export default function ChatbotWrapper() {
  return <Chatbot />;
}
