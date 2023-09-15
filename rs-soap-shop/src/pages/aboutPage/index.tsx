import React, { useEffect } from 'react';
import scrollToTop from '../../lib/utils/scrollToTop';
import BannerPageName from '../../components/bannerPageName';
import MarkIcon from '../../icons/markIcon';
import classNames from 'classnames';
import { ABOUT_US } from '../../lib/constants';

export function AboutPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className='bg-secondaryColor dark:bg-grayMColor'>
        <BannerPageName>ABOUT US</BannerPageName>
        <div className={classNames('py-sm px-sm max-w-[1440px] mx-auto', 'lg:px-big')}>
          <div>
            <div
              className={classNames(
                'border-b-2 border-accentColor dark:border-basicColor',
                'p-2 mb-4',
                'flex justify-center md:justify-between items-centers'
              )}
            >
              <h3
                className={classNames(
                  'text-h3 text-accentColor font-bold dark:text-basicColor',
                  'text-center md:text-start'
                )}
              >
                Team Members:
              </h3>
            </div>
            {ABOUT_US.map(person => (
              <div
                key={person.fullName}
                className={classNames(
                  'flex flex-col md:flex-row justify-between items-center',
                  'w-full mb-4 p-4',
                  'border-2 border-dotted border-accentColor dark:border-basicColor',
                  'rounded-normal relative'
                )}
              >
                <div className={classNames('flex flex-col justify-center items-center', 'w-full md:w-[20%] mr-6')}>
                  <div
                    className={classNames(
                      'flex justify-center items-center',
                      'w-[150px] h-[150px] overflow-hidden',
                      'rounded-full border-4 border-accentColor dark:border-basicColor'
                    )}
                  >
                    <img src={person.img} alt='photo' />
                  </div>
                  <h3
                    className={classNames(
                      'text-h3 font-bold text-accentColor dark:text-basicColor',
                      'mb-2 text-center'
                    )}
                  >
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
                  <h4
                    className={classNames(
                      'text-h4 font-bold text-accentColor dark:text-basicColor',
                      'mb-2',
                      'text-center md:text-start'
                    )}
                  >
                    About me
                  </h4>
                  <p className='text-justify'>{person.bio}</p>
                  <h4
                    className={classNames(
                      'text-h4 font-bold text-accentColor dark:text-basicColor',
                      'mb-2',
                      'text-center md:text-start'
                    )}
                  >
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
            <div
              className={classNames(
                'border-b-2 border-accentColor dark:border-basicColor',
                'p-2 mb-4',
                'flex justify-center md:justify-between items-center '
              )}
            >
              <h3
                className={classNames(
                  'text-h3 text-accentColor dark:text-basicColor font-bold',
                  'text-center md:text-start'
                )}
              >
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
            <div
              className={classNames(
                'border-b-2 border-accentColor dark:border-basicColor',
                'p-2 mb-4',
                'flex justify-center md:justify-between items-center '
              )}
            >
              <h3
                className={classNames(
                  'text-h3 text-accentColor dark:text-basicColor font-bold',
                  'text-center md:text-start'
                )}
              >
                Gratitude:
              </h3>
            </div>
            <div className={classNames('flex justify-center items-center', 'p-4')}>
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
