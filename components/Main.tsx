import React from 'react';

type Props = {};

const Main = (props: Props) => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Solving your creative problems
          </p>
          <h1 className='py-4 text-gray-700'>Clark Creative Services</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
