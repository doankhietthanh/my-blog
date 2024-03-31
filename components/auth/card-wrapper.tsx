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
import Logo from "@/components/logo";

interface CardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription?: string;
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
    <Card className="mx-auto flex w-full flex-col justify-center shadow sm:w-[400px]">
      <CardHeader className="flex w-full items-center justify-center gap-2">
        <Logo />
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex w-full flex-col items-center justify-center gap-2">
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
