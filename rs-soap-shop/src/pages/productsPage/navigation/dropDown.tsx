import React, { useState } from 'react';
import {DropdownIcon} from '../../../icons/dropdownIcon';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const options: string[] = ['Soap', 'Aroma-sashet', 'Bath bombs', 'candles', 'Scrub'];

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string): void => {
    setSelectedCategory(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-[170px] px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          {selectedCategory || 'Select a category'}
          <DropdownIcon />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option:string) => (
              <button
                key={option}
                onClick={() => selectOption(option)}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

