import Image from 'next/image';
import React from 'react';

import field from '../public/projects/field.jpg';
import noise from '../public/projects/noise.png';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Portfolio</p>
        <h2 className='py-4'>Some of my finest work</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#004ab1] to-[#5c89c8]'>
            <Image
              src={field}
              alt='Blackberry field with two rainbows'
              className='rounded-xl group-hover:opacity-10'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>
                Boston Mountain Nurseries
              </h3>
              <Link
                href={'https://bostonmountainnurseries.com'}
                target='_blank'
              >
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                  Take a look
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
