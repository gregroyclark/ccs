import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type PortfolioItemProps = {
  title: string;
  backgroundImage: any;
  alt: string;
  projectUrl: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  backgroundImage,
  alt,
  projectUrl,
}) => {
  return (
    <div className='relative flex items-center justify-center w-[360px] h-[360px] md:w-[300px] md:h-[300px] shadow-xl shadow-gray-400 rounded-xl p-4 m-4 group hover:bg-gradient-to-r from-[#004ab1] to-[#5c89c8] ease-in duration-700'>
      <Image
        src={backgroundImage}
        alt={alt}
        className='rounded-xl group-hover:opacity-10 h-[100%] w-[100%]'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center p-3'>
          {title}
        </h3>
        <Link href={projectUrl} target='_blank'>
          <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Take a look
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
