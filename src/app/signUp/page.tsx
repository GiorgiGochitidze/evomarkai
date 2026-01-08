"use client";

import Form from "@/components/Auth/Form";
import { usePathname } from "next/navigation";

const SignIn = () => {
  const url = usePathname();
  return (
    <>
      <Form url={url} />
    </>
  );
};

export default SignIn;
