import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Username is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});
