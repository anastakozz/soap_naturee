import React, { ReactNode } from 'react';
import Card from '../../../components/card';
import { OurProductsCardsProps, Product, ProductCardProps } from '../../../lib/interfaces';
import { getProductsList } from '../../../services/product.service';
import toCardAdapter from '../../../lib/utils/productDataAdapters.ts/toCardAdapter';
import { cardsPerPage } from '../../../lib/enums';

export const items: ProductCardProps[] = await getCardsData();

async function getCardsData(): Promise<ProductCardProps[]> {
  const data: Product[] = await getProductsList(cardsPerPage.catalog);
  if (data) {
    return data.map((product: Product) => toCardAdapter(product));
  }
}

export default function OurProductsCards({ products }: OurProductsCardsProps) {
  return (
    <>
      {products ? (
        <div className='bg-primaryColor dark:bg-grayMColor h-auto p-sm text-center px-big flex flex-col items-center'>
          <div className='flex flex-wrap justify-between mt-sm max-w-[1245px] pb-sm '>
            {products.map((item: ProductCardProps | Product, index): ReactNode => {
              if ('priceMode' in item) {
                item = toCardAdapter(item);
              }
              return (
                <div key={index} className='mb-sm mx-4'>
                  <Card {...item} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
