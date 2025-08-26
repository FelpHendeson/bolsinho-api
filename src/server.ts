import fastify from 'fastify'
import cors from '@fastify/cors'
import userRoutes from './routes/user.route'

const server = fastify()

// Configuração do CORS para permitir requisições do navegador
server.register(cors, {
  origin: true, // Permite todas as origens
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite todos os métodos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
  preflightContinue: false,
  optionsSuccessStatus: 204
})

// Registra as rotas de usuário com prefixo /users
server.register(userRoutes, { prefix: '/users' })

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})