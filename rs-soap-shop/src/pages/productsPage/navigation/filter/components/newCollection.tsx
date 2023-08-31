export function NewCollection() {
  return (
    <form action='' className="flex content-center whitespace-nowrap">
      <input id={'newCollection'} type='checkbox'></input>
      <label htmlFor={'newCollection'} className='px-2'>New collection</label>
    </form>
  );
}
