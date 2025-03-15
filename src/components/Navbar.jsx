import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const resizeWindow = () => {
      window.innerWidth >= 768 && setOpenNav(false);
    };

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  });

  return (
    <nav className='absolute z-100 left-0 top-0 w-full h-[74px]'>
      <div className='px-6 md:px-10 flex h-[74px] justify-between items-center'>
        <div>
          <span className='h-[24px]'>
            <svg
              viewBox='0 -2 61 24'
              height='24'
              width='61'
              role='img'
              aria-labelledby='logoTitle'
              fill='rgb(39, 44, 53)'
              className='svg'>
              <title id='logoTitle'>hulu</title>
              <path
                d='M9.57046613 6.24096927h-3.1015504c-1.0875017 0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z'
                fillRule='evenodd'></path>
            </svg>
          </span>
        </div>

        <div className={`md:block  ${openNav ? 'block' : 'hidden'}`}>
          <ul className='md:static absolute top-17 right-6 md:w-auto w-[272px]  bg-gray-700 rounded-lg justify-center flex flex-col  items-center md:bg-transparent text-center py-0.5  shadow-lg md:shadow-none'>
            <li className='w-full hover:bg-[#ffffff33] md:hover:bg-transparent'>
              <a
                href='#'
                className='text-gray-400 hover:bg-[#ffffff1A] hover:text-white md:hover:bg-gray-700 md:hover:text-white rounded-sm md:rounded-lg px-4 h-[40px] flex items-center justify-center  md:w-auto mb-1  w-[calc(100%-16px)] mx-auto transition-all duration-500'>
                <span className='font-[600] text-[14px] tracking-[.6px] uppercase'>
                  Log In
                </span>
              </a>
            </li>
            <li className='w-full'>
              <a
                href='#'
                className='md:hidden  bg-green-400 px-4 h-[40px] flex items-center justify-center rounded-sm  w-[calc(100%-8px)] mx-auto'>
                <button className='uppercase font-[600] text-[14px] tracking-[.6px] block'>
                  Get This Deal
                </button>
              </a>
            </li>
          </ul>
        </div>

        <button
          className='py-3 px-4 ml-1 bg-[#323843] rounded-lg cursor-pointer md:hidden'
          onClick={() => setOpenNav((prev) => !prev)}>
          <svg
            viewBox='0 0 24 24'
            width='1em'
            height='1em'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            data-testid='MenuHamburgerIcon'
            focusable='false'
            aria-hidden='true'>
            <path d='M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z'></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
