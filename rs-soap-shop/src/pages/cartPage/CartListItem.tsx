import React, { useState } from 'react';

import { Product } from '../../lib/interfaces';
import DeleteIcon from '../../icons/deleteIcon';

export function CartListItem({ el }: { el: Product }) {
  const [amount, setAmount] = useState(el.quantity);

  return (
    <div className='p-4 border-2 border-dotted border-accentColor dark:border-basicColor rounded-normal w-full mb-4 flex flex-col md:flex-row items-start md:items-center justify-between'>
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
              <p className='line-through text-graySColor dark:text-grayMColor mr-4'>
                {(el.price.value.centAmount / 100).toLocaleString('en-US', {
                  style: 'currency',
                  currency: el.price.value.currencyCode
                })}
              </p>

              <p className='mr-4'>
                {(el.price.discounted.value.centAmount / 100).toLocaleString('en-US', {
                  style: 'currency',
                  currency: el.price.discounted.value.currencyCode
                })}
              </p>
            </>
          ) : (
            <p className='mr-4'>
              {(el.price.value.centAmount / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: el.price.value.currencyCode
              })}
            </p>
          )}
        </div>
        <div className='flex mr-4'>
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
              setAmount(amount + 1);
            }}
            className='cursor-pointer flex justify-center items-center w-[20px] bg-graySColor hover:bg-grayMColor transition'
          >
            +
          </div>
        </div>
        <p className='font-bold mr-2'>
          {(el.totalPrice.centAmount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: el.totalPrice.currencyCode
          })}
        </p>

        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
