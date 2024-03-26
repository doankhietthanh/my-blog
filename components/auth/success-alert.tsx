import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";

interface SucessAlertProps {
  message: string | undefined;
}

const SucessAlert = ({ message }: SucessAlertProps) => {
  if (!message) return;

  return (
    <Alert variant="success">
      <CircleCheckBigIcon className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default SucessAlert;
