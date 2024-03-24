import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})

const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://otabekdev-blog.vercel.app'),
	title: 'OtabekDev — articles about programming',
	description:
		'OtabekDev offers a variety of insightful articles covering programming topics, ranging from fundamental concepts to advanced techniques. Explore practical tutorials, insightful discussions, and expert tips to enhance your programming skills.',
	authors: [
		{ name: 'Otabek Abdiraimov', url: 'https://otabekdev-blog.vercel.app' },
	],
	icons: { icon: '/favicon.png' },
	keywords:
		'otabekdev, programming articles, programming language hacks, programming language tricks, python hacks and tricks, javaScript hacks and tricks, java hacks and tricks, c++ hacks and tricks, web development tips, software engineering insights, coding tutorials and guides, frontend development techniques, backend development strategies, algorithm optimization tricks, data structure hacks, framework comparisons, debugging secrets, version control mastery, agile development methodologies, Tech industry insights, articles about programming, otabekdev articles',
	openGraph: {
		title: 'OtabekDev — articles about programming',
		description:
			'OtabekDev offers a variety of insightful articles covering programming topics, ranging from fundamental concepts to advanced techniques. Explore practical tutorials, insightful discussions, and expert tips to enhance your programming skills',
		type: 'website',
		url: 'https://otabekdev-blog.vercel.app',
		locale: 'en_EN',
		images: '/OtabekDev.png',
		countryName: 'America',
		siteName: 'OtabekDev',
		emails: 'abdiraimov032@gmail.com',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body
					className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
						storageKey='blog-theme'
					>
						<NextTopLoader
							color='#2299DD'
							crawlSpeed={200}
							showSpinner={false}
							height={3}
							easing='ease-in-out'
							speed={100}
							shadow='0'
							zIndex={1600}
						/>
						<Analytics mode={'production'} />
						{children}
						<Toaster position='top-center' />
					</ThemeProvider>
					<GoogleAnalytics gaId='G-Y89K97J7N2' />
				</body>
			</html>
		</ClerkProvider>
	)
}

export default RootLayout
