import { z, ZodError } from 'zod'
import { FastifyReply } from 'fastify'

export function handleZodError(error: unknown, reply: FastifyReply): boolean {
  if (!(error instanceof ZodError)) return false

  reply.status(400).send({
    status: 'error',
    code: 'VALIDATION_ERROR',
    errors: z.treeifyError(error),
  })

  return true
}
