import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
  backButtonTitle: string;
  backButtonHref: string;
}

const CardWrapper = ({
  children,
  headerTitle,
  headerDescription,
  backButtonTitle,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="mx-auto flex w-full flex-col justify-center sm:w-[400px] shadow">
      <CardHeader className="w-full flex justify-center items-center gap-2">
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full flex flex-col justify-center items-center gap-2">
        <BackButton title={backButtonTitle} href={backButtonHref} />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
