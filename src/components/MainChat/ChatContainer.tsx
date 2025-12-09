"use client";

import { useEffect, useRef } from "react";
import "./CSS/chatContainer.css";
import ReactMarkdown from "react-markdown";

interface ChatContainerProps {
  messages: { sender: "user" | "ai"; text: string }[];
  loading: boolean;
}

const ChatContainer = ({ messages, loading }: ChatContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom whenever messages or loading change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {loading && <div className="message ai">Typing...</div>}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatContainer;
