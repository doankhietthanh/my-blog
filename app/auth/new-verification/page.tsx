import CardWrapper from "@/components/auth/card-wrapper";
import { NewVerificationForm } from "@/components/auth/new-verification";

const NewVerificationPage = () => {
  return (
    <CardWrapper
      headerTitle="Confim Email"
      headerDescription="Confirming Your Email Address"
      backButtonTitle="Back to Login"
      backButtonHref="/auth/login"
    >
      <NewVerificationForm />
    </CardWrapper>
  );
};

export default NewVerificationPage;
