import { FastifyInstance } from 'fastify'

const registerRoutes = (app: FastifyInstance): void => {
  app.get('/', async (request, reply) => {
    reply.send({ message: 'Hello World!' })
  })
}

export default registerRoutes
