import { ResultProps } from '../../lib/interfaces'
import SuccessMessage from './successMessage.tsx'
import ErrorMessage from './errorMessage.tsx'

export default function ResultMessage(result: ResultProps) {
  if (result.isVisible) {
    return (
      <div data-testid='reg-result-message'>
        {result.isSuccess ? <SuccessMessage /> : <ErrorMessage message={result.message} />}
      </div>
    )
  }
}
