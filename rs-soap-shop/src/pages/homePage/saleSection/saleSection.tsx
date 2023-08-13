import { Banner } from '../../../components/banner'

export default function SaleSection() {
  return (
    <div className='bg-sale-section h-[746px] bg-no-repeat bg-left bg-cover p-big'>
      <Banner {...{
          p: 'Sale -50%',
          h2: 'Take a Look at Our Big Sale',
          h4: 'Massage soap with loofah',
          buttonText: 'BUY NOW',
          linkAdress: '/our-products'
        }} />
    </div>
  )
}
