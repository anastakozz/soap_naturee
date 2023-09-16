import React, { useContext, useEffect, useState } from 'react';
import scrollToTop from '../../lib/utils/scrollToTop';
import BannerPageName from '../../components/bannerPageName';
import { getTokenFromStorage } from '../../lib/utils/getLocalStorageToken';
import { deleteCart, getActiveCart, getCartWithPromoCode, removeDiscountCode } from '../../services/cart.service';
import { Product } from '../../lib/interfaces';

import AdditionalButton from '../../components/buttons/additionalButton';
import { CartListItem } from './CartListItem';
import { EmptyCart } from './EmptyCart';
import { CartContext } from '../../App';

function CartPage() {
  const [cart, setCart] = useContext(CartContext);
  const [token, setToken] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [cartId, setCartId] = useState();
  const [cartVersion, setCartVersion] = useState();
  const [isPromoCodeActive, setIsPromoCodeActive] = useState(false);
  const [totalPriceWithoutPromo, setTotalPriceWithoutPromo] = useState();
  const promoCodeInput: HTMLInputElement = document.querySelector('#promoCodeInput');

  useEffect(() => {
    getTokenFromStorage().then(res => {
      setToken(res);
    });
    const storedIsPromoCodeActive = localStorage.getItem('isPromoCodeActive');
    if (storedIsPromoCodeActive === 'true') {
      setIsPromoCodeActive(true);
    }
  }, []);

  async function updateCart() {
    getActiveCart(token)
      .then(response => {
        setCart(response.data);
        setTotalCost(response.data.totalPrice.centAmount);
        setCartId(response.data.id)
        setCartVersion(response.data.version)
        setTotalPriceWithoutPromo(response.data.lineItems.reduce((sum: number, item:Product) => {
          return sum + item.variant.prices[0].value.centAmount * item.quantity * 100;
        }, 0));
      })
      .catch(err => {
        console.error(err);
      });
  }

  const handleCleanCart = () => {
    deleteCart(token, cart.id, cart.version).then(() => setCart(null));
  };

  useEffect(() => {
    scrollToTop();
    if (token) {
      updateCart();
    }
  }, [token]);

  async function applyPromoCode() {
    const response = await getCartWithPromoCode(promoCodeInput.value, cartId, token, cartVersion);
    if (typeof response === 'string') {
      promoCodeInput.classList.add('border');
      promoCodeInput.classList.add('border-red-500');
      localStorage.setItem('promoCodeActivationMessage', 'Promo code does not exist!');
    } else {
      localStorage.setItem('isPromoCodeActive', 'true');
      promoCodeInput.classList.remove('border-2');
      promoCodeInput.classList.remove('border-red-500');
      promoCodeInput.setAttribute('disabled', 'true');
      localStorage.setItem('promoCodeActivationMessage', 'Promo code applied');
      setIsPromoCodeActive(true);
      localStorage.setItem('promoCodeId', response.discountCodes[0].discountCode.id)
    }
    await updateCart();
  }

  async function removePromoCode(withoutRequests = false) {
    if (!withoutRequests) {
      const response = await removeDiscountCode(cartId, token, cartVersion, localStorage.getItem('promoCodeId'));
      if (response !== 'success') return;
    }
    localStorage.setItem('isPromoCodeActive', 'false');
    promoCodeInput.setAttribute('disabled', 'false');
    localStorage.setItem('promoCodeActivationMessage', '');
    setIsPromoCodeActive(false);
    if (!withoutRequests) await updateCart();
  }

  return (
    <>
      <div className='bg-secondaryColor dark:bg-grayMColor flex-1'>
        <BannerPageName>MY CART</BannerPageName>
        <div className='py-sm px-sm max-w-[1440px] mx-auto lg:px-big'>
          {cart?.lineItems && cart?.lineItems.length > 0 ? (
            <div className='flex flex-col'>
              <div className='flex flex-col border-b-2 border-accentColor dark:border-basicColor'>
                <div className='border-b-2 border-accentColor dark:border-basicColor p-2 flex justify-between items-center mb-4'>
                  <h3 className='text-h3 text-accentColor dark:text-basicColor font-bold  md:text-start'>
                    My list of products
                  </h3>
                  <AdditionalButton onClick={async () => {
                    await removePromoCode(true);
                    handleCleanCart();
                  }}>Clean</AdditionalButton>
                </div>
                {cart?.lineItems.map((el: Product) => (
                  <CartListItem
                    token={token}
                    cartId={cart.id}
                    key={el.id}
                    el={el}
                    version={cart.version}
                    onUpdate={updateCart}
                  />
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-start justify-center md:justify-end p-4 border-b-2 border-accentColor dark:border-basicColor'>
                <p className='text-center md:text-start mt-4 md:mr-4 md:mb-0'>
                  Do you have a promo code? Enter it here:
                </p>
                <div>
                  <input
                    className='p-2 font-medium rounded-md border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black md:mr-2 mb-2 md:mb-0'
                    id='promoCodeInput'
                    type='text'
                    placeholder={isPromoCodeActive ? 'NATURE' : 'Enter promo code'}
                    disabled={isPromoCodeActive}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        !isPromoCodeActive ? applyPromoCode() : removePromoCode();
                      }}}
                  />
                  <p className={isPromoCodeActive ? 'text-green-700' : 'text-errorColor'}>{localStorage.getItem('promoCodeActivationMessage')}</p>
                </div>
                <button
                  onClick={()=> { !isPromoCodeActive ? applyPromoCode() : removePromoCode() }}
                  className={
                    'rounded transition text-secondaryColor font-bold bg-accentColor/80 hover:bg-accentDarkColor/80 dark:hover:bg-grayLColor w-[70px] px-0 py-[5px] mt-2 md:mr-2  md:mb-0'
                  }
                >
                  {isPromoCodeActive ? ('Reset') : ('Apply')}
                </button>
              </div>
              <div className='flex justify-end items-end p-2'>
                <div className='text-h3 text-accentColor dark:text-basicColor font-bold mr-4'>Total cost:</div>
                {isPromoCodeActive ? (
                  <div>
                    <div className='flex justify-between text-graySColor dark:accent-accentColor text-h3 font-bold line-through'>
                      {totalPriceWithoutPromo && (totalPriceWithoutPromo / 10000).toLocaleString('en-US', {
                        style: 'currency',
                        currency: `${cart.lineItems[0].variant.prices[0].value.currencyCode}`
                      })}
                    </div>
                    <div className='flex justify-between text-h3 font-bold'>
                      {(totalCost / 100).toLocaleString('en-US', {
                      style: 'currency',
                      currency: `${cart.lineItems[0].variant.prices[0].value.currencyCode}`
                    })}</div>
                  </div>
                  ) : (
                  <div className='flex text-h3 font-bold'>
                    {(totalCost / 100).toLocaleString('en-US', {
                      style: 'currency',
                      currency: `${cart.lineItems[0].variant.prices[0].value.currencyCode}`
                    })}
                  </div>
                )}

              </div>
            </div>
          ) : (
            <div>
              <EmptyCart />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
