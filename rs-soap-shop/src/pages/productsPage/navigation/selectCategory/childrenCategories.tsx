import React from 'react';
import { NavLink } from 'react-router-dom';

export function SelfCare({ onSelectCategory }: { onSelectCategory: (category: string) => void }) {
  return (
    <ul className={'p-3'}>
      <NavLink to={'/our-products/self-care/soap'}>
        <li onClick={() => onSelectCategory('Soap')} className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>
          Soap
        </li>
      </NavLink>
      <NavLink to={'/our-products/self-care/scrub'}>
        <li onClick={() => onSelectCategory('Scrub')} className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>
          Scrub
        </li>
      </NavLink>
      <NavLink to={'/our-products/self-care/bath-bomb'}>
        <li onClick={() => onSelectCategory('Bath-bomb')} className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>
          Bath-bomb
        </li>
      </NavLink>
    </ul>
  );
}

export function Decor({ onSelectCategory }: { onSelectCategory: (category: string) => void }) {
  return (
    <ul className={'p-3'}>
      <NavLink to={'/our-products/decor/aroma-sachet'}>
        <li onClick={() => onSelectCategory('Aroma-sachet')} className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>
          Aroma-sachet
        </li>
      </NavLink>
      <NavLink to={'/our-products/decor/candles'}>
        <li onClick={() => onSelectCategory('Candles')} className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>
          Candles
        </li>
      </NavLink>
    </ul>
  );
}
