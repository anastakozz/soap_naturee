import OurProductsCards, { items } from './cardsSection/OurProductsCards';
import { Navigation } from './navigation/navigation';
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
<BannerPageName {...{children: 'OUR PRODUCTS'}}></BannerPageName>
      <Navigation changeContent={changeContent} />
      <OurProductsCards products={products} />
    </>
  );
}

export default ProductsPage;
