import React, { useState } from 'react';
import { secondSocials, socials } from '../utils';

const Links = () => {
  const [toggle, setToggle] = useState(null);

  const handleClick = (id) => {
    setToggle((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <ul className='flex flex-wrap lg:flex-nowrap justify-start items-start '>
        {socials.map(
          (
            { id, title, links, secondLinks, thirdLinks, fourthLinks },
            index
          ) => (
            <li
              key={index}
              className='md:border-none border-b border-[#d9dce2] w-full '>
              <h3
                className='md:block text-[12px] font-medium uppercase leading-[1] tracking-[0.6px] py-8 md:py-2 text-gray-900 md:cursor-auto cursor-pointer flex justify-between items-center'
                onClick={() => handleClick(id)}>
                {title}

                <svg
                  viewBox='0 0 24 24'
                  width='1rem'
                  height='1rem'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  data-testid='ChevronDownIcon'
                  focusable='false'
                  aria-hidden='true'
                  className={`md:text-[18px] transition-transform duration-700 ease-in-out inline-block md:hidden ${
                    toggle === id ? '-scale-y-[1]' : ''
                  }`}>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z'></path>
                </svg>
              </h3>
              <div
                className={`md:flex justify-center items-start 
                    ${
                      toggle === id
                        ? 'max-h-auto pb-4'
                        : 'max-h-0 md:max-h-[500px]  overflow-hidden'
                    }`}>
                <div className='md:basis-[25%] md:max-w-[25%] max-w-full basis-[100%]'>
                  {links.map((link, index) => (
                    <a
                      href='#'
                      key={index}
                      className='block pr-8 text-[14px] text-gray-600 pb-2'>
                      <span className='block'>{link}</span>
                    </a>
                  ))}
                </div>
                <div className='md:basis-[25%] md:max-w-[25%] max-w-full basis-[100%] pt-4 md:pt-0'>
                  {secondLinks
                    ? secondLinks.map((secondLink, index) => (
                        <a
                          href='#'
                          key={index}
                          className='block pr-8 text-[14px] text-gray-600 pb-2'>
                          <span className='block'>{secondLink}</span>
                        </a>
                      ))
                    : ''}
                </div>
                <div className='md:basis-[25%] md:max-w-[25%] max-w-full basis-[100%]  pt-4 md:pt-0'>
                  {thirdLinks
                    ? thirdLinks.map((thirdLink, index) => (
                        <a
                          href='#'
                          key={index}
                          className='block pr-8 text-[14px] text-gray-600 pb-2'>
                          <span className='block'>{thirdLink}</span>
                        </a>
                      ))
                    : ''}
                </div>
                <div className='md:basis-[25%] md:max-w-[25%] max-w-full basis-[100%]  pt-4 md:pt-0'>
                  {fourthLinks
                    ? fourthLinks.map((fourthLink, index) => (
                        <a
                          href='#'
                          key={index}
                          className='block pr-8 text-[14px] text-gray-600 pb-2'>
                          <span className='block'>{fourthLink}</span>
                        </a>
                      ))
                    : ''}
                </div>
              </div>
            </li>
          )
        )}

        {secondSocials.map(({ id, title, links }, index) => (
          <li
            key={index}
            className='md:border-none border-b border-[#d9dce2] w-full  lg:px-[.5rem] lg:basis-[16.666666667%] lg:max-w-[16.666666667%] md:basis-[33.3333333333%] md:max-w-[33.3333333333%] basis-full max-w-full  '>
            <h3
              className='md:block text-[12px] font-medium uppercase leading-[1] tracking-[0.6px] py-8 md:py-2 text-gray-900 flex justify-between items-center md:cursor-auto cursor-pointer'
              onClick={() => handleClick(id)}>
              {title}
              <svg
                viewBox='0 0 24 24'
                width='1rem'
                height='1rem'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                data-testid='ChevronDownIcon'
                focusable='false'
                aria-hidden='true'
                className={`md:text-[18px] transition-transform duration-700 ease-in-out inline-block md:hidden ${
                  toggle === id ? '-scale-y-[1]' : ''
                }`}>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z'></path>
              </svg>
            </h3>
            {links.map((link, index) => (
              <div
                key={index}
                className={`${
                  toggle === id
                    ? 'max-h-auto  md:pb-0  pb-4'
                    : ' md:max-h-[500px] max-h-0 overflow-hidden md:overflow-auto'
                }`}>
                <a
                  href='#'
                  className='block pr-8 text-[14px] text-gray-600 pb-2'>
                  <span className='block'>{link}</span>
                </a>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
