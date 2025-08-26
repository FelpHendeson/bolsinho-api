import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function userRoutes(fastify: FastifyInstance) {
    // Rota para registrar usuário
    fastify.post("/register", (req: FastifyRequest, res: FastifyReply) => {
        console.log(req.body);
        return res.send({ message: "Usuário registrado com sucesso!" });
    });

    // Rota para buscar usuário por ID
    fastify.get("/:id", (req: FastifyRequest, res: FastifyReply) => {
        const { id } = req.params as { id: string };
        console.log(`Buscando usuário com ID: ${id}`);
        return res.send({ id, message: "Usuário encontrado!" });
    });

    // Rota para atualizar usuário
    fastify.put("/:id", (req: FastifyRequest, res: FastifyReply) => {
        const { id } = req.params as { id: string };
        console.log(`Atualizando usuário com ID: ${id}`, req.body);
        return res.send({ id, message: "Usuário atualizado com sucesso!" });
    });

    // Rota para deletar usuário
    fastify.delete("/:id", (req: FastifyRequest, res: FastifyReply) => {
        const { id } = req.params as { id: string };
        console.log(`Deletando usuário com ID: ${id}`);
        return res.send({ id, message: "Usuário deletado com sucesso!" });
    });

    // Rota para listar todos os usuários
    fastify.get("/", (req: FastifyRequest, res: FastifyReply) => {
        console.log("Listando todos os usuários");
        return res.send({ message: "Lista de usuários", users: [] });
    });
}