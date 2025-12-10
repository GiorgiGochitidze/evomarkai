"use client";

import { useState } from "react";
import axios from "axios";
import Input from "@/components/MainChat/Input";
import ChatContainer from "@/components/MainChat/ChatContainer";
import "../../components/CSS/AIPage.css";

interface AIResponse {
  executionId: string;
  output: string;
}

export default function Home() {
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentExecutionId, setCurrentExecutionId] = useState<string>("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);

    const userMessage: { sender: "user"; text: string } = {
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await axios.post<AIResponse>(
        "https://evomarkai-backend.onrender.com/sendMsg",
        { message: input }
      );

      setCurrentExecutionId(res.data.executionId);

      const aiMessage: { sender: "ai"; text: string } = {
        sender: "ai",
        text: res.data.output,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage: { sender: "ai"; text: string } = {
        sender: "ai",
        text: "Error: could not get response.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const stopMessage = async () => {
    if (!currentExecutionId) return;

    try {
      const res = await axios.post("https://evomarkai-backend.onrender.com/stopExecution", {
        executionId: currentExecutionId,
      });

      console.log("Stop response:", res.data);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Workflow stopped." },
      ]);
    } catch (err) {
      console.error(err);
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
        stopMessage={stopMessage}
      />
    </main>
  );
}
