import { ProductCardProps } from '../../lib/interfaces'

export default function Card(item: ProductCardProps) {
  return (
    <div className='w-[278px] mb-sm mx-4'>
      <img className='object-cover h-[300px] w-full' src={item.imgSrc} alt=''></img>
      <div className='bg-additionalColor dark:bg-graySColor text-left p-4'>
        <h4 className='text-h4 font-semibold text-grayLColor dark:text-secondaryColor'>{item.label}</h4>
        <p className='text-grayMColor dark:text-additionalColor'>{item.description}</p>
        <div className='flex justify-between items-end'>
          <p className='text-h5 font-semibold text-grayLColor'>{item.price}</p>
          <p className='line-through text-graySColor dark:text-grayMColor'>{item.oldPrice}</p>
        </div>
      </div>
    </div>
  )
}
