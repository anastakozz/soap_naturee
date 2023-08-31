import React, { useState } from 'react';
import { DropdownIcon } from '../../../icons/dropdownIcon';
import classNames from 'classnames';
import { getProductsOfCategory, getCategoryId } from '../../../services/product.service';
import { OurProductsCardsProps } from '../../../lib/interfaces';
import Breadcrumb from '../../../components/BasicBreadcrumbs';

export const SelectCategory = ({ changeContent }: OurProductsCardsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const options: string[] = ['Soap', 'Aroma-sashet', 'Bath-bombs', 'Candles', 'Scrub'];

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  async function selectOption(option: string): Promise<void> {
    setSelectedCategory(option);
    setIsOpen(false);

    try {
      const productsByKey = await getCategoryId(option);
      const response = await getProductsOfCategory(productsByKey);
      changeContent(response);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  return (
    <div className='flex flex-wrap'>
      <div className='relative mr-8'>
        <div>
          <button
            type='button'
            className={classNames(
              'inline-flex justify-between',
              'w-[170px] px-2 py-2 h-[37px]',
              'text-sm font-medium text-gray-700',
              'bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentDarkColor dark:focus:ring-accentColor'
            )}
            onClick={toggleDropdown}
          >
            {selectedCategory || 'Select a category'}
            <DropdownIcon />
          </button>
        </div>

        {isOpen && (
          <div className='origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'>
            <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
              {options.map((option: string) => (
                <button
                  key={option}
                  onClick={async (): Promise<void> => {
                    await selectOption(option);
                  }}
                  className='block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100'
                  role='menuitem'
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Breadcrumb></Breadcrumb>
    </div>
  );
};
