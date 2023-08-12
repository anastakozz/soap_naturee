import { Banner } from '../../../components/banner'

export default function NewCollectionSection() {
  return (
    <div className='bg-new-collection h-[746px] bg-no-repeat bg-left bg-cover p-big flex flex-row-reverse'>
      <Banner
        {...['New Arrival', 'Discover Our New Collection', 'Handmade soap in the form of flowers and food', 'BUY NOW']}
      />
    </div>
  )
}
