import { CarouselStylesType, IconButton } from '@material-tailwind/react';

interface carouselTheme {
  carousel: CarouselStylesType;
}

export const CarouselTheme: carouselTheme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ handlePrev }) => {
        return (
          <IconButton
            variant='filled'
            color='white'
            size='md'
            onClick={handlePrev}
            className='!absolute top-2/4 left-4 -translate-y-2/4 hover:scale-105 active:scale-95'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
            </svg>
          </IconButton>
        );
      },
      nextArrow: ({ handleNext }) => (
        <IconButton
          variant='filled'
          color='white'
          size='md'
          onClick={handleNext}
          className='!absolute top-2/4 !right-4 -translate-y-2/4 hover:scale-105 active:scale-95 '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
          </svg>
        </IconButton>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: 'tween',
        duration: 0.5
      },
      loop: false,
      className: ''
    },
    styles: {
      base: {
        carousel: {
          position: 'relative',
          width: 'w-full',
          height: 'h-full',
          overflowX: 'overflow-hidden ',
          display: 'flex'
        },

        slide: {
          width: 'w-full',
          height: 'h-full',
          display: 'inline-block',
          flex: 'flex-none'
        }
      }
    }
  }
};
