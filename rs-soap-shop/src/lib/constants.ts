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
    bio: 'Having architectural education and long experience in digital fabrication I started coding from writing JS scripts for Adobe Illustrator and fell in love with the process. I decided to change a career and dove into JS with help of Rolling Scopes School. I believe, that every specialist unique combination of skills and experience may shine bright in its place, and hope to find my place in IT sphere',
    img: '/images/anastasia_photo.jpg',
    contributions: [
      'organized team work processes (repository, task tracking, styleguide, team wiki)',
      'implemented home page, detailed product page, product Card and took part in other pages',
      'integrated registration, token handling, product parsing with CommerceTools',
      'battled with React testing library'
    ],
    github: 'https://github.com/anastakozz'
  },
  {
    fullName: 'Kuzich Yulia',
    role: 'Software engineer',
    bio: 'First and foremost I need to say that I have not spatial education in the IT field, but I am passing the best courses ever right now. I graduated from The Brest Technical University as a specialist in logistics. Also got a Master degree in World Economics. And I was working as a logistician for 3 years. Now my goal is to become a cool front-end developer and get a good job. My strengths include responsibility, perseverance, purposefulness and efficiency. At the moment I have no work experience in the IT sphere, but I really want to get it.',
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
    bio: 'My previous place of work was a Mining and processing plant, where I worked as an electrician on duty for the last 7 years. I received a higher education in the specialty "Automation of technological processes and production". For many reasons, I decided to change my job and chose the IT path. Since I already had experience in website administration and promotion, I liked Frontend development the most. I like it and I hope to become a good specialist.',
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
