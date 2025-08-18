import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url().default('http://localhost:3333'),
})

const parseEnv = envSchema.safeParse(process.env)

if (!parseEnv.success) {
  console.error(
    'Ivalid enviroment variables',
    parseEnv.error.flatten().fieldErrors
  )

  throw new Error('Invalid enviroment variables.')
}

export const env = parseEnv.data
