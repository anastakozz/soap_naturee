import { Banner } from '../../../components/banner'

export default function SaleSection() {
  return (
    <div className='bg-sale-section h-[746px] bg-no-repeat bg-left bg-cover p-big'>
      <Banner {...['Sale -50%', 'Take a Look at Our Big Sale', 'Massage soap with loofah', 'BUY NOW']} />
    </div>
  )
}
