import { render } from '@testing-library/react'
import { Banner } from './Banner'
import { BannerProps } from '../../lib/interfaces'
import { BrowserRouter } from 'react-router-dom'

const propsData: BannerProps = {
  p: 'A',
  h2: 'B',
  h4: 'C',
  buttonText: 'text',
  linkAdress: 'adress'
}

it('renders a banner in DOM', () => {
  const component = render(
    <BrowserRouter>
      <Banner {...propsData} />
    </BrowserRouter>
  )
  expect(component.getByTestId('banner')).toBeInTheDocument()
})


