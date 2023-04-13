import Image from 'next/image';
import React from 'react';

import field from '../public/field.jpg';

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Portfolio</p>
        <h2 className='py-4'>Some of my finest work</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image src={field} alt='Blackberry field with two rainbows' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
