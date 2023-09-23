import { Carousel, ThemeProvider } from '@material-tailwind/react';
import { ReactNode } from 'react';
import { CarouselTheme } from './sliderModal.theme';

export default function CarouselDefault(prop: { paths: string[]; classes: string }) {
  return (
    <ThemeProvider value={CarouselTheme}>
      <Carousel className=''>
        {prop.paths.map((item, index): ReactNode => {
          return <img key={`carousel-item-${index}`} src={item} alt='' className={prop.classes} />;
        })}
      </Carousel>
    </ThemeProvider>
  );
}
