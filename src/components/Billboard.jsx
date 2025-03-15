import React from 'react';

const Billboard = () => {
  return (
    <section className='bg-gray-950 pt-8 md:pt-0 pb-12'>
      <div className='text-white text-center lg:max-w-[786px] xl:max-w-[976px] mx-auto'>
        <h4 className='text-[14px] font-bold text-green-400 uppercase text-center'>
          Try Hulu (with ads) + live tv free for 3 days
        </h4>
        <h2 className='font-[600] sm:text-[32px] lg:text-[48px] leading-[1.25] -tracking-[0.5px] pb-7 pt-3 '>
          Watch Live TV From 95+ Channels
        </h2>
        <h3 className='text-[18px] font-normal text-center  pb-4 xl:mt-[18px] xl:mx-[14%]  lg:mt-[18px] lg:mx-[17.5%]  md:mt-[18px] md:mx-[5%] mx-auto'>
          Get top national and local channels on Hulu (With Ads) + Live TV with
          your favorite live sports, news, and events - plus the entire Hulu
          streaming library. With Unlimited DVR, store Live TV recordings for up
          to nine months and fast-forward through your DVR content. Includes
          access to endless entertainment with Disney+ and live sports with
          ESPN+.
        </h3>

        <button className='block bg-green-400 text-black text-center mx-auto h-[48px] px-6 text-[14px]  font-bold uppercase rounded-md mb-2'>
          Start Your Free Trial
        </button>
        <p className='text-white-60 pb-5 text-[10px] font-normal mx-[5%] lg:mx-[17.5%] xl:mx-[8%]'>
          Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if
          any) unless canceled. Cancel anytime. Regional restrictions, blackouts
          and Live TV terms apply. Access content from each service separately.
          Location data required to watch certain content. Offer valid for
          eligible subscribers only. <a href='#'> See details.</a>
        </p>
        <a
          href='#'
          className='text-white opacity-80 underline font-bold text-[16px]'>
          VIEW CHANNELS IN YOUR AREA →
        </a>
      </div>
    </section>
  );
};

export default Billboard;
