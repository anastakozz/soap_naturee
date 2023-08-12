import HeavyButton from '../buttons/heavyButton'

export function Banner(content: string[]) {
  return (
    <div className='bg-secondaryColor dark:bg-accentDarkColor w-[550px] rounded-normal p-sm h-min'>
      <p className='text-grayLColor dark:text-secondaryColor text-base font-semibold my-5'>{content[0]}</p>
      <h2 className='text-accentColor dark:text-secondaryColor text-h2 font-bold leading-tight'>{content[1]}</h2>
      <h4 className='text-grayLColor dark:text-secondaryColor text-h4 font-semibold my-5'>{content[2]}</h4>
      <HeavyButton>{content[3]}</HeavyButton>
    </div>
  )
}
