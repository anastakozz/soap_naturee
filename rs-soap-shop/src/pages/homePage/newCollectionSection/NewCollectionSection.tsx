import { NavLink } from 'react-router-dom';
import Banner from '../../../components/banner';

export default function NewCollectionSection() {
  return (
    <div className='bg-new-collection xxl:min-h-[746px] bg-no-repeat bg-left bg-cover p-sm md:p-big flex flex-row-reverse relative'>
      <NavLink
        className={'absolute top-[5px] left-1/2 -translate-x-1/2  text-graySColor hover:text-grayLColor'}
        to={'/profile'}
      >
        My Profile
      </NavLink>
      <Banner
        {...{
          label: 'New Arrival',
          title: 'Discover Our New Collection',
          description: 'Handmade soap in the form of flowers and food',
          buttonText: 'BUY NOW',
          linkAdress: '/our-products'
        }}
      />
    </div>
  );
}
