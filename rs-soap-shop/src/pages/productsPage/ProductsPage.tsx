import OurProductsCards, { items } from './cardsSection/OurProductsCards';
import { NavigationView } from './navigation/navigationView';
import { useEffect, useState } from 'react';
import BannerPageName from '../../components/bannerPageName';
import { useParams } from 'react-router-dom';
import { getCategoryId } from '../../services/category.service';
import { getProductsList, getProductsOfCategory } from '../../services/product.service';

function ProductsPage() {
  const [products, setProducts] = useState(items);

  const { category, subcategory } = useParams();

  useEffect(() => {
    if (category || subcategory) {
      getCategoryId(
        subcategory
          ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
          : category.charAt(0).toUpperCase() + category.slice(1)
      ).then(categoryId => {
        getProductsOfCategory(categoryId).then(products => {
          setProducts(products);
        });
      });
    } else {
      getProductsList().then(products => {
        setProducts(products);
      });
    }
  }, [category, subcategory]);

  return (
    <>
      <BannerPageName {...{ children: 'OUR PRODUCTS' }}></BannerPageName>
      <NavigationView nav={{ category, subcategory }} />
      <OurProductsCards products={products} />
    </>
  );
}

export default ProductsPage;
