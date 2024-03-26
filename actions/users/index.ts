import { db } from "@/lib/db";

export const getUserById = async (id: string) => {
  try {
    return db.user.findFirst({
      where: {
        id,
      },
    });
  } catch {
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    return db.user.findFirst({
      where: {
        email,
      },
    });
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch {
    return null;
  }
};
