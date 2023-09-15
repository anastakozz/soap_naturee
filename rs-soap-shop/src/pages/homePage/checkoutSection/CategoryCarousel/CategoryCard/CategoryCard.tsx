import { Link } from 'react-router-dom';
import { CategoryCardProps } from '../../../../../lib/interfaces';

export default function CategoryCard(item: CategoryCardProps) {
  return (
    <Link
      to={item.link}
      className='w-[380px] px-[15px] flex flex-col content-center text-basicColor dark:text-secondaryColor hover:text-accentColor dark:hover:text-accentColor hover:scale-105 transition'
    >
      <img
        className='w-[350px] transition mb-esm brightness-110 dark:brightness-75 saturate-[0.9] hover:filter-none dark:hover:filter-none'
        src={item.path}
        alt=''
      />
      <p className='text-h4 text-center  font-semibold'>{item.name}</p>
    </Link>
  );
}
