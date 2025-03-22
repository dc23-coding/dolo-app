import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input.trim()]);
      setInput("");
      // Here you can call your AI API to get a response.
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isOpen ? "Close Chat" : "Chat"}
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg flex flex-col">
          <div className="p-2 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold">Chatbot Assistant</h2>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet.</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-800 dark:text-gray-200">{msg}</p>
                </div>
              ))
            )}
          </div>
          <div className="p-2 border-t dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="w-full p-2 border dark:border-gray-600 rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
