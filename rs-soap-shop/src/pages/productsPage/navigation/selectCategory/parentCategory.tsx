import CategoryDropdownArrow from '../../../../icons/categoryDropdownArrow';
import { parentCategoryProps } from '../../../../lib/interfaces';
import { useNavigate } from 'react-router-dom';

export default function ParentCategory({
  onSelectCategory,
  category,
  option,
  setIsDropdownOpened,
  isDropdownOpened,
  setOpenedCategory
}: parentCategoryProps) {
  const navigate = useNavigate();

  return (
    <div className={'flex justify-between'}>
      <div
        onClick={() => {
          onSelectCategory(option);
          navigate(`/our-products/${option.toLocaleLowerCase()}`);
        }}
        className={category == option.toLocaleLowerCase() ? 'text-accentColor' : ''}
      >
        {option}
      </div>
      <div
        onClick={event => {
          event.stopPropagation();
          setIsDropdownOpened(!isDropdownOpened);
          setOpenedCategory(option);
        }}
      >
        {option === 'Self-care' || option === 'Decor' ? (
          <CategoryDropdownArrow isDropdownOpened={isDropdownOpened} option={option} />
        ) : null}
      </div>
    </div>
  );
}
