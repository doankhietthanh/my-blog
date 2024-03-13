import CardWrapper from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <CardWrapper
      headerTitle="Sign In"
      headerDescription="Welcome back! Sign in to your account"
      backButtonTitle="Don't have an account?"
      backButtonHref="/auth/register"
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default LoginPage;
