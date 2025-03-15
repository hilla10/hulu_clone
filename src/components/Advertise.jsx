import React, { useState } from 'react';
import infoIcon from '../assets/icons/Info_Icon_White.svg';
import dropdown from '../assets/icons/dropdown_arrow.svg';
import Addon from './Addon';

const Advertise = ({ selectedPlan }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {' '}
      <div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            toggle ? 'max-h-[2000px]' : 'max-h-0'
          } pt-14`}>
          <div className='pt-27 text-white text-center md:text-left border-b border-gray-500'>
            <div className='pb-5'>
              <h3 className='mb-3 lg:text-[32px] font-[600] lg:leading-[1.2] lg:-tracking-[0.2px] xsm:text-2xl xsm:leading-[1.24] xsm:tracking-normal text-[20px] leading-[28px] py-2 '>
                Available Add-ons
              </h3>
              <p className='text-[14px] font-normal leading-[1.4] tracking-normal'>
                Add-ons available at an additional cost. <br />
                Add them up after you sign up for Hulu.
              </p>
            </div>
          </div>

          {selectedPlan === 'Disney+, Hulu Bundle' ||
          selectedPlan === 'Disney+, Hulu, ESPN+ Bundle' ? (
            <>
              <Addon title='Max' />
              <Addon title='CINEMAX®' />
              <Addon title='Paramount+ with SHOWTIME' />
              <Addon title='STARZ®' />
            </>
          ) : selectedPlan === 'Disney+, Hulu, Max Bundle' ? (
            <>
              <Addon title='CINEMAX®' />
              <Addon title='Paramount+ with SHOWTIME' />
              <Addon title='STARZ®' />
            </>
          ) : (
            <>
              <Addon title='Max™' />
              <Addon title='CINEMAX®' />
              <Addon title='Paramount+ with SHOWTIME' />
              <Addon title='STARZ®' />
              <Addon title='Unlimited Screens' infoIcon={infoIcon} />
              <Addon title='Entertainment Add-on' infoIcon={infoIcon} />
              <Addon title='Español Add-on' infoIcon={infoIcon} />
              <Addon title='Sports Add-on' infoIcon={infoIcon} />
            </>
          )}
        </div>

        <div
          className={`text-center text-white flex justify-center items-center gap-2 border-b border-gray-500 h-[70px] cursor-pointer ${
            toggle ? '' : 'border-t border-gray-500'
          }`}
          onClick={() => setToggle((prev) => !prev)}>
          Hide Add-ons
          <img
            src={dropdown}
            alt=''
            className={toggle ? 'rotate-[180deg]' : 'rotate-[0deg]'}
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
