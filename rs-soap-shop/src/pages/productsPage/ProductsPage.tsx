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
  let isLoading = false;
  let currentPage = 1;

  function updateSearchedProducts(products: Product[]) {
    setProducts(products);
  }

  function changeQuery(options: string): void {
    setQuery(options);
    console.log('global query updated');
  }

  function updateProducts() {
    currentPage = 1;
    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(`?filter=categories.id:"${categoryId}"&${query}`, currentPage).then(products => {
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
      // currentPage = 0;
      // loadNextPage();
      }

    if (query) {
      if (category || subcategory) {
        updateProducts();
      } else {
        getFiltered(`?${query}`, currentPage).then(products => {
          setProducts(products);
        });
      }
    }
  }, [category, subcategory, query]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        console.log(category, subcategory);
        if (!(category || subcategory)) {
          loadNextPage();
        } else loadNextPageWithCategory();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, category, subcategory]);

  function loadNextPage() {
    console.log('loadAllProducts');
    if (isLoading) return;
    isLoading = true;
    currentPage += 1;

    getProductsList(true, currentPage).then((nextPageProducts) => {
      isLoading = false;
      if (nextPageProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...nextPageProducts]);
      }
    });
  }

  function loadNextPageWithCategory() {
    console.log('loadCategoryProducts');
    if (isLoading) return;
    isLoading = true;
    currentPage += 1;

    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(`?filter=categories.id:"${categoryId}"&${query}`, currentPage).then(nextPageProducts => {
        isLoading = false;
        if (nextPageProducts.length > 0) {
          setProducts((prevProducts) => [...prevProducts, ...nextPageProducts]);
        }
      });
    });
  }

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
