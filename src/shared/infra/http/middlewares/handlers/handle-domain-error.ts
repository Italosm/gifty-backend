import { FastifyReply } from 'fastify'
import { DomainError } from '@/shared/domain/errors/domain-error'
import { domainErrorHttpMap } from '../../mappers/domain-error-http-map'

export function handleDomainError(
  error: unknown,
  reply: FastifyReply,
): boolean {
  if (!(error instanceof DomainError)) return false

  const statusCode = domainErrorHttpMap[error.code] ?? 400

  reply.status(statusCode).send({
    status: 'error',
    code: error.code,
    message: error.message,
  })

  return true
}
