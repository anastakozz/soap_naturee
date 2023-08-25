import { Link } from 'react-router-dom'
import EmptyButton from '../../../components/buttons/emptyButton'
import Card from '../../../components/card'
import { Product, ProductCardProps } from '../../../lib/interfaces'
import { getProductsList } from '../../../services/product.service'
import toCardAdapter from '../../../lib/utils/productDataAdapters.ts/toCardAdapter'
import { ReactNode } from 'react'

async function getCardsData(): Promise<ProductCardProps[]> {
  const data: Product[] = await getProductsList()
  if (data) {
    const shuffledData = shuffleProducts(data).slice(0, 6)
    const dataAdapted = shuffledData.map((product: Product) => toCardAdapter(product))
    return dataAdapted
  }
}

function shuffleProducts(data: Product[]): Product[] {
  const random = data.map(Math.random)
  data.sort((a, b) => random[data.indexOf(a)] - random[data.indexOf(b)])
  return data
}

const items = await getCardsData()

export default function RandomCardsSection() {
  return (
    <>
      {items ? (
        <div className='bg-primaryColor dark:bg-grayMColor h-auto p-sm text-center px-big flex flex-col items-center'>
          <h3 className='text-basicColor dark:text-secondaryColor text-h3 text-center font-bold'>You may like it</h3>
          <div className='flex flex-wrap justify-around mt-sm max-w-[1245px] pb-sm '>
            {items.map((item, index): ReactNode => {
              return (
                <div key={index} className='mb-sm mx-4'>
                  <Card {...item} />
                </div>
              )
            })}
          </div>
          <Link to={'./our-products'}>
            <EmptyButton>Show More</EmptyButton>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
