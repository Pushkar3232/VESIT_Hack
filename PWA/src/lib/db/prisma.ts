/* eslint-disable @typescript-eslint/no-explicit-any */

// Prisma client stub — run `npx prisma generate` after setting DATABASE_URL
// to switch to the real generated client.
let PrismaClientClass: any;
try {
  // Dynamic require so the build doesn't fail when the client isn't generated
  PrismaClientClass = require("@prisma/client").PrismaClient;
} catch {
  // Provide a no-op stub so the app compiles without a generated client
  PrismaClientClass = class StubPrismaClient {
    [key: string]: any;
    constructor() {
      return new Proxy(this, {
        get: (_target, prop) => {
          if (typeof prop === "string") {
            return new Proxy(
              {},
              {
                get: () => async () => null,
              }
            );
          }
        },
      });
    }
  };
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClientClass();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
