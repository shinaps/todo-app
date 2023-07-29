import { z } from 'zod'

const authFormCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type AuthFormCredentials = z.infer<typeof authFormCredentialsSchema>

export type { AuthFormCredentials }
export { authFormCredentialsSchema }
