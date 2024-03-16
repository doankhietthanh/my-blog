"use server";

import { db } from "@/lib/db";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { LoginSchema, RegisterSchema } from "@/schemas/auth";
import { getUserByEmail } from "@/services/users";

import { BaseResponse, StatusCode } from "@/types/services";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const register = async (
  values: z.infer<typeof RegisterSchema>
): Promise<BaseResponse> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      message: "Invalid fields",
    };
  }

  const { username, email, password } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      message: "User already exists",
    };
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashPassword,
    },
  });

  return {
    statusCode: StatusCode.CREATED,
    message: "User created",
  };
};

export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<BaseResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      message: "Invalid fields",
    };
  }

  const { email, password } = validatedFields.data;

  const user = await getUserByEmail(email);
  if (!user) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      message: "User not found",
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
            statusCode: StatusCode.UNAUTHORIZED,
            message: "Invalid credentials",
          };
        default:
          return {
            statusCode: StatusCode.INTERNAL_SERVER_ERROR,
            message: "Something went wrong",
          };
      }
    }

    throw error;
  }

  return {
    statusCode: StatusCode.SUCCESS,
    message: "Login successful",
  };
};
