import { useParams } from 'react-router-dom';
import { getProductByKey } from '../../services/product.service';
import React, { useEffect, useState } from 'react';
import { DetailsProps } from '../../lib/interfaces';
import CarouselDefault from '../../components/carousel';
import toDetailsAdapter from '../../lib/utils/productDataAdapters.ts/toDetailsAdapter';
import HeavyButton from '../../components/buttons/heavyButton';

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
    <div className='max-w-[1440px] mx-auto px-4 flex flex-col lg:px-big py-4 bg-secondaryColor dark:bg-grayMColor'>
      {data ? (
        <>
          <div className=''>
            
              <h1 className='text-5xl py-4 text-center text-accentColor dark:text-primaryColor'>{data.name}</h1>
              <div className='max-w-[400px] mx-auto h-[400px]'><CarouselDefault {...{ paths: data.imgSources }}></CarouselDefault></div>
              <p className='text-h4'>{data.description}</p>
            
            
          </div>{' '}
          <HeavyButton {...{ children: 'Add to Cart' }}></HeavyButton>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailedProductPage;
