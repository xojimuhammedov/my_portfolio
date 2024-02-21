import BlogCard from '@/components/cards/blog'
import { getDetaileddAuthor } from '@/service/author.service'
import Image from 'next/image'

async function Page({ params }: { params: { id: string } }) {
	const author = await getDetaileddAuthor(params.id)

	return (
		<div className='max-w-6xl mx-auto pt-52'>
			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={author.image.url}
					alt='author'
					width='300'
					height='300'
					className='rounded-md max-md:self-start'
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<p className='text-muted-foreground text-2xl'>
						<span className='font-bold text-white'>0{author.blogs.length}</span>{' '}
						Published posts
					</p>
					<h2 className='text-3xl font-creteRound'>{author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>{author.bio}</p>
				</div>
			</div>
			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
				<span>Published posts</span>
			</h2>
			<div className='flex flex-col space-y-24 mt-24'>
				{author.blogs.map(item => (
					<BlogCard key={item.description} {...item} />
				))}
			</div>
		</div>
	)
}

export default Page
