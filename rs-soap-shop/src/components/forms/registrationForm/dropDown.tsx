import React, { useState } from 'react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className='relative'>
      <button onClick={toggleDropdown} className='bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md'>
        {selectedOption || 'Select your country'}
      </button>

      {isOpen && (
        <ul className='absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-md z-10'>
          <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleOptionSelect('Germany')}>
            Germany
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleOptionSelect('Spain')}>
            Spain
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleOptionSelect('France')}>
            France
          </li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
