import { z } from 'zod'

export const formSchema = z.object({
	message: z.string().min(10),
	email: z.string().email(),
	name: z.string().min(3),
	recaptcha: z.string().min(5).max(5),
})
