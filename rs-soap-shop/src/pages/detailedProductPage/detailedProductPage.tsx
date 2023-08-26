import { useParams } from 'react-router-dom'
import { getProductByKey } from '../../services/product.service'
import React, { useEffect, useState } from 'react'
import { Product } from '../../lib/interfaces'

function DetailedProductPage() {
  const [ProductData, initProductData] = useState<Product | null>(null)
  const { key } = useParams()
  console.log(key)

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProductByKey(key)
      initProductData(product)
      console.log(product)
    }
    fetchData().catch(e => {
      console.log(e)
    })
  }, [])

  return <>{ProductData ? <p>{ProductData.description['en']}</p> : <p>Loading...</p>}</>
}

export default DetailedProductPage;
