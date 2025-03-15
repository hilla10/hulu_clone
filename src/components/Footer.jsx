import Icons from './Icons';
import Links from './Links';
import facebook from '../assets/icons/facebook.svg';
import xTwitter from '../assets/icons/x_logo.svg';
import youtube from '../assets/icons/youtube.svg';
import instagram from '../assets/icons/instagram.svg';
import { footers } from '../utils';
const Footer = () => {
  return (
    <footer className='bg-gray-100 w-full'>
      <div className='max-w-[1600px] mx-auto xl:px-[140px] lg:px-11 md:px-10 px-5 pb-5'>
        <div className='pt-13 md:pb-18.5 border-b-0  md:border-b-2 border-b-[#d9dce2]'>
          <Links />
        </div>
        <div className='flex items-center justify-start mr-10.5 mb-8 pt-8'>
          <Icons image={facebook} />
          <Icons image={xTwitter} />
          <Icons image={youtube} />
          <Icons image={instagram} />
        </div>

        <div className=' md:-ml-0 mb-8'>
          <ul className='flex flex-wrap'>
            <div className=' ml-8 md:block hidden '>
              <span className=' text-[12px] font-normal leading-[1.44] tracking-normal text-gray-600'>
                © {new Date().getFullYear()} Hulu, LLC
              </span>
            </div>

            {footers.map(({ id, text, image }) => (
              <li key={id} className=' ml-8 pb-4'>
                <a href='#' className='flex items-center gap-1.5'>
                  {image && <img src={image} alt={text} />}
                  <span className='text-[12px] font-normal leading-[1.44] tracking-normal text-gray-600 '>
                    {text}
                  </span>
                </a>
              </li>
            ))}

            <div className=' ml-8 '>
              <span className='md:hidden block text-[12px] font-normal leading-[1.44] tracking-normal text-gray-600'>
                © {new Date().getFullYear()} Hulu, LLC
              </span>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
