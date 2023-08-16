import { Link } from 'react-router-dom'
import SaleIcon from '../../../icons/saleIcon'
import ArrowSmallIcon from '../../../icons/arrowSmallIcon'

export default function Promocode() {
  return (
    <div className=' bg-accentColor dark:bg-accentDarkColor '>
      <Link to={'/our-products'} className='max-w-[1440px] mx-auto flex items-center justify-center transition p-sm text-center text-greyLColor dark:text-basicColor hover:text-secondaryColor dark:hover:text-secondaryColor '>
        <SaleIcon></SaleIcon>
        <span className='text-sm sm:text-base md:text-2xl lg:text-h3 font-bold'>
          Get a 5% discount on the promo code &quot;NATURE&quot;
        </span>
        <ArrowSmallIcon />
      </Link>
    </div>
  )
}
