import { ApplicationError } from '@/shared/application/errors/application-error'

export class NotFoundError extends ApplicationError {
  constructor(message = 'Resource not found') {
    super(message, 'NOT_FOUND', 404)
  }
}
