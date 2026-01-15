import { app } from './app'

const port = process.env.PORT ? Number(process.env.PORT) : 3000

const server = app.listen({ port, host: '0.0.0.0' }).then(() => {
  console.log(`HTTP server running on http://localhost:${port}`)
})
