import CarouselDefault from '../carousel';
import { useEffect } from 'react';
import scrollToTop from '../../lib/utils/scrollToTop';

export default function SliderModal(modal: { isVisible: boolean; paths: string[] }) {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      {modal.isVisible ? (
        <>
          {scrollToTop()}
          {(document.body.style.overflow = 'hidden')}
          <div className='bg-grayLColor/90 h-full w-full z-[60] absolute top-0 left-0'></div>
          <div className='absolute z-[70] top-center top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2'>
            {modal.paths.length === 1 ? (
              <img src={modal.paths[0]} className='object-contain h-full w-full'></img>
            ) : (
              <CarouselDefault {...{ paths: modal.paths, classes: 'w-full h-full object-contain' }}></CarouselDefault>
            )}
          </div>
          <div className='transition closing-icon absolute top-5 right-5 font-bold text-primaryColor hover:text-accentColor cursor-pointer z-[80]'>
            CLOSE
          </div>
        </>
      ) : (
        <>{(document.body.style.overflow = 'visible')}</>
      )}
    </>
  );
}
