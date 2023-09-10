import OurProductsCards from './cardsSection/OurProductsCards';
import { NavigationView } from './navigation/navigationView';
import { useEffect, useState } from 'react';
import BannerPageName from '../../components/bannerPageName';
import { useParams } from 'react-router-dom';
import { getCategoryId } from '../../services/category.service';
import { getFiltered, getProductsList } from '../../services/product.service';
import { Product } from '../../lib/interfaces';
import scrollToTop from '../../lib/utils/scrollToTop';
import { CardsPerPage } from '../../lib/enums';

const items: Product[] = await getProductsList(CardsPerPage.catalog);

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(items);
  const { category, subcategory } = useParams();
  const [query, setQuery] = useState('');

  function updateSearchedProducts(products: Product[]) {
    setProducts(products);
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
      getProductsList(CardsPerPage.catalog).then(products => {
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
      <OurProductsCards {...{products}} />
    </>
  );
}

export default ProductsPage;
