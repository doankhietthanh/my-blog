import { db } from "@/lib/db";

export const getUserById = async (id: string) => {
  return db.user.findFirst({
    where: {
      id,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return db.user.findFirst({
    where: {
      email,
    },
  });
};
