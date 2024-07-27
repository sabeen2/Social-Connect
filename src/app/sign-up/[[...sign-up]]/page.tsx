import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      {" "}
      <SignUp signInUrl="/sign-in" />{" "}
    </div>
  );
};

export default SignUpPage;
