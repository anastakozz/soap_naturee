import React from 'react'
import NewCollectionSection from './newCollectionSection'
import CheckoutSection from './checkoutSection'
import SaleSection from './saleSection'
import Promocode from './Promocode'
import RandomCardsSection from './randomCardsSection/RandomCardsSection'

function HomePage() {
  return (
    <>
      <NewCollectionSection />
      <CheckoutSection />
      <SaleSection />
      <Promocode />
      <RandomCardsSection />
    </>
  )
}

export default HomePage
