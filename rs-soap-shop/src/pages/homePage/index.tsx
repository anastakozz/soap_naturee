import React, { useEffect } from 'react';
import NewCollectionSection from './newCollectionSection';
import CheckoutSection from './checkoutSection';
import SaleSection from './saleSection';
import Promocode from './Promocode';
import RandomCardsSection from './randomCardsSection/RandomCardsSection';
import scrollToTop from '../../lib/utils/scrollToTop';

function HomePage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div data-testid='home-page'>
      <NewCollectionSection />
      <CheckoutSection />
      <SaleSection />
      <Promocode />
      <RandomCardsSection />
    </div>
  );
}

export default HomePage;
