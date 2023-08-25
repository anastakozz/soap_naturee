import { Link } from 'react-router-dom'
import SaleIcon from '../../../icons/saleIcon'
import ArrowSmallIcon from '../../../icons/arrowSmallIcon'

export default function Promocode() {
  return (
    <Link to={'/our-products'}>
      <div className='flex items-center justify-center transition p-sm bg-accentColor dark:bg-accentDarkColor text-center text-greyLColor dark:text-basicColor hover:text-secondaryColor dark:hover:text-secondaryColor'>
        <div className='mr-sm'><SaleIcon></SaleIcon></div>
        <span className='text-sm sm:text-base md:text-2xl lg:text-h3 font-bold'>
          Get a 5% discount on the promo code &quot;NATURE&quot;
        </span>
        <ArrowSmallIcon />
      </div>
    </Link>
  )
}
