import React, { useState, ReactNode, useEffect } from 'react';
import ArrowIcon from '../../../../icons/arrowIcon';
import { CategoryCardProps } from '../../../../lib/interfaces';
import CategoryCard from './CategoryCard';

const items: CategoryCardProps[] = [
  { name: 'Candles', path: './images/candle.png', link: '/our-products/decor/candles' },
  { name: 'Soap', path: './images/soap.png', link: '/our-products/self-care/soap' },
  { name: 'Scrubs', path: './images/scrub.png', link: '/our-products/self-care/scrub' },
  { name: 'Aroma sachet', path: './images/sachet.png', link: '/our-products/decor/aroma-sachet' },
  { name: 'Bath bombs', path: './images/bombs.png', link: '/our-products/self-care/bath-bomb' }
];
const moveForward = 'animate-[slide_0.5s_linear]';
const moveBackwards = 'animate-[slideBack_0.5s_linear]';

export default function CategoryCarousel() {
  const length = 5;
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState<string>('');
  const itemsToShow = Array(length)
    .fill(index)
    .map((item, index) => {
      const newValue = item + index;
      if (newValue >= items.length) {
        return item + index - length;
      }
      return newValue;
    });

  const handlePrevious = () => {
    setAnimation(moveBackwards);
    setTimeout(() => {
      const newIndex = index - 1;
      setIndex(newIndex < 0 ? length - 1 : newIndex);
      setAnimation('')
    }, 500);
  };

  const handleNext = () => {
    setAnimation(moveForward);
    setTimeout(() => {
      const newIndex = index + 1;
      setIndex(newIndex >= length ? 0 : newIndex);
      setAnimation('')
    }, 500);
  };

  return (
    <div data-testid='carousel' className='flex justify-center md:m-esm mt-4 flex-nowrap'>
      <button data-testid='prev-button' onClick={handlePrevious} className='mr-4'>
        <ArrowIcon />
      </button>
      <div className='overflow-hidden w-[370px] lg:w-[1110px]'>
        <div className={`${animation} flex justify-around w-full`}>
          {itemsToShow.map((elem, index): ReactNode => {
            return (
              <div key={`category-card ${index}`}>
                <CategoryCard {...items[elem]} />
              </div>
            );
          })}
        </div>
      </div>

      <button data-testid='next-button' onClick={handleNext} className='transform rotate-180 ml-4'>
        <ArrowIcon />
      </button>
    </div>
  );
}
