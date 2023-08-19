import React, { useState } from 'react'
import ArrowIcon from '../../../../icons/arrowIcon'
import { CategoryCardProps } from '../../../../lib/interfaces'
import CategoryCard from './CategoryCard'

const items: CategoryCardProps[] = [
  { name: 'Candles', path: './images/candle.png', link: '/our-products' },
  { name: 'Soap', path: './images/soap.png', link: '/our-products' },
  { name: 'Scrubs', path: './images/scrub.png', link: '/our-products' },
  { name: 'Aroma sachet', path: './images/sachet.png', link: '/our-products' },
  { name: 'Bath bombs', path: './images/bombs.png', link: '/our-products' }
]

export default function CategoryCarousel() {
  const length = items.length
  const [index, setIndex] = useState(0)
  const nextIndex = index === length - 1 ? 0 : index + 1
  const prevIndex = index === 0 ? length - 1 : index - 1

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  return (
    <div className='flex justify-around flex-wrap md:m-esm md:flex-nowrap'>
      <button onClick={handlePrevious}>
        <ArrowIcon />
      </button>
      <div className='flex justify-around w-full order-first md:order-none'>
        <div className='hidden lg:block'>
          <CategoryCard {...items[prevIndex]} />
        </div>
        <div>
          <CategoryCard {...items[index]} />
        </div>
        <div className='hidden xl:block'>
          <CategoryCard {...items[nextIndex]} />
        </div>
      </div>
      <button onClick={handleNext} className='transform rotate-180'>
        <ArrowIcon />
      </button>
    </div>
  )
}
