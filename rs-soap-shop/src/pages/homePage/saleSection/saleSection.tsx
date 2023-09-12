import Banner from '../../../components/banner';

export default function SaleSection() {
  return (
    <div className='bg-sale-section xxl:min-h-[746px] bg-no-repeat bg-left bg-cover p-sm md:p-big'>
      <Banner
        {...{
          label: 'Sale -50%',
          title: 'Take a Look at Our Big Sale',
          description: 'Massage soap with loofah',
          buttonText: 'BUY NOW',
          linkAdress: '/our-products/sale'
        }}
      />
    </div>
  );
}
