import React, { useEffect } from 'react';
import scrollToTop from '../../lib/utils/scrollToTop';
import { AboutUsType } from '../../lib/types';
import BannerPageName from '../../components/bannerPageName';
import MarkIcon from '../../icons/markIcon';

const ABOUT_US: AboutUsType[] = [
  {
    fullName: 'Kozlova Anastasiya',
    role: 'Team Lead software engineer',
    bio: 'Having architectural education and long experience in digital fabrication I started coding from writing JS scripts for Adobe Illustrator and fell in love with the process. I decided to change a career and dove into JS with help of Rolling Scopes School. I believe, that every specialist unique combination of skills and experience may shine bright in its place, and hope to find my place in IT sphere',
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
    bio: 'First and foremost I need to say that I have not spatial education in the IT field, but I am passing the best courses ever right now. I graduated from The Brest Technical University as a specialist in logistics. Also got a Master degree in World Economics. And I was working as a logistician for 3 years. Now my goal is to become a cool front-end developer and get a good job. My strengths include responsibility, perseverance, purposefulness and efficiency. At the moment I have not work experience in the IT sphere, but I really want to get it.',
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
      'implemented a change of categories and subcategories of goods'
    ],
    github: 'https://github.com/SlaVR7'
  }
];

function AboutPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className='bg-secondaryColor dark:bg-grayMColor'>
        <BannerPageName>ABOUT US</BannerPageName>
        <div className='py-sm px-sm max-w-[1440px] mx-auto lg:px-big'>
          <div>
            <div className='border-b-2 border-accentColor dark:border-basicColor p-2 flex justify-center md:justify-between items-center mb-4'>
              <h3 className='text-h3 text-accentColor dark:text-basicColor font-bold text-center md:text-start'>
                Team Members:
              </h3>
            </div>
            {ABOUT_US.map(person => (
              <div
                key={person.fullName}
                className='flex flex-col md:flex-row justify-between items-center w-full mb-4 p-4 m4 border-2 border-dotted border-accentColor dark:border-basicColor rounded-normal w-full relative mb-4'
              >
                <div className='flex flex-col justify-center items-center w-full md:w-[20%] mr-6'>
                  <div className='flex justify-center items-center rounded-full w-[150px] h-[150px] overflow-hidden border-4 border-accentColor dark:border-basicColor'>
                    <img src={person.img} alt='photo' />
                  </div>
                  <h3 className='text-h3 font-bold text-accentColor dark:text-basicColor mb-2 text-center'>
                    {person.fullName}
                  </h3>
                  <p className='mb-1 text-grayLColor text-center'>{person.role}</p>
                  <a
                    className='mb-1 text-graySColor hover:text-grayMColor dark:hover:text-grayLColor transition'
                    href={person.github}
                  >
                    GitHub link
                  </a>
                </div>
                <div className='flex flex-col w-[80%]'>
                  <h4 className='text-h4 font-bold text-accentColor dark:text-basicColor mb-2 text-center md:text-start'>
                    About me
                  </h4>
                  <p className='text-justify'>{person.bio}</p>
                  <h4 className='text-h4 font-bold text-accentColor dark:text-basicColor mb-2 text-center md:text-start'>
                    My contributions
                  </h4>
                  <div>
                    {person.contributions.map(el => (
                      <div key={el} className='flex items-center'>
                        <div className='w-[20px] mr-2'>
                          <MarkIcon />
                        </div>
                        <p className='text-justify'>{el}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className='border-b-2 border-accentColor dark:border-basicColor p-2 flex justify-center md:justify-between items-center mb-4'>
              <h3 className='text-h3 text-accentColor dark:text-basicColor font-bold text-center md:text-start'>
                Collaboration:
              </h3>
            </div>
            <p className='text-justify'>
              In our recent study task to implement an e-shop for handmade candles and soaps, our team of front-end
              developers effectively collaborated to achieve a successful outcome. To begin, we assigned clear roles and
              responsibilities within our team. Each team member had a specific area of focus. This division of labor
              ensured that every aspect of the e-shop received the attention it needed. Effective communication was key
              throughout the study task. We held regular meetings to discuss our progress, share ideas, and address any
              challenges that arose. This open and collaborative approach allowed us to make improvements and
              adjustments as needed. Our front-end developers worked closely with our designers to bring the e-shop to
              life. They skillfully translated the design concepts into a functional website that not only looked great
              but also provided an easy and enjoyable user experience. Our technical expertise played a crucial role in
              implementing essential features, including product catalog organization, shopping cart functionality, and
              user account management. We applied best practices in front-end development to ensure the website
              performance and compatibility. We also conducted user testing and gathered feedback from classmates to
              refine our e-shop. This iterative process allowed us to make user-centered improvements and ensure that
              the website met the needs of our target audience. Throughout the study task, our team remained adaptable.
              We were open to making changes based on feedback and addressing unexpected technical challenges, ensuring
              that we stayed on track to meet our study objectives. In the end, our collaborative efforts resulted in a
              well-executed e-shop for handmade candles and soaps, which met the study requirements. The effective
              collaboration, technical skills, and commitment of our front-end development team were instrumental in
              achieving this success. This experience highlights the importance of teamwork and collaboration in
              accomplishing study tasks and real-world projects alike
            </p>
          </div>
          <div>
            <div className='border-b-2 border-accentColor dark:border-basicColor p-2 flex justify-center md:justify-between items-center mb-4'>
              <h3 className='text-h3 text-accentColor dark:text-basicColor font-bold text-center md:text-start'>
                Gratitude:
              </h3>
            </div>
            <div className='flex justify-center items-center p-4'>
              <p className='mr-4'>Thank you for our new usefull skills</p>
              <a href='https://rs.school/index.html' target='blanc'>
                <img
                  src='/images/RSS-logo-light.png'
                  alt='RSS logo'
                  className='block dark:hidden w-[200px] hover:scale-110 transition'
                />
                <img
                  src='/images/RSS-logo-dark.png'
                  alt='RSS logo'
                  className='hidden dark:block w-[200px] hover:scale-110 transition'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
