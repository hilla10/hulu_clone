import React from 'react';
import Cards from './Cards';

const Library = () => {
  return (
    <section className='bg-gray-950'>
      <div className='text-center text-white xl:max-w-[996px] mx-auto lg:max-w-[786px] md:max-w-[80%] flex flex-col items-center justify-center'>
        <div className='md:pt-[88px] py-12.5 px-5 text-center'>
          <span className='text-green-400 text-[12px] font-medium uppercase'>
            INCLUDED IN ALL PLANS
          </span>
          <h2 className='font-[600] sm:text-[32px] lg:text-[48px] leading-[1.25] -tracking-[0.5px] pb-7 pt-2'>
            All The TV You Love
          </h2>
          <p className='xl:max-w-[792px] lg:max-w-[680px] mx-auto pt-4'>
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>

      <div className='px-[20px] pb-4 xl:px-0  relative z-1 xl:max-w-[100%] max-w-[768px] mx-auto'>
        <Cards />
        <small className='text-[10px] text-white-60 text-right w-full block pr-15'>
          Premium network add-ons available for an additional cost
        </small>
      </div>
    </section>
  );
};

export default Library;
