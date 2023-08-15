import React, { useState } from 'react';
import { Controller, Control } from 'react-hook-form';

interface DropdownProps {
  control: Control;
}

const Dropdown = ({ control }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <Controller
        name='selectedCountry'
        control={control}
        rules={{ required: 'Please select a country' }}
        render={({ field, fieldState }) => (
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='font-medium rounded-md w-full border border-slate-300 bg-gray-300 hover:bg-gray-400 p-5'
            >
              {selectedOption || 'Select your country'}
            </button>

            {isOpen && (
              <ul className='absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-md z-10'>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => {
                    field.onChange('Germany');
                    handleOptionSelect('Germany');
                  }}
                >
                  Germany
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => {
                    field.onChange('Spain');
                    handleOptionSelect('Spain');
                  }}
                >
                  Spain
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => {
                    field.onChange('Italy');
                    handleOptionSelect('Italy');
                  }}
                >
                  Italy
                </li>
              </ul>
            )}

            {fieldState.error && <p style={{ color: 'red' }}>{fieldState.error.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

export default Dropdown;
