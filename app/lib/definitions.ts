import * as z from 'zod'

export const SignInFormSchema = z.object({
  email: z.email({ error: 'Please enter your email.' }),
  password: z.string({ error: 'Please enter your password.' })
})

export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
    userId: string,
    expiresAt: Date
}