export abstract class ApplicationError extends Error {
  readonly code: string
  readonly statusCode: number

  protected constructor(message: string, code: string, statusCode: number) {
    super(message)
    this.code = code
    this.statusCode = statusCode
  }
}
