import React from 'react';

export function SelfCare() {
  return (
    <ul className={'p-3'}>
      <li className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>Soap</li>
      <li className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>Scrub</li>
      <li className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>Bath-bomb</li>
    </ul>
  );
}

export function Decor() {
  return (
    <ul className={'p-3'}>
      <li className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>Aroma-sachet</li>
      <li className={'py-2 px-1 hover:bg-gray-300 rounded-lg'}>Candles</li>
    </ul>
  );
}
