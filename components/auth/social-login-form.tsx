"use client";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { SocialOAuthProvider } from "@/types/providers";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

interface SocicalLoginFormProps {
  isPending: boolean;
}

const SocialLoginForm = ({ isPending }: SocicalLoginFormProps) => {
  const hanldeSocialLogin = (provider: SocialOAuthProvider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-2">
        <Button
          variant="outline"
          type="button"
          disabled={isPending}
          className="w-full"
          onClick={() => hanldeSocialLogin(SocialOAuthProvider.GITHUB)}
        >
          {isPending ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isPending}
          className="w-full"
          onClick={() => hanldeSocialLogin(SocialOAuthProvider.GOOGLE)}
        >
          {isPending ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
      </div>
    </>
  );
};

export default SocialLoginForm;
