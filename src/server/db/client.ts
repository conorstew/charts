import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prismaClient = new PrismaClient({
  //log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

// Middleware example 1:
/* prismaClient.$use(async (params, next) => {
  console.log("here1prisma");
  if (params.model == "User" && params.action == "create") {
    // Logic only runs for create action on User model
  }
  return;
});

// Middleware example 2:
prismaClient.$use(async (params, next) => {
  console.log("here2prisma");
  return;
}); */

export const prisma = global.prisma || prismaClient;

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
