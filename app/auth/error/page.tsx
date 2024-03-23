import CardWrapper from "@/components/auth/card-wrapper";
import { TriangleAlertIcon } from "lucide-react";

const AuthErrorPage = () => {
  return (
    <CardWrapper
      headerTitle="Error!"
      headerDescription="Something went wrong"
      backButtonTitle="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full h-full justify-center items-center">
        <TriangleAlertIcon size={48} className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default AuthErrorPage;
