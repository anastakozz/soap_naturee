import classNames from 'classnames';
import React from 'react';
import { Decor, SelfCare } from './childrenCategories';
import { SubCategoryProps } from '../../../../lib/interfaces';

export default function SubCategory({ isDropdownOpened, openedCategory }: SubCategoryProps) {
  return (
    <div
      className={classNames('left-40 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20', {
        hidden: isDropdownOpened
      })}
    >
      {openedCategory === 'Decor' ? <Decor /> : <SelfCare />}
    </div>
  );
}