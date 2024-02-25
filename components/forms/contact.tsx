'use client'

import { formSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Textarea } from '../ui/textarea'

function ContactForm() {
	const input = useRef()
	const [isLoading, setIsLoading] = useState(false)
	const [randomNumbers, setRandomNumbers] = useState('')

	useEffect(() => {
		const randomNums = Array.from({ length: 5 }, () =>
			Math.floor(Math.random() * 10)
		).join('')
		setRandomNumbers(randomNums)
	}, [])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			message: '',
			name: '',
			recaptcha: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true)
		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAMBOT_API
		const telegramChatId = process.env.NEXT_PUBLIC_CHAT_ID

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: `Name: ${values.name}
Email: ${values.email},
Message: ${values.message}
			`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent your message!',
			error: 'Something went wrong!',
		})
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										disabled={isLoading}
										className='resize-none h-32'
										placeholder='Write your question...'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder='Your email here'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder='Your name here'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex flex-col gap-3'>
						<FormField
							control={form.control}
							name='recaptcha'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input type='text' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Input type='text' disabled value={randomNumbers} />
					</div>
					<Button className='w-fit' size={'lg'}>
						<span>Send</span>
						<Send className='w-4 h-4' />
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
