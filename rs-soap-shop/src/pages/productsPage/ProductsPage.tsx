import OurProductsCards, { items } from './cardsSection/OurProductsCards';
import { NavigationView } from './navigation/navigationView';
import { useEffect, useState } from 'react';
import BannerPageName from '../../components/bannerPageName';
import { useParams } from 'react-router-dom';
import { getCategoryId } from '../../services/category.service';
import { getProductsList, getFiltered } from '../../services/product.service';
import { ProductCardProps } from '../../lib/interfaces';
import scrollToTop from '../../lib/utils/scrollToTop';

function ProductsPage() {
  const [products, setProducts] = useState(items);
  const { category, subcategory } = useParams();
  const [query, setQuery] = useState('');

  function updateSearchedProducts(adaptedProducts: ProductCardProps[]) {
    setProducts(adaptedProducts);
  }

  function changeQuery(options: string): void {
    setQuery(options);
    console.log('global query updated');
  }

  function updateProducts() {
    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(`?filter=categories.id:"${categoryId}"&${query}`).then(products => {
        setProducts(products);
      });
    });
  }

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (category || subcategory) {
      updateProducts();
    } else {
      getProductsList().then(products => {
        setProducts(products);
      });
    }
    if (query) {
      if (category || subcategory) {
        updateProducts();
      } else {
        getFiltered(`?${query}`).then(products => {
          setProducts(products);
        });
      }
    }
  }, [category, subcategory, query]);

  return (
    <>
      <BannerPageName {...{ children: 'OUR PRODUCTS' }}></BannerPageName>
      <NavigationView
        nav={{ category, subcategory }}
        changeQuery={changeQuery}
        updateSearchedProducts={updateSearchedProducts}
      />
      <OurProductsCards products={products} />
    </>
  );
}

export default ProductsPage;
