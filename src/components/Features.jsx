import React from 'react';
import { planFeatures } from '../utils';
import PlanFeature from './PlanFeature';
const Features = ({ selectedPlan }) => {
  return (
    <>
      {planFeatures.map(
        (
          {
            title,
            dTitle,
            espnTitle,
            maxTitle,
            beforeDiscountBasic,
            basic,
            beforeDiscountPremium,
            premium,
            espnBasic,
            beforeDiscountEspnBasic,
            beforeDiscountEspnPremium,
            espnPremium,
            beforeDiscountMaxBasic,
            maxBasic,
            beforeDiscountMaxPremium,
            maxPremium,
            liveBasic,
            livePremium,
            infoIcon,
            basicCheck,
            premiumCheck,
          },
          index
        ) =>
          selectedPlan === 'Disney+, Hulu Bundle' ? (
            <div key={index}>
              <PlanFeature
                title={dTitle ? dTitle : title}
                basic={basic}
                premium={premium}
                basicCheck={basicCheck}
                premiumCheck={premiumCheck}
                infoIcon={infoIcon}
                beforeDiscountBasic={beforeDiscountBasic}
                beforeDiscountPremium={beforeDiscountPremium}
              />
            </div>
          ) : selectedPlan === 'Disney+, Hulu, ESPN+ Bundle' ? (
            <div key={index}>
              <PlanFeature
                title={espnTitle ? espnTitle : title}
                basic={espnBasic ? espnBasic : basic}
                premium={espnPremium ? espnPremium : premium}
                basicCheck={basicCheck}
                premiumCheck={premiumCheck}
                infoIcon={infoIcon}
                beforeDiscountBasic={beforeDiscountEspnBasic}
                beforeDiscountPremium={beforeDiscountEspnPremium}
              />
            </div>
          ) : selectedPlan === 'Disney+, Hulu, Max Bundle' ? (
            <div key={index}>
              <PlanFeature
                title={maxTitle ? maxTitle : title}
                basic={maxBasic ? maxBasic : basic}
                premium={maxPremium ? maxPremium : premium}
                basicCheck={basicCheck}
                premiumCheck={premiumCheck}
                infoIcon={infoIcon}
                beforeDiscountBasic={beforeDiscountMaxBasic}
                beforeDiscountPremium={beforeDiscountMaxPremium}
              />
            </div>
          ) : (
            <div key={index}>
              <PlanFeature
                title={dTitle ? dTitle : title}
                basic={liveBasic ? liveBasic : basic}
                premium={livePremium ? livePremium : premium}
                basicCheck={basicCheck}
                premiumCheck={premiumCheck}
                infoIcon={infoIcon}
              />
            </div>
          )
      )}
    </>
  );
};

export default Features;
