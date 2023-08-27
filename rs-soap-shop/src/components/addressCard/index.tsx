import { AddressCardI } from '../../lib/interfaces';
import { dataAdapterToFullName } from '../../pages/profilePage';

type AddressCardProps = {
  address: AddressCardI;
  account: {
    defaultBillingAddressId: string[];
    defaultShippingAddressId: string[];
    billingAddressIds: string[];
    shippingAddressIds: string[];
  };
};

function AddressCard({ address, account }: AddressCardProps): JSX.Element {
  return (
    <div className='p-4 m4 border-2 border-dotted border-accentColor dark:border-basicColor flex flex-col rounded-normal w-full relative md:w-[45%] mb-4'>
      {account?.defaultBillingAddressId?.includes(address.id) && (
        <div className='flex justify-center items-center p-2 bg-accentColor dark:bg-basicColor rounded-full absolute z-10 top-[10px] right-[5px] opacity-70'>
          <p className='text-basic text-primaryColor text-[8px]'>Default</p>
        </div>
      )}
      {account?.defaultShippingAddressId?.includes(address.id) && (
        <div className='flex justify-center itens-center p-2 bg-accentColor dark:bg-basicColor rounded-full absolute z-10 top-[10px] right-[5px] opacity-70'>
          <p className='text-basic text-primaryColor text-[8px]'>Default</p>
        </div>
      )}
      <div className='flex items-center justify-center mb-2 pb-2 border-b-2 border-accentColor dark:border-basicColor'>
        {account?.billingAddressIds?.includes(address.id) && (
          <h4 className='text-h4 font-bold text-accentColor dark:text-basicColor mr-4'>Billing address</h4>
        )}

        {account?.shippingAddressIds?.includes(address.id) && (
          <h4 className='text-h4 font-bold text-accentColor dark:text-basicColor mr-4'>Shipping address</h4>
        )}
      </div>
      <div className='flex items-center mb-2'>
        <h4 className='text-h4 text-accentColor dark:text-basicColor mr-4'>Country:</h4>
        <p className='italic'> {dataAdapterToFullName(address.country)}</p>
      </div>
      <div className='flex items-center mb-2'>
        <h4 className='text-h4 text-accentColor dark:text-basicColor mr-4'>City:</h4>
        <p className='italic'>{address.city}</p>
      </div>
      <div className='flex items-center mb-2'>
        <h4 className='text-h4 text-accentColor dark:text-basicColor mr-4'>Street:</h4>
        <p className='italic'>{address.streetName}</p>
      </div>
      <div className='flex items-center mb-2'>
        <h4 className='text-h4 text-accentColor dark:text-basicColor mr-4'>Building:</h4>
        <p className='italic'>{address.building}</p>
      </div>
      <div className='flex items-center mb-2'>
        <h4 className='text-h4 text-accentColor dark:text-basicColor mr-4'>Zip code:</h4>
        <p className='italic'>{address.postalCode}</p>
      </div>
    </div>
  );
}

export default AddressCard;
