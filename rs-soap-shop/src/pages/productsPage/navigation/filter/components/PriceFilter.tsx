import { ChangeEvent } from 'react';
export function PriceFilter(options: {
  startMinPrice: string;
  startMaxPrice: string;
  callbackMin: (event: ChangeEvent<HTMLInputElement>) => void;
  callbackMax: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { startMaxPrice, startMinPrice, callbackMax, callbackMin } = options;
  const inputStyles = 'w-big my-2 min-price bg-additionalColor focus:bg-accentColor/20 pl-2 focus:outline-none';

  return (
    <div>
      <div>Min price, €:</div>
      <input
        type={'number'}
        className={`${inputStyles} min-price`}
        value={startMinPrice}
        onChange={callbackMin}
        min={0}
        max={300}
      ></input>
      <div>Max price, €:</div>
      <input
        type={'number'}
        className={`${inputStyles} max-price`}
        value={startMaxPrice}
        onChange={callbackMax}
        min={0}
        max={300}
      ></input>
    </div>
  );
}
