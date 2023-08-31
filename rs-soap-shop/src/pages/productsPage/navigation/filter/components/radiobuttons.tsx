export function Radiobuttons() {
  return (
    <form className={'whitespace-nowrap'} action=''>
      <div className=' pb-1 flex content-center'>
        <input type='checkbox' className='product-check'></input>
        <label htmlFor='option1' className='px-2'>
          Product
        </label>
      </div>
      <div className=' pb-1 flex content-center'>
        <input type='checkbox' className='set-check'></input>
        <label htmlFor='option2' className='px-2'>
          Set
        </label>
      </div>
    </form>
  );
}
