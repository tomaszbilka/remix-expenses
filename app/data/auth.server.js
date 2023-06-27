import { hash } from "bcryptjs";

import { prisma } from "./database.server";

export const signup = async ({ email, password }) => {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error("A user with the provided email exist alraedy");
    error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({ data: { email: email, password: passwordHash } });
};
