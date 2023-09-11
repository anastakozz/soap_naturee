import React, { useState } from 'react';

import { Product } from '../../lib/interfaces';
import DeleteIcon from '../../icons/deleteIcon';

export function CartListItem({ el }: { el: Product }) {
  const [amount, setAmount] = useState(el.quantity);

  return (
    <div className='p-4 border-2 border-dotted border-accentColor dark:border-basicColor rounded-normal w-full mb-4 flex flex-col md:flex-row items-center justify-between'>
      <div className='flex items-center  justify-start mb-4 md:mb-0'>
        <div className='border-2 border-accentColor dark:border-basicColor rounded-normal overflow-hidden flex justify-center items-center w-[100px] h-[100px] shrink-0 mr-4'>
          <img src={el.variant.images[0].url} alt=''></img>
        </div>
        <h3 className='text-accentColor dark:text-basicColor font-bold mr-2 text-center md:text-start'>{el.name.en}</h3>
      </div>
      <div className='flex items-center flex-wrap'>
        <div>
          {el.price.discounted ? (
            <>
              <div className='flex mr-4 '>
                <p className='line-through text-graySColor dark:text-grayMColor'>{el.price.value.centAmount}</p>
                <p className='line-through text-graySColor dark:text-grayMColor'>{el.price.value.currencyCode}</p>
              </div>
              <div className='flex mr-4 '>
                <p>{el.price.discounted.value.centAmount}</p>
                <p>{el.price.discounted.value.currencyCode}</p>
              </div>
            </>
          ) : (
            <div className='flex mr-4'>
              <p>{el.price.value.centAmount}</p>
              <p>{el.price.value.currencyCode}</p>
            </div>
          )}
        </div>
        <div className='flex mr-4'>
          <div
            onClick={() => {
              setAmount(amount + 1);
            }}
            className='cursor-pointer flex justify-center items-center w-[20px] bg-graySColor hover:bg-grayMColor transition'
          >
            +
          </div>
          <input
            onChange={e => {
              // setAmount(parseInt(e.target.value));
              console.log(e.target.value);
            }}
            className='w-[30px] text-center'
            type='text'
            value={amount}
          />
          <div
            onClick={() => {
              if (amount > 1) {
                setAmount(amount - 1);
              }
            }}
            className='cursor-pointer flex justify-center items-center w-[20px] bg-graySColor hover:bg-grayMColor transition'
          >
            -
          </div>
        </div>
        <div className='flex mr-2'>
          <p className='font-bold'>{el.totalPrice.centAmount}</p>
          <p className='font-bold'>{el.totalPrice.currencyCode}</p>
        </div>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
