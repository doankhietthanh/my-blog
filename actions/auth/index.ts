"use server";

import { db } from "@/lib/db";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { LoginSchema, RegisterSchema } from "@/schemas/auth";
import { getUserByEmail } from "@/actions/users";

import { BaseResponse, StatusCode } from "@/types/services";
import { signIn, signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
      error: "User already exists",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return {
    success: "Confirmation email sent!",
  };
};

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: "User not found",
    };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return {
      success: "Confirmation email sent!",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials",
          };
        default:
          return {
            error: "Something went wrong",
          };
      }
    }

    throw error;
  }

  return {
    success: "Login successful",
  };
};

export const logout = async () => {
  await signOut();
};
