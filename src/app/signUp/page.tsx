"use client";

import Form from "@/components/Auth/Form";
import { redirect, usePathname } from "next/navigation";
import { authProps } from "../signIn/page";
import axios from "axios";

const SignIn = () => {
  const url = usePathname();

  const handleSignUp = async ({ userName, email, password }: authProps) => {
    if (!userName || !email || !password) {
      return console.log("Missing important fields");
    }

    const res = await axios.post(
      "http://localhost:3001/signup",
      { userName, email, password },
      { withCredentials: true }
    );

    console.log(res.data);

    setTimeout(() => {
      redirect("/c");
    }, 1500);
  };
  return (
    <>
      <Form authFunction={handleSignUp} url={url} />
    </>
  );
};

export default SignIn;
