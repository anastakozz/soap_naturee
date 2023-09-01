import React, { useEffect, useState } from 'react';
import { DropdownIcon } from '../../../../icons/dropdownIcon';
import classNames from 'classnames';
import { getCategoriesNames } from '../../../../services/category.service';
import SubCategory from './dropdownMenu';
import ParentCategory from './parentCategory';
import { NavigationViewProps } from '../../../../lib/types';

export const SelectCategory = ({ nav }: NavigationViewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [isDropdownOpened, setIsDropdownOpened] = useState(true);
  const [openedCategory, setOpenedCategory] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getCategoriesNames();
      setOptions(categories);
    }

    fetchCategories();
  }, []);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category: string) => {
    toggleDropdown();
    setSelectedCategory(category);
  };

  return (
    <div className='relative'>
      <div>
        <button
          type='button'
          className={classNames(
            'inline-flex justify-between',
            'w-[170px] px-2 py-2',
            'text-sm font-medium text-gray-700',
            'bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          )}
          onClick={toggleDropdown}
        >
          {selectedCategory || 'Select a category'}
          <DropdownIcon />
        </button>
      </div>

      {isOpen && (
        <div className='w-[170px] origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'>
          <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {options.map((option: string) => {
              if (['Decor', 'Self-care', 'New', 'Sale'].includes(option)) {
                return (
                  <button
                    key={option}
                    className='relative block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-200'
                    role='menuitem'
                  >
                    <>
                      <ParentCategory
                        onSelectCategory={selectCategory}
                        category={nav.category}
                        option={option}
                        setIsDropdownOpened={setIsDropdownOpened}
                        isDropdownOpened={isDropdownOpened}
                        setOpenedCategory={setOpenedCategory}
                      />
                      {openedCategory === option && !isDropdownOpened ? (
                        <SubCategory
                          onSelectCategory={selectCategory}
                          isDropdownOpened={isDropdownOpened}
                          openedCategory={openedCategory}
                        />
                      ) : null}
                    </>
                  </button>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};
