import React from 'react';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            bring your ideas to life
          </p>
          <h1 className='py-4 text-gray-700'>Clark Creative Services</h1>
          <p>
            In the internet age, your business doesn&apos;t exist if it
            isn&apos;t on the web.
            <br />
            Your customers need to be able to find you.
            <br />
            They need to understand who you are & what you do.
            <br />
            Most importantly, it has to be easy.
            <br />
            Modern attention spans can&apos;t handle friction.
            <br />
            I&apos;m here to solve those problems for you.
          </p>
          {/* social buttons here */}
        </div>
      </div>
    </div>
  );
};

export default Main;
