import React from 'react';
import original_large from '../assets/original_large.jpeg';
import original_medium from '../assets/original_medium.jpeg';
import original_small from '../assets/original_small.jpeg';
import logo from '../assets/logos/dis_hulu.png';
import logo_max from '../assets/logos/dis_hulu_max.png';

const MastHead = () => {
  return (
    <section className='lg:pt-20 lg:min-h-[660px]  md:pt-[72px] md:min-h-[600px] min-h-[660px] pt-[72px] bg-gradient-custom w-full bg-top bg-cover flex flex-col items-center justify-center  relative bg-gradient-skrim '>
      <div>
        <picture className='invisible hidden'>
          <source media='(min-width: 769px)' srcSet={original_large} />
          <source media='(min-width: 441px)' srcSet={original_medium} />
          <source media='(min-width: 0px)' srcSet={original_small} />
          <img alt='preloading masthead' src={original_small} />
        </picture>
        <div className='absolute top-0 left-0 h-full w-full bg-top bg-cover bg-image-custom' />
      </div>

      <div className='relative flex flex-col items-center justify-center mx-auto px-10 w-full lg:pb-[60px] lg:pt-[60px] pb-10'>
        <div className='text-center text-[12px] font-[600] pb-[17px] '>
          <span className='uppercase text-green-300 '>
            Limited Time Offer
            <br />
            <br />
            <img
              src={logo}
              alt='disnep Logo'
              className='w-[40%] md:w-[25%] min-h-auto mx-auto'
            />
          </span>
        </div>
        <h1 className=' md:text-5xl font-bold leading-[1.25] text-[40px] text-white text-center w-full lg:w-[650px] md:w-[570px]'>
          Get Disney+ and Hulu (both with ads) for $2.99/month for 4 months
        </h1>
        <div>
          <p className='py-4 text-[24px] font-bold text-white text-center w-full lg:w-[670px] md:w-[570px]'>
            Save 72% per month for 4 months on Disney+, Hulu Bundle Basic. Ends
            3/30/25.
          </p>

          <div className=' w-full lg:w-[670px] md:w-[570px]'>
            <button className='cursor-pointer bg-green-300 w-full py-3 rounded-md uppercase font-bold text-[14px]'>
              Get This Deal
            </button>
          </div>
          <div className='md:w-[536px] mx-auto'>
            <small className='text-white-60 pt-4 block text-center text-[10px] font-normal leading-[1.46]'>
              Savings compared to the then-current regular monthly price of
              Disney+, Hulu Bundle Basic. Offer applies to ad-supported Disney+,
              Hulu Bundle plan. Valid only for new and eligible returning
              Disney+, Hulu, and/or ESPN+ subscribers, who are 18 years of age
              or older.
              <b>
                After 4-month promo period, Disney+, Hulu Bundle Basic
                auto-renews at then-current monthly retail price ($10.99/mo
                (plus tax, where applicable)) until canceled
              </b>
              . Select Hulu content available via Disney+ with valid Hulu and
              Disney+ subscriptions; additional content only available via Hulu
              app. Hulu content can be streamed via Disney+ on up to 2 devices
              simultaneously. Additional app feature and device restrictions
              apply. Offer valid until 11:59 PM PT on 3/30/25.
              <a href='#' className='text-white underline font-bold'>
                Additional terms apply..
              </a>
              ©{new Date().getFullYear()} Disney and its related entities.
            </small>
          </div>
        </div>
      </div>

      <div className='ribbon-black-transparent lg:py-[25px] lg:px-[40px] w-full z-1 md:py-[34px] md:px-[40px] py-4 pr-2.5 pl-5'>
        <div className='md:flex flex-wrap items-center justify-center w-full  mx-auto px-10'>
          <div className='max-w-[25%] basis-[25%] hidden md:block'>
            <img
              src={logo_max}
              alt='logo Max'
              className='lg:max-w-[200px] md:max-w-[220px] max-w-[180px] w-full'
            />
          </div>

          <div className='text-center md:text-left md:max-w-[58.333%] md:basis-[58.33%] md:pr-[100px] md:pl-[30px] w-full md:mb-0 mb-4'>
            <p className='text-green-400 font-bold text-[14px] pb-2 '>
              Disney+, Hulu, Max Bundle
            </p>
            <img
              src={logo_max}
              alt='logo Max'
              className=' mx-auto max-w-[180px] w-full md:hidden'
            />
            <span className='text-white text-[14px] md:text-[24px] font-normal leading-[1.24]'>
              Save 42% per month with a Disney+, Hulu, Max Bundle. Plans start
              at $16.99/mo.
              <br />
              <span className='text-[10px] text-white'>
                Savings compared to regular monthly price of each service.
              </span>
            </span>
          </div>
          <div className='md:max-w-[16.666%] md:basis-[16.666%] text-center '>
            <button className='text-black bg-green-400 uppercase text-[14px] h-[48px] min-w-[64px] font-[600] px-6  rounded-sm leading-[1] cursor-pointer hover:bg-green-200 '>
              Learn More
            </button>
            <div className='text-center'>
              <a
                href='#'
                className='text-[10px] text-white opacity-70 underline hover:no-underline text-center'>
                Terms apply.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastHead;

{
  /*  */
}
