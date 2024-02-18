'use client'

import ModeToggle from '@/components/shared/ModeToggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './GlobalSearch'

function Navbar() {
	const pathname = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>OtabekDev</h1>
				</Link>
				{/* NavLinks */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(navLink => (
						<>
							<Link
								key={navLink.route}
								href={navLink.route}
								className={cn(
									'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors duration-300',
									pathname === navLink.route && 'text-blue-400'
								)}
							>
								{navLink.name}
							</Link>
						</>
					))}
				</div>
				{/* Search */}
				<div className='flex items-center gap-1'>
					<GlobalSearch />
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
