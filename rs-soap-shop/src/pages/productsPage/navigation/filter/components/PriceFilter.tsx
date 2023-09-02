import { ChangeEvent } from 'react';
export function PriceFilter(options: {
  startMinPrice: string;
  startMaxPrice: string;
  callbackMin: (event: ChangeEvent<HTMLInputElement>) => void;
  callbackMax: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { startMaxPrice, startMinPrice, callbackMax, callbackMin } = options;

  return (
    <div>
      <div>Min price, €:</div>
      <input
        type={'number'}
        className={'w-big my-2 min-price'}
        value={startMinPrice}
        onChange={callbackMin}
        min={0}
        max={300}
      ></input>
      <div>Max price, €:</div>
      <input
        type={'number'}
        className={'w-big my-2 max-price '}
        value={startMaxPrice}
        onChange={callbackMax}
        min={0}
        max={300}
      ></input>
    </div>
  );
}
