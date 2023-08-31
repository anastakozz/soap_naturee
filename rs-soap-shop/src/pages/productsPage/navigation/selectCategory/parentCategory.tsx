import CategoryDropdownArrow from '../../../../icons/categoryDropdownArrow';
import React from 'react';
import { parentCategoryProps } from '../../../../lib/interfaces';

export default function ParentCategory({
  option,
  setIsDropdownOpened,
  isDropdownOpened,
  setOpenedCategory
}: parentCategoryProps) {
  return (
    <div className={'flex justify-between'}>
      <div>{option}</div>
      <div
        onClick={event => {
          event.stopPropagation();
          setIsDropdownOpened(!isDropdownOpened);
          setOpenedCategory(option);
        }}
      >
        {option === 'Self-care' || option === 'Decor' ? (
          <CategoryDropdownArrow isDropdownOpened={isDropdownOpened} option={option} />
        ) : null}
      </div>
    </div>
  );
}
