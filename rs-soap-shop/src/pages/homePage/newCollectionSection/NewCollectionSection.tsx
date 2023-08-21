import Banner from '../../../components/banner'
import { Link } from 'react-router-dom'

export default function NewCollectionSection() {
  return (
    <div className='bg-new-collection xxl:min-h-[746px] bg-no-repeat bg-left bg-cover p-sm md:p-big flex flex-row-reverse'>
      <div className='flex absolute top-[95px] left-1/2 -translate-x-1/2'>
        <Link to={'/sign-in'} className='mx-4 text-grayMColor hover:text-accentColor'>sign-in</Link>
        <Link to={'/sign-up'} className='mx-4 text-grayMColor hover:text-accentColor'>sign-up</Link>
      </div>
      <Banner
        {...{
          p: 'New Arrival',
          h2: 'Discover Our New Collection',
          h4: 'Handmade soap in the form of flowers and food',
          buttonText: 'BUY NOW',
          linkAdress: '/our-products'
        }}
      />
    </div>
  )
}
