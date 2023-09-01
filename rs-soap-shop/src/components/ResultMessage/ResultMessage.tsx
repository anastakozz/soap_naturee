import { ResultProps } from '../../lib/interfaces';
import SuccessMessage from './successMessage.tsx';
import ErrorMessage from './errorMessage.tsx';

export default function ResultMessage({ isSuccess, isVisible, message }: ResultProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div data-testid='reg-result-message'>{isSuccess ? <SuccessMessage /> : <ErrorMessage message={message} />}</div>
  );
}
