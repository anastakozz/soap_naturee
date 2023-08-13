import CategoryCarousel from './CategoryCarousel'

export default function CheckoutSection() {
  return (
    <div className='bg-secondaryColor dark:bg-grayLColor h-auto p-sm'>
      <h3 className='text-basicColor dark:text-secondaryColor text-h3 text-center font-bold'>
        Check out our product categories
      </h3>
      <CategoryCarousel />
    </div>
  )
}
