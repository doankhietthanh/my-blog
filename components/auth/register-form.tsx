"use client";

import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { RegisterSchema } from "@/schemas/auth";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ErrorAlert from "@/components/auth/error-alert";
import SucessAlert from "@/components/auth/success-alert";
import { register } from "@/services/auth";
import { StatusCode } from "@/types/services";

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RegisterForm = ({ className, ...props }: RegisterFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccessMessage("");
    setErrorMessage("");

    startTransition(() => {
      register(values)
        .then((res) => {
          if (res.statusCode === StatusCode.CREATED) {
            setSuccessMessage(res.message);
          } else {
            setErrorMessage(res.message);
          }
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="username"
                    autoCapitalize="none"
                    placeholder="Username"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    placeholder="name@example.com"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    placeholder="Password"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ErrorAlert message={errorMessage} />
          <SucessAlert message={successMessage} />
          <Button disabled={isPending}>
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create an account
          </Button>
        </form>
      </Form>
    </div>
  );
};
