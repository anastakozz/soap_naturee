import { Link } from 'react-router-dom'
import EmptyButton from '../../../components/buttons/emptyButton'
import Card from '../../../components/card'
import { ProductCardProps } from '../../../lib/interfaces'

const defaultCardProps: ProductCardProps = {
  label: 'Label',
  description: 'Description',
  imgSrc: '/images/candle-footage.jpg',
  link: './our-products',
  price: '999',
  isOnSale: true,
  newPrice: 1000
}

export default function RandomCardsSection() {
  return (
    <div className='bg-primaryColor dark:bg-grayMColor h-auto p-sm text-center px-big flex flex-col items-center'>
      <h3 className='text-basicColor dark:text-secondaryColor text-h3 text-center font-bold'>You may like it</h3>
      <div className='flex flex-wrap justify-around mt-sm max-w-[1440px] pb-sm'>
        <div>
          <Card {...defaultCardProps} />
        </div>
        <div>
          <Card {...defaultCardProps} />
        </div>
        <div>
          <Card {...defaultCardProps} />
        </div>
        <div>
          <Card {...defaultCardProps} />
        </div>
        <div>
          <Card {...defaultCardProps} />
        </div>
        <div>
          <Card {...defaultCardProps} />
        </div>
        <div className='hidden xxl:block'>
          <Card {...defaultCardProps} />
        </div>
        <div className='hidden xxl:block'>
          <Card {...defaultCardProps} />
        </div>
      </div>
      <Link to={'./our-products'}>
        <EmptyButton>Show More</EmptyButton>
      </Link>
    </div>
  )
}
