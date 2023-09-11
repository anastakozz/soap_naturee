import { RemoveMessage } from '../../../lib/enums';
import { classesActive, classesDisabled } from '../../../lib/constants';
interface RemoveButtonProps {
  isInCart: boolean;
  isSending: boolean;
  onClick: () => void;
}

export default function RemoveButton({ isInCart, isSending, onClick }: RemoveButtonProps) {
  if (isInCart && !isSending) {
    return <button className={classesActive} onClick={onClick}>{RemoveMessage.inCart}</button>;
  } else if (isSending) {
    return <button className={classesDisabled} disabled>{RemoveMessage.inProgress}</button>;
  } else {
    return <button className={classesDisabled} disabled>{RemoveMessage.inCart}</button>;
  }
}
