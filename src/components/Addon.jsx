import React from 'react';

import checkmark_green from '../assets/icons/Pricing_Checkmark_green-light.svg';

const Addon = ({ title, infoIcon }) => {
  return (
    <div className='text-center text-[#e4e4e5] '>
      <div>
        <div className='flex justify-center md:justify-start  items-center text-left border-b border-gray-500 flex-wrap '>
          <div className='flex items-center justify-center md:justify-start gap-1.5 py-5 px-[3px] text-[14px] basis-[33.3333333333%] max-w-[33.3333333333%] min-w-[100%] lg:min-w-0 '>
            <div>
              <span>
                <a href='#'>
                  {title}
                  <img src={infoIcon} alt='' className='pl-1 inline' />{' '}
                </a>
              </span>
            </div>
          </div>

          <div className='flex text-center lg:py-5 py-[17px] px-2.5 self-stretch basis-[33.3333333333%] max-w-[45.3333333333%] justify-center items-center md:pt-[7px] md:pb-[17px] md:px-2.5 grow shrink'>
            <div className='px-2 md:px-[60px] lg:px-12.5'>
              <span>
                <img src={checkmark_green} alt='' />
              </span>
            </div>
          </div>

          <div className='flex text-center lg:py-5 py-[17px] px-2.5 self-stretch basis-[33.3333333333%] max-w-[45.3333333333%] justify-center items-center md:pt-[7px] md:pb-[17px] md:px-2.5 grow shrink'>
            <div className='px-2 md:px-[60px] lg:px-12.5'>
              <span className='text-[13px] font-[600]'>
                <img src={checkmark_green} alt='' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addon;
