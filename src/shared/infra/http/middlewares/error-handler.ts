import { handleApplicationError } from '@/shared/infra/http/middlewares/handlers/handle-application-error'
import { handleDomainError } from '@/shared/infra/http/middlewares/handlers/handle-domain-error'
import { handleZodError } from '@/shared/infra/http/middlewares/handlers/handle-zod-error'
import { FastifyReply, FastifyRequest } from 'fastify'

export function errorHandler(
  error: unknown,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (handleApplicationError(error, reply)) return
  if (handleDomainError(error, reply)) return
  if (handleZodError(error, reply)) return

  console.error(error)

  reply.status(500).send({
    status: 'error',
    message: 'Internal server error',
  })
}
