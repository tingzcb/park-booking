import { PrismaClient } from "@prisma/client";

//This file is used to make sure only one prisma client instance is being generated.

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
