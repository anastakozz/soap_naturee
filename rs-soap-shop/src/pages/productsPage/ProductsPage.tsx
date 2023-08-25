import Card from '../../components/card'
import EmptyButton from '../../components/buttons/emptyButton'
import { getProductsList } from '../../services/product.service'
import toCardAdapter from '../../lib/utils/productDataAdapters.ts/toCardAdapter'
import { ProductCardProps } from '../../lib/interfaces'
import { useState } from 'react'

function ProductsPage() {
  const [ProductsData, setProductsData] = useState <ProductCardProps>({  label: 'Label',
  description: 'Description',
  imgSrc: '/images/candle-footage.jpg',
  link: '/',
  price: '999',
  isOnSale: true,
  newPrice: 1000})

  async function drawCardWithData(): Promise<ProductCardProps> {
    const data = await getProductsList()
    if(data){
      const dataAdapted = toCardAdapter(data[1]);
      setProductsData(dataAdapted)
    }
    console.log(data)
    return data
  }

  return (
    <>
      <EmptyButton {...{ children: 'get data', onClick: drawCardWithData }}></EmptyButton>
      <Card {...ProductsData}></Card>
    </>
  )
}

export default ProductsPage
