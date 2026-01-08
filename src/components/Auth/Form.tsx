"use client";

import Link from "next/link";
import "./CSS/Form.css";
import { useState } from "react";
import { authProps } from "@/app/signIn/page";

type AuthFormTypes = {
  url: string;
  authFunction: (data: authProps) => Promise<void>;
};

const Form = ({ url, authFunction }: AuthFormTypes) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    await authFunction({ email, password });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>
          {url === "/signIn" ? "Sign In" : "Sign Up"}
        </h1>
        {url !== "/signIn" && (
          <label htmlFor="userName">
            <span>User Name:</span>
            <input
              className="auth-input"
              type="text"
              id="userName"
              name="userName"
              placeholder="ex: John Doe"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        )}
        <label htmlFor="email">
          <span>Email:</span>
          <input
            placeholder="example@gmail.com"
            className="auth-input"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Password:</span>
          <input
            className="auth-input"
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          onClick={() => authFunction({ email, password })}
          className="auth-button"
        >
          {url === "/signIn" ? "Sign In" : "Sign Up"}
        </button>
        {url === "/signIn" ? (
          <p>
            Don&apos;t have account yet?{" "}
            <Link href="/signUp" className="auth-forward">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have account?{" "}
            <Link href="/signIn" className="auth-forward">
              Sign In
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
