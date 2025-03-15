import React, { useState } from 'react';

const Dropdown = ({ dropText, setDropText }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className='mx-auto flex flex-col items-center justify-center mt-10 relative'>
      <div className='absolute  top-0 '>
        <button
          className='w-[235px] py-2 px-[12px] flex items-center justify-around bg-white text-gray-950 font-bold rounded-4xl text-[14px] text-left h-[40px] border border-gray-[900]'
          onClick={() => setDropdown((prev) => !prev)}>
          <span>{dropText}</span>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`${dropdown ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.91248 4.25415C7.68467 4.02634 7.31533 4.02634 7.08752 4.25415L2.42085 8.92081C2.19305 9.14862 2.19305 9.51797 2.42085 9.74577C2.64866 9.97358 3.01801 9.97358 3.24581 9.74577L7.5 5.49158L11.7542 9.74577C11.982 9.97358 12.3513 9.97358 12.5791 9.74577C12.807 9.51796 12.807 9.14862 12.5791 8.92081L7.91248 4.25415Z'
              fill='#040405'></path>
          </svg>
        </button>

        <div
          className={`bg-white rounded-md py-2.5  mt-3 w-[160px]  mx-auto ${
            dropdown ? 'block' : 'hidden'
          }`}>
          <ul>
            {[
              'Disney+, Hulu Bundle',
              'Disney+, Hulu, ESPN+ Bundle',
              'Disney+, Hulu, Max Bundle',
              'Hulu + Live TV',
            ].map((option) => (
              <li
                key={option}
                className={`text-[14px] font-[600] p-2 px-4 leading-[1.4] cursor-pointer text-gray-900  ${
                  dropText === option ? 'bg-gray-100' : ''
                }`}
                onClick={() => {
                  setDropText(option);
                  setDropdown(false);
                }}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
