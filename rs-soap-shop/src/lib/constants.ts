import classNames from 'classnames';
import { AboutUsType } from './types';

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

export const ABOUT_US: AboutUsType[] = [
  {
    fullName: 'Kozlova Anastasiya',
    role: 'Team Lead software engineer',
    bio: 'Having an architectural education and extensive experience in digital fabrication, I started coding by writing JavaScript (JS) scripts for Adobe Illustrator and fell in love with the process. I decided to change my career and immersed myself in JS with the help of Rolling Scopes School. I believe that the unique combination of skills and experience possessed by every specialist can shine brightly in its own place, and I hope to find my place in the IT sphere.',
    img: '/images/anastasia_photo.jpg',
    contributions: [
      'organized team work processes (repository, task tracking, styleguide, team wiki)',
      'implemented home page, detailed product page, took part in other pages',
      'integrated registration, token handling, product parsing with CommerceTools',
      'battled with React testing library'
    ],
    github: 'https://github.com/anastakozz'
  },
  {
    fullName: 'Kuzich Yulia',
    role: 'Software engineer',
    bio: 'First and foremost, I need to say that I do not have a formal education in the IT field, but I am currently taking some of the best courses available. I graduated from Brest Technical University as a specialist in logistics and also earned a Master degree in World Economics. I worked as a logistician for three years. Now, my goal is to become a skilled front-end developer and secure a good job. My strengths include responsibility, perseverance, determination, and efficiency. At the moment, I do not have any work experience in the IT sphere, but I am very eager to gain it.',
    img: '/images/yulia_photo.jpg',
    contributions: [
      'wrote functional structure of our project (like BA)',
      'created logo and found prototype design for site',
      'created base variables for Tailwind',
      'implemented routing',
      'implemented layout of header and footer',
      'realized Login, Profile, Cart and About Us pages implementation',
      'implemented breadcrumb navigation for Catalog Page'
    ],
    github: 'https://github.com/yulyakuzich'
  },
  {
    fullName: 'Ryshkov Vyacheslav',
    role: 'Software engineer',
    bio: 'My previous place of work was a mining and processing plant, where I worked as an electrician on duty for the last seven years. I have a higher education in the specialty of "Automation of Technological Processes and Production." For various reasons, I decided to change my job and chose the IT path. Since I already had experience in website administration and promotion, I found Frontend development to be the most appealing. I enjoy it, and I hope to become a skilled specialist.',
    img: '/images/slava_photo.jpg',
    contributions: [
      'made a basic configuration of Commercetools',
      'created a basic project template in figma',
      'made up the login, registration and our products pages',
      'add inputs validation in login and registration pages',
      'created information about all categories and products in Commercetools',
      'implemented sorting products',
      'implemented products search',
      'implemented a change of categories and subcategories of goods',
      'implemented applying promo code and displaying updated prices'
    ],
    github: 'https://github.com/SlaVR7'
  }
];
