import ArrowIcon from '../../../../icons/arrowIcon'
import { CategoryCardProps } from '../../../../lib/interfaces'
import CategoryCard from './CategoryCard/CategoryCard'

const items: CategoryCardProps[] = [
  { name: 'Candles', path: './images/candle.png', link: '/our-products' },
  { name: 'Soap', path: './images/soap.png', link: '/our-products' },
  { name: 'Scrubs', path: './images/scrub.png', link: '/our-products' },
  { name: 'Aroma sachet', path: './images/sachet.png', link: '/our-products' },
  { name: 'Bath bombs', path: './images/bombs.png', link: '/our-products' }
]

export default function CategoryCarousel() {
  return (
    <div className='flex justify-between m-esm'>
      <button>
        <ArrowIcon />
      </button>
      <div className='flex justify-around w-full'>
        <CategoryCard {...items[0]} />
        <CategoryCard {...items[1]} />
        <CategoryCard {...items[2]} />
      </div>
      <button className='transform rotate-180'>
        <ArrowIcon />
      </button>
    </div>
  )
}
