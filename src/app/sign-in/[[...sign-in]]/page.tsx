import { SignIn } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <SignIn signUpUrl="/sign-up" />{" "}
    </div>
  );
};

export default SignUpPage;
