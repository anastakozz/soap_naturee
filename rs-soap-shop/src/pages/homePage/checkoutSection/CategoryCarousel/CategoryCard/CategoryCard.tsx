import { Link } from 'react-router-dom'
import { CategoryCardProps } from '../../../../../lib/interfaces'

export default function CategoryCard(item: CategoryCardProps) {
  return (
    <Link to={item.link} className='flex flex-col content-center'>
      <img
        className='w-[350px] transition rounded-normal mb-esm brightness-110 dark:brightness-75 saturate-[0.9] hover:filter-none dark:hover:filter-none'
        src={item.path}
        alt=''
      />
      <p className='text-h4 text-center text-basicColor dark:text-secondaryColor font-semibold'>{item.name}</p>
    </Link>
  )
}
