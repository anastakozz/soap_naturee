import { RemoveMessage } from '../../../lib/enums';

interface RemoveButtonProps {
  isInCart: boolean;
  isSending: boolean;
  onClick: () => void;
}

export default function RemoveButton({ isInCart, isSending, onClick }: RemoveButtonProps) {
  if (isInCart && !isSending) {
    return <button onClick={onClick}>{RemoveMessage.inCart}</button>;
  } else if (isSending) {
    return <button disabled>{RemoveMessage.inProgress}</button>;
  } else {
    return <button disabled>{RemoveMessage.inCart}</button>;
  }
}
