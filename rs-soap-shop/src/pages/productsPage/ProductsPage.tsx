import OurProductsCards from './cardsSection/OurProductsCards';
import { NavigationView } from './navigation/navigationView';
import { useEffect, useState } from 'react';
import BannerPageName from '../../components/bannerPageName';
import { useParams } from 'react-router-dom';
import { getCategoryId } from '../../services/category.service';
import { getFiltered, getProductsList } from '../../services/product.service';
import { Product } from '../../lib/interfaces';
import scrollToTop from '../../lib/utils/scrollToTop';
import LoadingSpinner from '../../components/loading/loading';

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>();
  const { category, subcategory } = useParams();
  const [query, setQuery] = useState('');
  const [isLoadingNewProducts, setIsLoadingNewProducts] = useState(false);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [isUpdatingProducts, setIsUpdatingProducts] = useState(false);
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
    try {
      if (!category && !subcategory) {
        getProductsList(true, currentPage).then((pageProducts) => {
          isLoading = false;
          setIsLoadingNewProducts(false)
          if (pageProducts.length > 0) {
            setProducts(pageProducts);
          }
          setIsUpdatingProducts(false);
        });
        return;
      }
    } catch {
      return;
    }

    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(`?filter=categories.id:"${categoryId}"&${query}`, currentPage).then(products => {
        setProducts(products);
        setIsUpdatingProducts(false);
      });
    });
  }

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    setIsUpdatingProducts(true);
    setIsEndOfPage(false);
    updateProducts()
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
    if (isLoading) return;
    isLoading = true;
    setIsLoadingNewProducts(true);

    currentPage += 1;

    getProductsList(true, currentPage).then((nextPageProducts) => {
      isLoading = false;
      setIsLoadingNewProducts(false);
      if (nextPageProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...nextPageProducts]);
      } else setIsEndOfPage(true)
    }).catch(error => {
        console.error(error);
      });
  }

  function loadNextPageWithCategory() {
    if (isLoading) return;
    isLoading = true;
    setIsLoadingNewProducts(true);
    currentPage += 1;

    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(`?filter=categories.id:"${categoryId}"&${query}`, currentPage).then(nextPageProducts => {
        isLoading = false;
        setIsLoadingNewProducts(false);
        if (nextPageProducts.length > 0) {
          setProducts((prevProducts) => [...prevProducts, ...nextPageProducts]);
        } else setIsEndOfPage(true);
      }).catch(error => {
          console.error(error);
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
      {!isUpdatingProducts ? <OurProductsCards products={products}/> : <LoadingSpinner marginTop={0}/>}
      {isLoadingNewProducts && !isEndOfPage && <LoadingSpinner />}
    </>
  );
}

export default ProductsPage;
