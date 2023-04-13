import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../public/logo.png';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaShare } from 'react-icons/fa';

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
            <div className='flex w-full items-center justify-between'>
              <Image
                src={logo}
                alt='Clark Creative Services blue text logo'
                width={87}
                height={35}
              />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Solving your creative problems
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <li className='py-3 text-sm'>
                <Link href={'/'}>Home</Link>
              </li>
              <li className='py-3 text-sm'>
                <Link href={'/'}>Services</Link>
              </li>
              <li className='py-3 text-sm'>
                <Link href={'/'}>Work</Link>
              </li>
              <li className='py-3 text-sm'>
                <Link href={'/'}>Contact</Link>
              </li>
            </ul>
            <div className='pt-12'>
              <p className='uppercase tracking-widest text-[#565e51]'>
                Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
