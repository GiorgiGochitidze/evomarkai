"use client";

import Form from "@/components/Auth/Form";
import axios from "axios";
import { redirect, usePathname } from "next/navigation";

export interface authProps {
  userName?: string;
  email: string;
  password: string;
}

const SignIn = () => {
  const url = usePathname();

  const handleSignIn = async ({ email, password }: authProps) => {
    if (!email || !password) {
      return console.log("Missing important fields");
    }

    const res = await axios.post(
      "https://evomarkai-backend.onrender.com/signin",
      { email, password },
      { withCredentials: true }
    );

    console.log(res.data);

    setTimeout(() => {
      redirect("/c");
    }, 1500);
  };
  return (
    <>
      <Form url={url} authFunction={handleSignIn} />
    </>
  );
};

export default SignIn;
