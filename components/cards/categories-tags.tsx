import { ICategoryAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

function CategoriesTags(item: Props) {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className='bg-secondary p-4 md:p-[1.25rem] rounded-md shadow-xl flex justify-center flex-col items-center text-center hover:bg-secondary/80 transition-all duration-300'
		>
			{item.type === 'tags' ? <Tags /> : <Layers2 />}
			<h1 className='text-2xl font-creteRound mb-2'>{item.name}</h1>
			<p className='text-xl font-workSans'>{item.blogs.length} blogs</p>
		</Link>
	)
}

export default CategoriesTags
