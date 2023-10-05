import CategoryDropdownArrow from '@icons/categoryDropdownArrow';
import { parentCategoryProps } from '@interfaces';
import { useNavigate } from 'react-router-dom';

export default function ParentCategory({
  onSelectCategory,
  category,
  option,
  setOpenedCategory,
  handleCategoryClick,
  openedCategory
}: parentCategoryProps) {
  const navigate = useNavigate();
  return (
    <div
      className={'flex justify-between px-4 py-2'}
      onClick={() => {
        onSelectCategory(option);
        navigate(`/our-products/${option.toLocaleLowerCase()}`);
      }}
    >
      <div className={category == option.toLocaleLowerCase() ? 'text-accentColor' : ''}>{option}</div>
      <div
        onClick={event => {
          event.stopPropagation();
          handleCategoryClick();
        }}
      >
        {option === 'Self-care' || option === 'Decor' ? (
          <CategoryDropdownArrow
            option={option}
            openedCategory={openedCategory}
            setOpenedCategory={setOpenedCategory}
          />
        ) : null}
      </div>
    </div>
  );
}
