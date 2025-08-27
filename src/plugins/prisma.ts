import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

export default fp(async (app) => {
  const prisma = new PrismaClient();
  // encerra graciosamente no close
  app.addHook("onClose", async () => prisma.$disconnect());

  app.decorate("prisma", prisma);
});

// Tipagem para this.prisma em handlers (opcional, mas útil)
declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}
