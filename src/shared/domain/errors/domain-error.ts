export abstract class DomainError extends Error {
  readonly code: string

  protected constructor(message: string, code: string) {
    super(message)
    this.code = code
  }
}
