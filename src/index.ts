import fastify, { FastifyReply, FastifyRequest } from "fastify";
import prisma from "./database";
import { nanoid } from "nanoid";

const app = fastify({ logger: true });

app.post("/shorten", async (req: FastifyRequest, reply: FastifyReply) => {
  const { url } = req.body as { url: string };
  const shortCode = nanoid(6);

  try {
    await prisma.url.create({
      data: {
        original: url,
        short: shortCode,
      },
    });
    return reply.status(200).send({
      message: "http://localhost:3000/" + shortCode,
    });
  } catch (error) {
    return reply.status(500).send({ message: "Erro ao encurtar url" });
  }
});

app.get("/:code", async (req: FastifyRequest, reply: FastifyReply) => {
  const { code } = req.params as { code: string };

  try {
    const user = await prisma.url.findFirst({
      where: {
        short: code,
      },
    });

    if (!user || !user.original) {
      return reply.status(404).send({ message: "URL não encontrada" });
    }

    return reply.redirect(user.original);
  } catch (error) {
    return reply.status(500).send({ message: "Erro ao encontrar a URL" });
  }
});

app.listen({ port: 3000 }, () => {
  console.log("Server is running");
});
