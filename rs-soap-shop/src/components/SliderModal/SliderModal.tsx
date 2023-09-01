import CarouselDefault from '../carousel';

export default function SliderModal(modal: { isVisible: boolean; paths: string[] }) {
  return (
    <>
      {modal.isVisible ? (
        <>
          <div className='bg-grayLColor/90 h-full w-full z-[60] absolute top-0 left-0'></div>
          <div className='absolute z-[70] top-center top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2'>
            {modal.paths.length === 1 ? (
              <img src={modal.paths[0]} className='rounded-xl object-cover h-full w-full'></img>
            ) : (
              <CarouselDefault {...{ paths: modal.paths }}></CarouselDefault>
            )}
          </div>
          <div className='transition closing-icon absolute top-5 right-5 font-bold text-primaryColor hover:text-accentColor cursor-pointer z-[80]'>
            CLOSE
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}