import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import logo from '../public/logo.png';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaShare } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl bg-white z-[100]'
          : 'fixed w-full h-20 bg-white z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href={'/'}>
          <Image
            src={logo}
            alt='Clark Creative Services blue text logo'
            width={75}
            height={125}
          />
        </Link>

        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/#services'}>Services</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/#portfolio'}>Portfolio</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href={'/#contact'}>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/30' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-200'
              : 'fixed left-[-200%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-200'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href={'/'} onClick={handleNav}>
                <Image
                  src={logo}
                  alt='Clark Creative Services blue text logo'
                  width={87}
                  height={35}
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Bring your ideas to life
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <li className='py-3 text-sm'>
                <Link onClick={handleNav} href={'/'}>
                  Home
                </Link>
              </li>
              <li className='py-3 text-sm'>
                <Link onClick={handleNav} href={'/#services'}>
                  Services
                </Link>
              </li>
              <li className='py-3 text-sm'>
                <Link onClick={handleNav} href={'/#portfolio'}>
                  Portfolio
                </Link>
              </li>
              <li className='py-3 text-sm'>
                <Link onClick={handleNav} href={'/#contact'}>
                  Contact
                </Link>
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
