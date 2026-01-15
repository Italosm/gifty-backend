import { FastifyReply } from 'fastify'
import { ApplicationError } from '@/shared/application/errors/application-error'

export function handleApplicationError(
  error: unknown,
  reply: FastifyReply,
): boolean {
  if (!(error instanceof ApplicationError)) return false

  reply.status(error.statusCode).send({
    status: 'error',
    code: error.code,
    message: error.message,
  })

  return true
}
