import { classesActive, classesDisabled } from '../../../lib/constants';
import { CardMessage } from '../../../lib/enums';

interface AddButtonProps {
  isInCart: boolean;
  isSending: boolean;
  onClick: () => void;
}

export default function AddButton({ isInCart, isSending, onClick }: AddButtonProps) {
  if (isInCart && !isSending) {
    return (
      <button className={classesDisabled} disabled>
        {CardMessage.inCart}
      </button>
    );
  } else if (isSending) {
    return (
      <button className={classesDisabled} disabled>
        {CardMessage.inProgress}
      </button>
    );
  } else {
    return <button className={classesActive} onClick={onClick} {...{ children: CardMessage.toCart }}></button>;
  }
}
