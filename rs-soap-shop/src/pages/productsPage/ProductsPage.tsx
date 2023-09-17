import OurProductsCards from './cardsSection/OurProductsCards';
import { NavigationView } from './navigation/navigationView';
import { useEffect, useState } from 'react';
import BannerPageName from '../../components/bannerPageName';
import { useParams } from 'react-router-dom';
import { getCategoryId } from '../../services/category.service';
import { getFiltered } from '../../services/product.service';
import { Product } from '../../lib/interfaces';
import scrollToTop from '../../lib/utils/scrollToTop';
import LoadingSpinner from '../../components/loading/loading';

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>();
  const { category, subcategory } = useParams();
  const [query, setQuery] = useState(sessionStorage.getItem('query'));
  const [isLoadingNewProducts, setIsLoadingNewProducts] = useState(false);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [isUpdatingProducts, setIsUpdatingProducts] = useState(false);
  if (!sessionStorage.getItem('isLoading')) sessionStorage.setItem('isLoading', 'false');
  if (!sessionStorage.getItem('currentPage')) sessionStorage.setItem('currentPage', '1');

  useEffect(() => {
    return () => {
      sessionStorage.setItem('query', '');
      sessionStorage.setItem('currentPage', '');
      sessionStorage.setItem('isLoading', 'false');
    };
  }, []);

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('query', '');
    sessionStorage.setItem('currentPage', '');
    sessionStorage.setItem('isLoading', 'false');
  });

  function updateSearchedProducts(products: Product[]) {
    setProducts(products);
  }

  function changeQuery(options: string): void {
    setQuery(options);
    sessionStorage.setItem('query', options);
  }

  function updateProductsInCategories() {
    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(`?filter=categories.id:"${categoryId}"&${query}`, 1).then(products => {
        setProducts(products);
        setIsUpdatingProducts(false);
        sessionStorage.setItem('isLoading', 'false');
      });
    });
  }

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('isLoading', 'true');
    sessionStorage.setItem('currentPage', '1');

    setIsUpdatingProducts(true);
    setIsEndOfPage(false);
    if (category || subcategory) {
      updateProductsInCategories();
    } else {
      getFiltered(`?${sessionStorage.getItem('query')}`, 1).then(items => {
        setProducts(items);
        setIsUpdatingProducts(false);
        sessionStorage.setItem('isLoading', 'false');
      });
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
  }, [category, subcategory]);

  function loadNextPage() {
    if (sessionStorage.getItem('isLoading') === 'true') return;
    sessionStorage.setItem('isLoading', 'true');
    setIsLoadingNewProducts(true);
    sessionStorage.setItem('currentPage', String(+sessionStorage.getItem('currentPage') + 1));

    getFiltered(`?${sessionStorage.getItem('query')}`, +sessionStorage.getItem('currentPage'))
      .then(nextPageProducts => {
        console.log('page main ' + sessionStorage.getItem('currentPage'));
        sessionStorage.setItem('isLoading', 'false');
        setIsLoadingNewProducts(false);
        if (nextPageProducts.length > 0) {
          setProducts(prevProducts => [...prevProducts, ...nextPageProducts]);
        } else setIsEndOfPage(true);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function loadNextPageWithCategory() {
    if (sessionStorage.getItem('isLoading') === 'true') return;
    sessionStorage.setItem('isLoading', 'true');
    setIsLoadingNewProducts(true);
    sessionStorage.setItem('currentPage', String(+sessionStorage.getItem('currentPage') + 1));
    console.log('должно смениться на 2', sessionStorage.getItem('currentPage'));
    getCategoryId(
      subcategory
        ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
        : category.charAt(0).toUpperCase() + category.slice(1)
    ).then(categoryId => {
      getFiltered(
        `?filter=categories.id:"${categoryId}"&${sessionStorage.getItem('query')}`,
        +sessionStorage.getItem('currentPage')
      )
        .then(nextPageProducts => {
          sessionStorage.setItem('isLoading', 'false');
          setIsLoadingNewProducts(false);
          if (nextPageProducts.length > 0) {
            setProducts(prevProducts => [...prevProducts, ...nextPageProducts]);
          } else setIsEndOfPage(true);
        })
        .catch(error => {
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
      {!isUpdatingProducts ? <OurProductsCards {...{ products }} /> : <LoadingSpinner marginTop={'60'} />}
      {isLoadingNewProducts && !isEndOfPage && <LoadingSpinner />}
    </>
  );
}

export default ProductsPage;
