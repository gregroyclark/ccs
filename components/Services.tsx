import Image from 'next/image';
import React from 'react';

import coach from '../public/services/coach.png';
import design from '../public/services/design.png';
import development from '../public/services/development.png';
import event from '../public/services/event.png';
import marketing from '../public/services/marketing.png';
import search from '../public/services/search.png';
import social from '../public/services/social.png';
import writing from '../public/services/writing.png';

const Services = () => {
  return (
    <div id='services' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center sm:h-full'>
        <div className='mt-24 md:mt-16'>
          <p className='text-xl tracking-widest uppercase'>Services</p>
          <h2></h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-4'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={design}
                    alt={'Web Design'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Design</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={development}
                    alt={'Web Design'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Development</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={search}
                    alt={'Search Engine Optimization'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>SEO</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={writing}
                    alt={'Content Writing'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Content Writing</h3>
                </div>
              </div>
            </div>
{/*             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={marketing}
                    alt={'Marketing'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Marketing</h3>
                </div>
              </div>
            </div> */}
{/*             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={event}
                    alt={'Event Coordination'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Events</h3>
                </div>
              </div>
            </div> */}
{/*             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={social}
                    alt={'Social Media'}
                    width={64}
                    height={64}
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Social Media</h3>
                </div>
              </div>
            </div> */}
{/*             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={coach} alt={'Coaching'} width={64} height={64} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Coaching</h3>
                  <p>Coming soon!</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
