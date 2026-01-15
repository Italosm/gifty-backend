import { ApplicationError } from '@/shared/application/errors/application-error'

export class InvalidCredentialError extends ApplicationError {
  constructor(message = 'Invalid credentials') {
    super(message, 'INVALID_CREDENTIALS', 401)
  }
}
