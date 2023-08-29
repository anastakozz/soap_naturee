export function Radiobuttons() {
  return (
    <form className={''} action=''>
      <div>
        <input type='radio' id='option1' name='option' value='option1'></input>
        <label htmlFor='option1'>Single product</label>
      </div>
      <div>
        <input type='radio' id='option2' name='option' value='option2'></input>
        <label htmlFor='option2'>Multiple products</label>
      </div>
    </form>
  );
}
