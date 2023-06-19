import { PrismaClient } from "@prisma/client";

/**
 * @type PrismaClient
 */
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  //dont create multiple MongoDB connection in dev mode in every page refresh
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  prisma = global.__db;
}

export { prisma };
