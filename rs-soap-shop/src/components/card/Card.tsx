import { ProductCardProps } from '../../lib/interfaces';
import { useNavigate } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { sendToCart } from '../../services/handleCart';
import SendButton from './SendButton';

export default function Card(item: ProductCardProps) {
  const [isInCart, setIsInCart] = useState<boolean>(item.isInCart);
  const [isSending, setIsSending] = useState<boolean>(false);

  const navigate = useNavigate();

  async function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('cart-button')) {
      try {
        setIsSending(true);
        await sendToCart(item.productId);
      } catch (err) {
        console.log(err);
        setIsSending(false);
      } finally {
        setIsInCart(true);
        setIsSending(false);
      }
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
        <SendButton isInCart={isInCart} isSending={isSending} />
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
