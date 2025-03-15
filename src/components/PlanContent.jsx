import React from 'react';
import Dropdown from './Dropdown';
import PlaneHead from './PlaneHead';
import disney from '../assets/logos/hulu_logo.svg';
import disneyEspa from '../assets/logos/hulu_espn_logo.svg';
import disneyMax from '../assets/logos/hulu_max_logo.svg';
import huluLive from '../assets/logos/hulu_live_logo.png';

const PlanContent = ({ selectedPlan, setSelectedPlan }) => {
  return (
    <>
      <div className='relative '>
        <h1 className='text-5xl font-bold pb-4 text-white text-center'>
          Select Your Plan
        </h1>
        <p className='text-center text-white text-[18px] tracking-normal leading-[1.32]'>
          No hidden fees, equipment rentals, or installation appointments.
          <br />
          <b>Switch plans or cancel anytime.**</b>
        </p>
      </div>

      <div className='mb-8'>
        <Dropdown dropText={selectedPlan} setDropText={setSelectedPlan} />
      </div>

      {selectedPlan === 'Disney+, Hulu Bundle' ? (
        <PlaneHead
          badge='Limited Time Offer'
          image={disney}
          description='Disney+, Hulu Bundle Basic'
          cta='$2.99/Mo. For 4 Mos.^'
          trial='THEN $10.99/MO.^'
          preDescription='Disney+, Hulu Bundle Premium'
          preCta='$19.99/mo.'
          preTrial='SAVE 42%*'
        />
      ) : selectedPlan === 'Disney+, Hulu, ESPN+ Bundle' ? (
        <PlaneHead
          badge='Best Value'
          image={disneyEspa}
          description='Disney+, Hulu, ESPN+ Bundle Basic'
          cta='$16.99/Mo.'
          trial='Save 46%*'
          preDescription='Disney+, Hulu, ESPN+ Bundle Premium'
          preCta='$26.99/mo.'
          preTrial='SAVE 42%*'
        />
      ) : selectedPlan === 'Disney+, Hulu, Max Bundle' ? (
        <PlaneHead
          image={disneyMax}
          description='Disney+, Hulu, Max Bundle'
          cta='Learn More'
          preDescription='Disney+, Hulu, Max Bundle'
          preCta='Learn More'
          smText='Ads will be served in select live and linear content'
        />
      ) : (
        <PlaneHead
          badge='Most Popular'
          image={huluLive}
          cta='$82.99/Mo.'
          trial='3 Day Free Trial'
          preCta='$95.99/mo.'
        />
      )}
    </>
  );
};

export default PlanContent;
