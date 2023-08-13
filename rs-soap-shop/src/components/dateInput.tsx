import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState('')
  const [validationError, setValidationError] = useState('')

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setSelectedDate(inputValue)
    setValidationError('')
  }

  const handleSubmit = () => {
    if (!selectedDate) {
      setValidationError('Date is required')
    } else {
      const date = new Date(selectedDate)
      if (isNaN(date.getTime())) {
        setValidationError('Invalid date format')
      } else if (date.getFullYear() < 1900) {
        setValidationError('Year must be 1900 or later')
      } else {
        setValidationError('')
      }
    }
  }

  return (
    <div className={'flex'}>
      <h2 className={'font-semibold text-h4 text-grayLColor whitespace-nowrap mr-10'}>Date of birth:</h2>
      <div>
        <input type='date' value={selectedDate} onChange={handleDateChange} required />
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        {selectedDate && !validationError && <p>Selected Date: {selectedDate}</p>}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default DatePicker
