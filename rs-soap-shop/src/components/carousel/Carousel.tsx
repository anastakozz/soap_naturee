import { Carousel } from '@material-tailwind/react';
import { ReactNode } from 'react';

export default function CarouselDefault(prop: { paths: string[]}) {
  return (
    <Carousel className='rounded-xl '>
      {prop.paths.map((item, index): ReactNode => {
        return (
          <div key={`carousel-item-${index}`} >
            <img src={item} alt='' className='object-cover h-full w-full overflow-hidden' />
          </div>
        );
      })}
    </Carousel>
  );
}
