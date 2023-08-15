import { Link } from 'react-router-dom'
import EmptyButton from '../../../components/buttons/emptyButton'

export default function RandomCardsSection() {
  return (
    <div className='bg-primaryColor dark:bg-grayMColor h-auto p-sm text-center'>
      <h3 className='text-basicColor dark:text-secondaryColor text-h3 text-center font-bold'>You may like it</h3>
      <div>Random Cards</div>
      <Link to={'./our-products'}>
        <EmptyButton>Show More</EmptyButton>
      </Link>
    </div>
  )
}
