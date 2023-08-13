import ArrowIcon from '../../../../icons/arrowIcon'

interface CategoryCardProps {
  name: string
  path: string
}

const items: CategoryCardProps[] = [
  { name: 'Candles', path: './images/candle.png' },
  { name: 'Soap', path: './images/soap.png' },
  { name: 'Scrubs', path: './images/scrub.png' },
  { name: 'Aroma sachet', path: './images/sachet.png' },
  { name: 'Bath bombs', path: './images/bombs.png' }
]

function CategoryCard(item: CategoryCardProps) {
  return (
    <div className='flex flex-col content-center'>
      <img
        className='transition rounded-normal mb-esm brightness-110 dark:brightness-75 saturate-[0.9] hover:filter-none dark:hover:filter-none'
        src={item.path}
        alt=''
      />
      <p className='text-h4 text-center text-basicColor dark:text-secondaryColor font-semibold'>{item.name}</p>
    </div>
  )
}

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
