import classNames from 'classnames';

export const authUrl = process.env.REACT_APP_CTP_AUTH_URL;
export const apiUrl = process.env.REACT_APP_CTP_API_URL;
export const projectKey = process.env.REACT_APP_CTP_PROJECT_KEY;
export const clientId = process.env.REACT_APP_CTP_CLIENT_ID;
export const secret = process.env.REACT_APP_CTP_CLIENT_SECRET;
export const scope = process.env.REACT_APP_CTP_SCOPES;

export const iconClassesNormal =
  'cursor-pointer p-2 rounded-normal w-[37px] h-[37px] flex justify-senter items-center bg-grayLColor/30 hover:bg-grayLColor';
export const iconClassesActive =
  'cursor-pointer p-2 rounded-normal w-[37px] h-[37px] flex justify-senter items-center bg-grayLColor/90 activeSorting hover:bg-grayLColor';

export const classesActive = classNames(
  'transition',
  'text-accentColor dark:text-secondaryColor hover:text-secondaryColor dark:hover:text-grayLColor font-bold',
  'border-2 border-accentColor dark:border-secondaryColor',
  'bg-none hover:bg-accentColor dark:hover:bg-secondaryColor',
  'rounded-normal h-[74px] px-12 active:scale-95 w-[250px] whitespace-nowrap'
);

export const classesDisabled = classNames(
  'transition',
  'text-graySColor  font-bold',
  'border-2 border-graySColor ',
  'bg-none',
  'rounded-normal h-[74px] px-12 w-[250px] whitespace-nowrap'
);
