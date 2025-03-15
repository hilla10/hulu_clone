import React from 'react';

const PlaneHead = ({
  badge,
  image,
  description,
  cta,
  trial,
  preDescription,
  preCta,
  preTrial,
  smText,
}) => {
  return (
    <div className='text-center  mt-14 md:flex  items-center justify-center mx-4 md:mx-0 border-b border-gray-500 pb-10 sticky top-0 pt-4  w-full bg-gray-950'>
      <div className='hidden md:flex items-center justify-center  lg:basis-[33.3333333%] lg:w-[33.3333333%] shrink-0 grow-0' />
      <div className='flex justify-around lg:basis-[66.666666666%] text-center lg:w-[66.666666666%] shrink-0 grow-0'>
        <div className='text-center w-full'>
          <span
            className={`text-[10px] font-[600] uppercase tracking-[1px] bg-green-400 px-4  rounded-2xl mb-3 inline-block ${
              badge ? 'py-1' : ''
            } `}>
            {badge || ''}
          </span>
          <div className='h-[60px] md:pt-1 pb-3 mx-auto text-center flex items-center justify-center'>
            <img src={image} alt='Disnep' className='max-h-[60px]' />
          </div>

          <p className='text-[12px] font-bold text-white pb-3  text-center pt-3 '>
            {description}
          </p>

          <div className='md:max-w-[344px] md:block w-full lg:mt-1.5 mx-auto none'>
            <button className='bg-white py-3 px-5 text-[14px] font-[600] uppercase w-full inline-flex items-center justify-center cursor-pointer lg:h-[48px] md:px-7 max-w-[344px] hover:bg-[#ffffffcc] rounded-md transition-all duration-300 ease'>
              <span className='w-full '>{cta}</span>
            </button>
          </div>
          <span className='text-[10px] font-extrabold tracking-[0.6px] uppercase leading-[1] text-white pb-1 pt-3 block'>
            {trial || ''}
          </span>
        </div>

        <div className={`${badge ? 'mt-9' : 'mt-6'}  ml-6 w-full`}>
          <div className='h-[60px] md:pt-1 pb-3 mx-auto text-center flex items-center justify-center'>
            <img src={image} alt='Disnep' className='max-h-[60px]' />
          </div>
          <p className='text-[12px] font-bold text-white pb-3  text-center  pt-3 '>
            {preDescription}
          </p>
          <div className='md:max-w-[344px] md:block w-full lg:mt-1.5 mx-auto none'>
            <button className='bg-white py-3 px-5 text-[14px] font-[600] uppercase w-full inline-flex items-center justify-center cursor-pointer lg:h-[48px] md:px-7 max-w-[344px] hover:bg-[#ffffffcc] rounded-md transition-all duration-300 ease'>
              <span className='w-full '> {preCta}</span>
            </button>
          </div>

          {preTrial ? (
            <span className='text-[10px] font-extrabold tracking-[0.6px] uppercase leading-[1] text-white pb-1 pt-3 block'>
              {preTrial}
            </span>
          ) : (
            <span className='text-[10px] leading-[1] text-white pb-1 pt-3 block'>
              {smText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaneHead;
