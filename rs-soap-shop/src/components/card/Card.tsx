import { ProductCardProps } from '../../lib/interfaces'
import SaleIcon from '../../icons/saleIcon'
import { useNavigate } from 'react-router-dom'
import SmallButton from '../buttons/smallButton'
import { MouseEvent } from 'react'

export default function Card(item: ProductCardProps) {
  const navigate = useNavigate()
  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    if (!target.classList.contains('cart-button')) {
      navigate(`${item.link}`)
    } else {
      console.log('add product to cart')
    }
  }

  return (
    <div
      onClick={handleClick}
      data-testid='card'
      className='cursor-pointer relative transition w-[280px] hover:scale-[1.02] hover:drop-shadow-lg active:scale-100 active:drop-shadow-none'
    >
      <img className='object-cover h-[300px] w-full ' src={item.imgSrc} alt=''></img>
      <div className='z-20 w-full absolute -translate-y-[30px]'>
        <SmallButton {...{ children: 'Add to Cart' }}></SmallButton>
      </div>
      <div className='h-[125px] bg-additionalColor dark:bg-graySColor text-left p-4'>
        <h4 className='text-h4 font-semibold text-grayLColor dark:text-secondaryColor object-scale-down whitespace-nowrap'>
          {item.label}
        </h4>
        <p className='text-grayMColor dark:text-additionalColor truncate'>{item.description}</p>
        <div className='flex justify-between items-end'>
          {item.isOnSale ? (
            <>
              <p className='text-h5 font-semibold text-grayLColor'>{item.newPrice}</p>
              <p className='line-through text-graySColor dark:text-grayMColor'>{item.price}</p>
              <div className='absolute z-10 top-[25px] right-0 text-accentColor'>
                <SaleIcon></SaleIcon>
              </div>
            </>
          ) : (
            <>
              <p className='text-h5 font-semibold text-grayLColor'>{item.price}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
