import React, { useEffect, useRef, useState } from 'react';
import { spotlights } from '../utils';

const SpotLight = () => {
  const [toggle, setToggle] = useState('Live Sports');
  const [transitionEffect, setTransitionEffect] = useState(false);
  const filterSpotLights = spotlights.filter((fsl) => fsl.title === toggle);

  const contentRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.transform = 'translate3d(0, 0, 0)';
        contentRef.current.style.opacity = '1';
      }
    }, 0);
  }, [toggle]);

  return (
    <section>
      <div className='relative '>
        {filterSpotLights.map(
          ({ id, title, description, logos, imageClass }) => (
            <div key={id} className={`${imageClass}  relative  `}>
              <div className='h-[760px] mx-auto pt-8.5 md:h-[1000px] lg:max-w-[786px] lg:max-h-[702px] lg:pt-[60px] lg:pb-[190px] xl:max-w-[976px] xl:max-h-[811px] text-white md:flex justify-start items-center'>
                <div
                  ref={contentRef}
                  className={`md:pt-[60px] lg:pt-0 transition-all duration-600 ease `}
                  style={{
                    transform: 'translate3d(0, 20px, 0) ',
                    opacity: '0',
                  }}>
                  <div className='mt-10 md:mt-5 lg:mt-6 text-center lg:text-left'>
                    <span className='text-5xl font-[600] leading-[1.25] -tracking-[0.5px]  '>
                      {title}
                    </span>
                  </div>
                  <div className='max-w-[550px] text-center mx-auto px-5 mt-1 lg:max-w-[450px] lg:mt-4.5 lg:text-left lg:mx-0 lg:px-0 xl:max-w-[500px]'>
                    <span>{description}</span>
                  </div>

                  <div className='flex items-center justify-center mx-auto md:mx-0 md:justify-start  mt-5 w-[382px]'>
                    {logos.map((logo, index) => (
                      <div
                        key={index}
                        className='h-[55px] w-[55px] rounded-full bg-white flex items-center justify-center mr-5 mb-5'>
                        <img src={logo} className='w-[80%]' />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        <ul className='absolute top-0 md:top-40  left-[50%] md:left-94 -translate-x-[50%] text-white flex items-center lg:justify-center justify-center gap-8  pt-6 text-center w-full'>
          <li>
            <button
              className={`uppercase  mx-[13px] p-0 cursor-pointer hover:text-gray-500 ${
                toggle === 'Live Sports'
                  ? 'text-white hover:text-[#c8c8c8]'
                  : 'text-white-40'
              }`}
              onClick={() => setToggle('Live Sports')}>
              {' '}
              <span className='text-[12px] font-extrabold leading-[1.125] tracking-[0.25px]'>
                Live Sports
              </span>
              <div
                className={`h-[7px] bg-white absolute  z-2  transition-all duration-500 mt-[13px] ease-[cubic-bezier(.455,.03,.515,.955)]
                ${
                  toggle === 'Live Sports'
                    ? 'w-[90px] translate-x-[0.5px]'
                    : toggle === 'Breaking News'
                    ? 'w-[117.9px] translate-x-[149px]'
                    : 'w-[121px] translate-x-[325px]'
                }`}
              />
            </button>
          </li>
          <li>
            <button
              className={`uppercase  mx-[13px] p-0 cursor-pointer hover:text-gray-500  ${
                toggle === 'Breaking News'
                  ? 'text-white hover:text-[#c8c8c8]'
                  : 'text-white-40'
              }`}
              onClick={() => setToggle('Breaking News')}>
              {' '}
              <span className='text-[12px] font-extrabold leading-[1.125] tracking-[0.25px]'>
                Breaking News
              </span>
            </button>
          </li>

          <li>
            <button
              className={`uppercase  mx-[13px] p-0 cursor-pointer hover:text-gray-500  ${
                toggle === 'Biggest Event'
                  ? 'text-white hover:text-[#c8c8c8]'
                  : 'text-white-40'
              }`}
              onClick={() => setToggle('Biggest Event')}>
              {' '}
              <span className='text-[12px] font-extrabold leading-[1.125] tracking-[0.25px]'>
                Biggest Events
              </span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SpotLight;
