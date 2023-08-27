import { ReactNode } from 'react';
import Card from '../../../components/card';
import { Product, ProductCardProps } from '../../../lib/interfaces';
import { getProductsList } from '../../../services/product.service';
import toCardAdapter from '../../../lib/utils/productDataAdapters.ts/toCardAdapter';
import { cardsPerPage } from '../../../lib/enums';

const items = await getCardsData();

async function getCardsData(): Promise<ProductCardProps[]> {
  const data: Product[] = await getProductsList(cardsPerPage.catalog);
  if (data) {
    const dataAdapted = data.map((product: Product) => toCardAdapter(product));
    return dataAdapted;
  }
}

export default function OurProductsCards() {
  return (
    <>
      {items ? (
        <div className='bg-primaryColor dark:bg-grayMColor h-auto p-sm text-center px-big flex flex-col items-center'>
          <h3 className='text-basicColor dark:text-secondaryColor text-h3 text-center font-bold'>Our products</h3>
          <div className='flex flex-wrap justify-around mt-sm max-w-[1245px] pb-sm '>
            {items.map((item, index): ReactNode => {
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
