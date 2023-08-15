import { Controller, Control } from 'react-hook-form';

const DatePicker = ({ control }: { control: Control }) => {
  return (
    <Controller
      name='selectedDate'
      control={control}
      rules={{ required: 'Date is required' }}
      render={({ field, fieldState }) => (
        <div className={'md:flex justify-between items-end mb-esm'}>
          <h2 className={'mb-min font-semibold text-h4 text-grayLColor whitespace-nowrap mr-10'}>Date of birth:</h2>
          <div>
            <input
              type='date'
              className={'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'}
              {...field}
              required
            />
            {fieldState.error && <p style={{ color: 'red' }}>{fieldState.error.message}</p>}
            {field.value && !fieldState.error && <p>Selected Date: {field.value}</p>}
          </div>
        </div>
      )}
    />
  );
}

export default DatePicker;


