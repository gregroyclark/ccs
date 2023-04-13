import Image from 'next/image';
import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaShare } from 'react-icons/fa';

import contact from '../public/contact.jpg';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase'>contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 w-full'>
              <div>
                <Image
                  src={contact}
                  alt=''
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                />
              </div>
              <div>
                <h2 className='py-2'>Clark Creative Services</h2>
                <p>available for creative services</p>
                <p className='py-4'>let&apos;s talk</p>
              </div>
              <div>
                <p className='uppercase pt-8'>connect with me</p>
                <div>
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

          {/* right */}

          <div className='col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
