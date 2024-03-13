import CardWrapper from "@/components/auth/card-wrapper";
import { RegisterForm } from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <CardWrapper
      headerTitle="Sign Up"
      headerDescription="Create an account to get started"
      backButtonTitle="Already have an account?"
      backButtonHref="/auth/login"
    >
      <RegisterForm />
    </CardWrapper>
  );
};

export default RegisterPage;
