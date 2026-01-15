import { ApplicationError } from '@/shared/application/errors/application-error'

export class BadRequestError extends ApplicationError {
  constructor(message = 'Bad request') {
    super(message, 'BAD_REQUEST', 400)
  }
}
