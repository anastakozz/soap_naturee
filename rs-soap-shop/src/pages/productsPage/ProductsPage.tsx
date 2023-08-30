import OurProductsCards, { items } from './cardsSection/OurProductsCards';
import { NavigationView } from './navigation/navigationView';
import { useState } from 'react';
import { ProductCardProps } from '../../lib/interfaces';
import BannerPageName from '../../components/bannerPageName';

function ProductsPage() {
  const [products, setProducts] = useState(items);

  function changeContent(categoryProducts: ProductCardProps[]): void {
    setProducts(categoryProducts);
  }

  return (
    <>
      <BannerPageName {...{ children: 'OUR PRODUCTS' }}></BannerPageName>
      <NavigationView changeContent={changeContent} />
      <OurProductsCards products={products} />
    </>
  );
}

export default ProductsPage;
