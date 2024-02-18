import { ChildProps } from '@/types'
import Footer from './_components/Footer'
import Navbar from './_components/Navbar'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
