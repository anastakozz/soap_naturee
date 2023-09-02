import React, { useEffect } from 'react';
import scrollToTop from '../../lib/utils/scrollToTop';

function CartPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return <>CartPage works!</>;
}

export default CartPage;
