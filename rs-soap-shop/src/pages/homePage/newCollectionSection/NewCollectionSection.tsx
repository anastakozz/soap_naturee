import Banner from '../../../components/banner'

export default function NewCollectionSection() {
  return (
    <div className='bg-new-collection xxl:min-h-[746px] bg-no-repeat bg-left bg-cover p-sm md:p-big flex flex-row-reverse'>
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
