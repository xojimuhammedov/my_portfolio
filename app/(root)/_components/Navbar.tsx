'use client'

import ModeToggle from '@/components/shared/ModeToggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './GlobalSearch'
import MobileMenu from './MobileNav'

function Navbar() {
	const { user, isLoaded } = useUser()
	const pathname = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-3xl md:max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>OtabekDev</h1>
				</Link>
				{/* Nav links */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/* Search */}
				<div className='flex font-creteRound items-center gap-3'>
					<GlobalSearch />
					<ModeToggle />
					{isLoaded && user && (
						<>
							<UserButton afterSignOutUrl='/' />
						</>
					)}
					<MobileMenu />
				</div>
			</div>
		</div>
	)
}

export default Navbar
