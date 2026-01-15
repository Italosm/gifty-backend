import { DomainError } from '@/shared/domain/errors/domain-error'

export class UserEmailAlreadyExistsError extends DomainError {
  constructor(email: string) {
    super(
      `User with email ${email} already exists.`,
      'USER_EMAIL_ALREADY_EXISTS',
    )
  }
}
