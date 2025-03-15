import React, { useState } from 'react';

import Advertise from './Advertise';
import PlanContent from './PlanContent';
import Features from './Features';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('Disney+, Hulu Bundle');

  return (
    <section className='bg-gray-950 py-21  '>
      <div className='lg:max-w-[984px] mx-auto '>
        <PlanContent
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />

        <Features selectedPlan={selectedPlan} />

        <div className='pt-3 text-center md:text-left px-5'>
          <span className='text-white text-[10px] '>
            **Switches from Live TV to Hulu take effect as of the next billing
            cycle <br /> †For current-season shows in the streaming library only{' '}
            <br />
            ††Live TV channels will include ad breaks <br /> Hulu (With Ads) +
            Live TV Plan $82.99/mo. after 3-day free trial (if any) unless
            canceled. Cancel anytime. Offer valid for new and eligible returning
            subscribers only.
          </span>
        </div>

        <Advertise selectedPlan={selectedPlan} />
      </div>
    </section>
  );
};

export default Plans;
