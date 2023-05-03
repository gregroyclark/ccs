import Image from 'next/image';
import React, { useState } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaShare } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contact from '../public/contact.jpg';
import Link from 'next/link';

const Contact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        subject: subject,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(name, phoneNumber, email, subject, message);
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-1 py-16 w-full'>
        <div className='mt-12'>
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
                  <h2 className='py-2'>How can we help?</h2>
                  <p>
                    An introduction to your ideas & goals will help us serve you
                    better.
                  </p>
                  <p className='py-4'>
                    Please include a description of:
                    <br />
                    - any desired deliverables & project deadlines
                    <br />
                    - event occasion & location
                    <br />
                    - intended audience
                    <br />
                    - budget
                    <br />
                    - etc.
                    <br />
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>connect with me</p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <a
                      href='https://linkedin.com/in/gregroyclark'
                      target='_blank'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedin />
                      </div>
                    </a>
                    {/* <a href='https://github.com/gregroyclark' target='_blank'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a> */}
                    <a href='mailto:info@clarkcreativeservices.com'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                      </div>
                    </a>
                    <a href='https://linktr.ee/gregclark' target='_blank'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaShare />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}

            <div className='col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form onSubmit={handleSubmit}>
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label htmlFor='name' className='uppercase text-sm py-2'>
                        Name
                      </label>
                      <input
                        name='name'
                        type='text'
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor='phoneNumber'
                        className='uppercase text-sm py-2'
                      >
                        Phone Number
                      </label>
                      <input
                        name='phone number'
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor='email' className='uppercase text-sm py-2'>
                      Email
                    </label>
                    <input
                      name='email'
                      type='email'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor='subject' className='uppercase text-sm py-2'>
                      Subject
                    </label>
                    <input
                      name='subject'
                      type='text'
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor='message' className='uppercase text-sm py-2'>
                      Message
                    </label>
                    <textarea
                      name='message'
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows={5}
                    />
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-4'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link id='return-to-top-link' href='/'>
              <div
                id='return-to-top-div'
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <HiOutlineChevronDoubleUp
                  id='return-to-top-icon'
                  size={30}
                  className='text-[#004ab1]'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
