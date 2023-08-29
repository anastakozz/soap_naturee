import { Carousel } from '@material-tailwind/react';
import { ReactNode } from 'react';

export default function CarouselDefault(prop: { paths: string[] }) {
  return (
    <Carousel className='rounded-xl'>
      {prop.paths.map((item, index): ReactNode => {
        return <img key={`carousel-item-${index}`} src={item} alt='' className='object-cover h-full w-full' />;
      })}
    </Carousel>
  );
}
