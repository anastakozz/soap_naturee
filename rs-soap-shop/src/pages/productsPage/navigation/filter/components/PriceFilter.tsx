import React, { useState, ChangeEvent } from 'react';

export function PriceFilter() {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('1000');

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    if (
      (newValue === '' || (newValue !== '' && parseFloat(newValue) <= parseFloat(maxPrice))) &&
      parseFloat(newValue) <= 1000 &&
      parseFloat(newValue) >= 0
    ) {
      setMinPrice(newValue);
    }
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    if (
      (newValue === '' || (newValue !== '' && parseFloat(newValue) >= parseFloat(minPrice))) &&
      parseFloat(newValue) <= 1000 &&
      parseFloat(newValue) >= 0
    ) {
      setMaxPrice(newValue);
    }
  };

  return (
    <div>
      <div>Min price, €:</div>
      <input
        type={'number'}
        className={'w-big my-2 min-price'}
        value={minPrice}
        onChange={handleMinPriceChange}
        min={0}
        max={1000}
      ></input>
      <div>Max price, €:</div>
      <input
        type={'number'}
        className={'w-big my-2 max-price '}
        value={maxPrice}
        onChange={handleMaxPriceChange}
        min={0}
        max={1000}
      ></input>
    </div>
  );
}
