"use client";

import { useState } from "react";
import axios from "axios";
import Input from "@/components/MainChat/Input";
import ChatContainer from "@/components/MainChat/ChatContainer";
import "../../components/CSS/AIPage.css";

interface AIResponse {
  output: string;
}

export default function Home() {
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);

    const userMessage: { sender: "user"; text: string } = {
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post<AIResponse[]>(
        "https://evomarkai-backend.onrender.com/sendMsg",
        {
          message: input,
        }
      );

      const aiMessages: { sender: "ai"; text: string }[] = res.data.map(
        (r: AIResponse) => ({ sender: "ai", text: r.output } as const)
      );

      setMessages((prev) => [...prev, ...aiMessages]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error: could not get response." } as const,
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <main>
      <ChatContainer messages={messages} loading={loading} />
      <Input
        input={input}
        setInput={setInput}
        handleKeyPress={handleKeyPress}
        sendMessage={sendMessage}
        loading={loading}
      />
    </main>
  );
}
