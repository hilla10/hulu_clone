import React from 'react';
import { libraries } from '../utils';

const Cards = () => {
  return (
    <div className='relative library_grid mx-auto'>
      {libraries.map(({ id, text, title, image }) => (
        <div key={id}>
          <button>
            <div className='relative text-left md:rounded-xl md:border-4 md:border-gray-950 hover:border-[#797d84] transition-all duration-300 ease-out md:p-1 cursor-pointer'>
              <div className='library_gradient absolute top-0 ring-0 left-0 bottom-0 md:top-1 md:left-1 md:bottom-1 md:right-1' />
              <img
                src={image}
                alt={title}
                className='w-full object-contain rounded-xl'
              />
              <div className='absolute top-0 left-0 md:p-6.5 p-3.5'>
                <span className='text-white text-[12px] font-medium md:mb-2.5'>
                  {text}
                </span>
                <h3 className='text-white text-[20px] leading-[28px] py-2 font-normal'>
                  {title}
                </h3>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
