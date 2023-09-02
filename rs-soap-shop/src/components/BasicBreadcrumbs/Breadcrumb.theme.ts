export const BreadcrumbTheme = {
    breadcrumbs: {
      defaultProps: {
        className: '',
        fullWidth: false,
        separator: '/'
      },
      styles: {
        base: {
          root: {
            initial: {
              width: 'w-max'
            },
            fullWidth: { display: 'block', width: 'w-full' }
          },
          list: {
            display: 'flex',
            flexWrap: 'flex-wrap',
            alignItems: 'items-center',
            width: 'w-full',
            bg: 'bg-white',
            bgOpacity: 'bg-opacity-50',
            py: 'py-2',
            px: 'px-4',
            borderRadius: 'rounded-md'
          },
          item: {
            initial: {
              display: 'flex',
              alignItems: 'items-center',
              color: 'text-grayLColor',
              fontSmoothing: 'antialiased',
              fontFamily: 'font-sans',
              fontSize: 'text-sm',
              fontWeight: 'font-normal',
              lineHeight: 'leading-normal',
              cursor: 'cursor-pointer',
              transition: 'transition-colors duration-300',
              hover: 'hover:text-primaryColor'
            },
            disabled: {
              pointerEvents: 'pointer-events-none'
            }
          },
          separator: {
            color: 'text-grayLColor',
            fontSize: 'text-sm',
            fontSmoothing: 'antialiased',
            fontFamily: 'font-sans',
            fontWeight: 'font-normal',
            lineHeight: 'leading-normal',
            px: 'mx-2',
            pointerEvents: 'pointer-events-none',
            userSelcet: 'select-none'
          }
        }
      }
    }
  };