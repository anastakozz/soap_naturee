import { ProductCardProps } from '../../lib/interfaces';
import { useNavigate } from 'react-router-dom';
import SmallButton from '../buttons/smallButton';
import { MouseEvent } from 'react';
import { addToCart, getActiveCart } from '../../services/cart.service';
import { getTokenFromStorage } from '../../lib/utils/getLocalStorageToken';

async function addToCard(id: string) {
  const token = getTokenFromStorage();
  const cartId = await getActiveCart(token);
  addToCart(id, token, cartId.data.id, cartId.data.version);

  console.log(`add product ${id} to cart ${cartId.data.id}`);
}

export default function Card(item: ProductCardProps) {
  enum cardMessage {
    inCart = 'Already in Cart',
    toCart = 'Add to Cart'
  }

  const navigate = useNavigate();
  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('cart-button')) {
      addToCard(item.productId);
    } else {
      navigate(`${item.link}`);
    }
  }

  return (
    <div
      onClick={handleClick}
      data-testid='card'
      className='cursor-pointer relative transition w-[280px] hover:scale-[1.02] hover:drop-shadow-lg active:scale-100 active:drop-shadow-none'
    >
      <img className='object-cover h-[300px] w-full ' src={item.imgSrc} alt=''></img>
      <div className='z-20 w-full absolute -translate-y-[30px]'>
        <SmallButton {...{ children: cardMessage.toCart }}></SmallButton>
      </div>
      <div className='h-[130px] bg-additionalColor dark:bg-graySColor text-left p-4 flex flex-col justify-between'>
        <p className='leading-5 w-full text-h5 font-semibold text-grayLColor dark:text-secondaryColor'>{item.label}</p>
        <div>
          <p className='text-grayMColor dark:text-additionalColor truncate'>{item.description}</p>
          <div className='flex justify-between items-end'>
            {item.isOnSale ? (
              <>
                <p className='text-h5 font-semibold text-grayLColor'>{item.newPrice}</p>
                <p className='line-through text-graySColor dark:text-grayMColor'>{item.price}</p>
                <div className='font-bold absolute z-10 top-[25px] right-0 bg-red-500/90 p-2 pr-sm align-middle text-primaryColor'>
                  SALE
                </div>
              </>
            ) : (
              <>
                <p className='text-h5 font-semibold text-grayLColor'>{item.price}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
