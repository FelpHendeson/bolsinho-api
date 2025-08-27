import 'dotenv/config';
import Fastify from "fastify";
import cors from "@fastify/cors";
import prismaPlugin from "./plugins/prisma";

const app = Fastify();
await app.register(cors, { origin: true });
await app.register(prismaPlugin);

// health simples
app.get("/ping", async () => ({ pong: true }));

// health que testa o banco
app.get("/health-db", async function () {
  const [{ ok }] = await this.prisma.$queryRaw<{ ok: number }[]>`SELECT 1 as ok`;
  return { db: ok === 1 ? "up" : "down" };
});

const PORT = Number(process.env.PORT ?? 8080);
await app.listen({ port: PORT });
