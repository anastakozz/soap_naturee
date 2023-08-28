import { useParams } from 'react-router-dom';
import { getProductByKey } from '../../services/product.service';
import React, { useEffect, useState } from 'react';
import { DetailsProps } from '../../lib/interfaces';
import CarouselDefault from '../../components/carousel';
import toDetailsAdapter from '../../lib/utils/productDataAdapters.ts/toDetailsAdapter';
import EmptyButton from '../../components/buttons/emptyButton';

function DetailedProductPage() {
  const [data, initProductData] = useState<DetailsProps | null>(null);
  const { key } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProductByKey(key);
      const adaptedProduct = toDetailsAdapter(product);
      initProductData(adaptedProduct);
    };
    fetchData().catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <div className='bg-primaryColor dark:bg-grayMColor'>
      {data ? (
        <div className='max-w-[1440px] mx-auto px-8 lg:px-big py-4'>
          <h1 className='text-h2 md:text-h2 py-4 text-center md:text-left text-accentColor dark:text-primaryColor'>
            {data.name}
          </h1>
          <div className='flex items-center flex-col md:flex-row md:justify-between md:items-start'>
            <div className='max-w-[400px] mx-auto h-[400px] md:mx-0 md:ml-10 mb-10'>
              <CarouselDefault {...{ paths: data.imgSources }}></CarouselDefault>
            </div>
            <div className='max-w-[400px] md:max-w-[60%] md:order-first'>
              <p className='text-h5'>{data.description}</p>
              <div className='flex items-center w-full justify-between mb-4 '>
                {data.isOnSale ? (
                  <>
                    <div className='text-h3 md:text-h2 whitespace-nowrap'>{data.newPrice}</div>
                    <div className='flex items-center'>
                      <div className='text-h5 md:text-h2 line-through text-graySColor dark:text-grayMColor ml-8 whitespace-nowrap'>
                        {data.price}
                      </div>
                      <div className='h-min bg-red-500/90 text-primaryColor font-bold px-4 ml-8'>SALE</div>
                    </div>
                  </>
                ) : (
                  <div className='text-h2 whitespace-nowrap'>{data.price}</div>
                )}
              </div>
              <EmptyButton {...{ children: 'Add to Cart' }}></EmptyButton>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailedProductPage;
