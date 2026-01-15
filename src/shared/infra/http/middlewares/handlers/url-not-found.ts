import { FastifyReply, FastifyRequest } from 'fastify'

export function urlNotFoundHandler(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  reply.status(404).send({
    status: 'error',
    code: 'NOT_FOUND',
    message: `Cannot find ${request.method} ${request.url}`,
  })
}
