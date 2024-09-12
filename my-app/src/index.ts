import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

const dadjokes: any[] = []

app.use('*', cors())

app.get('/', (c) => {
  return c.json('Hello Hono!')
})

app.post('/', async (c) => {
  const body = await c.req.json()
  dadjokes.push(body)
  return c.json(dadjokes)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
