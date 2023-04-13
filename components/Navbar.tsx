import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../public/logo.png';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href={'/'}>
          <Image
            src={logo}
            alt='Clark Creative Services blue text logo'
            width={75}
            height={125}
            className='bg-[#ecf0f3]'
          />
        </Link>

        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/services'}>Services</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/work'}>Work</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/30'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300'>
          <div>
            <div>
              <Image
                src={logo}
                alt='Clark Creative Services blue text logo'
                width={87}
                height={35}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
