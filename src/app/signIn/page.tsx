"use client";

import Form from "@/components/Auth/Form";
import axios from "axios";
import { usePathname } from "next/navigation";

export interface authProps {
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
      "http://localhost:3001/signIn",
      { email, password },
      { withCredentials: true }
    );

    console.log(res.data);
  };
  return (
    <>
      <Form url={url} authFunction={handleSignIn} />
    </>
  );
};

export default SignIn;
