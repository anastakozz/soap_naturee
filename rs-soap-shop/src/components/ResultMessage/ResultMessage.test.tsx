import { render } from '@testing-library/react'
import { ResultProps } from '../../lib/interfaces'
import ResultMessage from './ResultMessage'

const propsDataTrue: ResultProps = {
  isSuccess: false,
  message: '',
  isVisible: true
}

it('renders a message in DOM', () => {
  const { getByTestId } = render(<ResultMessage {...propsDataTrue} />)
  expect(getByTestId('reg-result-message')).toBeInTheDocument()
})

it('renders an error message in DOM', () => {
  const { getByTestId } = render(<ResultMessage {...propsDataTrue} />)
  expect(getByTestId('reg-error-message')).toBeInTheDocument()
})
