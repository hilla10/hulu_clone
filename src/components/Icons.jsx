import React from 'react';

const Icons = ({ image }) => {
  return (
    <div className='pr-8'>
      <a href='#' className=' text-gray-600'>
        <img src={image} alt='' />
      </a>
    </div>
  );
};

export default Icons;
