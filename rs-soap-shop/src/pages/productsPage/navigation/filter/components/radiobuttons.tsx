export function Radiobuttons() {
  return (
    <form className={'whitespace-nowrap'} action=''>
      <div className="pb-1 flex content-center">
        <input type='radio' id='option1' name='option' value='option1'></input>
        <label htmlFor='option1' className='px-2'>
          Product
        </label>
      </div>
      <div className="pb-1 flex content-center">
        <input type='radio' id='option2' name='option' value='option2'></input>
        <label htmlFor='option2' className='px-2'>Set</label>
      </div>
    </form>
  );
}
