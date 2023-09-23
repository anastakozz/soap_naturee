import { Link } from 'react-router-dom';
import EmptyButton from '../../../components/buttons/emptyButton';
import Card from '../../../components/card';
import { ReactNode, useContext, useEffect, useState } from 'react';
import shuffleProducts from '../../../lib/utils/shuffleCards';
import { Product, ProductCardProps } from '../../../lib/interfaces';
import { getProductsList } from '../../../services/product.service';
import toCardAdapter from '../../../lib/utils/productDataAdapters.ts/toCardAdapter';
import { getCart, getProductsInCart } from '../../../services/handleCart';
import { CartContext } from '../../../App';

async function getRandomCardsData(): Promise<ProductCardProps[]> {
  const cartProducts = await getProductsInCart();
  const data: Product[] = await getProductsList();

  if (data) {
    const shuffledData = shuffleProducts(data).slice(0, 6);
    const dataAdapted = shuffledData.map((product: Product) => {
      const isInCart = cartProducts ? cartProducts.includes(product.id) : false;
      return toCardAdapter(product, isInCart);
    });
    return dataAdapted;
  }
}

export default function RandomCardsSection() {
  const [cart, setCart] = useContext(CartContext);
  const [items, setItems] = useState<ProductCardProps[] | undefined>(undefined);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    getCart().then(resp => {
      setCart({ ...cart, ...resp.data });
    }).catch(err => console.log(err));
    const fetchData = async () => {
      const data = await getRandomCardsData();
      return data;
    };

    if (!items && !isDataLoading) {
      setDataLoading(true);

      fetchData()
        .then(data => setItems(data))
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          setDataLoading(false);
        });
    }
  }, []);

  return (
    <div role='random-section'>
      {items ? (
        <div className='bg-primaryColor dark:bg-grayMColor h-auto p-sm text-center px-big flex flex-col items-center'>
          <h3 className='text-basicColor dark:text-secondaryColor text-h3 text-center font-bold whitespace-nowrap'>
            You may like it
          </h3>
          <div className='flex flex-wrap justify-around mt-sm max-w-[1245px] pb-sm '>
            {items.map((item, index): ReactNode => {
              return (
                <div key={index} className='mb-sm mx-4'>
                  <Card {...item} />
                </div>
              );
            })}
          </div>
          <Link to={'./our-products'}>
            <EmptyButton>Show More</EmptyButton>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
