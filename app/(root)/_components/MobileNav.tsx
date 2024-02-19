'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MobileMenu() {
	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>OtabekDev</h1>
				</Link>
				<Separator className='my-3' />
				<div className='flex flex-col space-y-3'>
					{navLinks.map(navLink => (
						<>
							<Link
								key={navLink.route}
								href={navLink.route}
								className={cn(
									'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2 text-2xl duration-300',
									pathname === navLink.route && 'text-blue-400'
								)}
							>
								<navLink.icon className='w-5 h-5' />
								{navLink.name}
							</Link>
						</>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileMenu
