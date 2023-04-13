import React from 'react';

import PortfolioItem from './PortfolioItem';

import field from '../public/projects/field.jpg';
import noise from '../public/projects/noise.jpg';

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Portfolio</p>
        <h2 className='py-4'>Some of my finest work</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <PortfolioItem
            title='Boston Mountain Nurseries'
            alt='Blackberry field'
            backgroundImage={field}
            projectUrl={'https://bostonmountainnurseries.com'}
          />
          <PortfolioItem
            title='The Righteous Noise'
            alt='The Righteous Noise rock band logo'
            backgroundImage={noise}
            projectUrl={'https://therighteousnoise.com'}
          />
          {/* <PortfolioItem
            title='Brew Bees Coffee'
            alt='f'
            backgroundImage={field}
            projectUrl={'https://bostonmountainnurseries.com'}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
