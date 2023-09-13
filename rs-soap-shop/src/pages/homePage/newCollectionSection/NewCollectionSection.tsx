import Banner from '../../../components/banner';

export default function NewCollectionSection() {
  return (
    <div className='bg-new-collection xxl:min-h-[746px] bg-no-repeat bg-left bg-cover p-sm md:p-big flex flex-row-reverse relative'>
      <Banner
        {...{
          label: 'New Arrival',
          title: 'Discover Our New Collection',
          description: 'Handmade soap in the form of flowers and food',
          buttonText: 'BUY NOW',
          linkAdress: '/our-products/new'
        }}
      />
    </div>
  );
}
