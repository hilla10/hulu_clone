import familyGuy from '../assets/family_guy.jpeg';
import planetOfApes from '../assets/planet_of_apes.jpeg';
import shogun from '../assets/shogun.jpeg';
import houseOfDragon from '../assets/house_of_dragon.jpeg';

import cbcSport from '../assets/logos/cbc_sport.png';
import espnNetwork from '../assets/logos/espn_network.png';
import fs1 from '../assets/logos/fs1.svg';
import nflNetwork from '../assets/logos/nfl_network.png';
import mlbNetwork from '../assets/logos/mlb_network.webp';

import abcNews from '../assets/logos/abc_news.png';
import cnnNetwork from '../assets/logos/cnn_network.svg';
import msnbcNetwork from '../assets/logos/msnbc_network.png';
import foxNews from '../assets/logos/fox_news_network.svg';

import emmys from '../assets/logos/emmys_logo.png';
import goldenGlobal from '../assets/logos/golden_global_award.png';
import grammyAward from '../assets/logos/grammy_award.png';
import oscarAward from '../assets/logos/oscar.png';
import infoIcon from '../assets/icons/Info_Icon_White.svg';
import checkmark_green from '../assets/icons/Pricing_Checkmark_green-light.svg';
import icon from '../assets/icons/icon1.png';

export const libraries = [
  {
    id: 1,
    title: 'TV Shows',
    text: 'Past & Current Seasons',
    image: familyGuy,
  },
  {
    id: 2,
    title: 'Movies',
    text: 'New & Classic',
    image: planetOfApes,
  },
  {
    id: 3,
    title: 'Hulu Originals',
    text: 'GroundBreaking',
    image: shogun,
  },
  {
    id: 4,
    title: 'Premiums',
    text: 'Add-on',
    image: houseOfDragon,
  },
];

export const spotlights = [
  {
    id: 1,
    title: 'Live Sports',
    description:
      'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
    logos: [cbcSport, espnNetwork, fs1, nflNetwork, mlbNetwork],
    imageClass: 'live_sport',
  },
  {
    id: 2,
    title: 'Breaking News',
    description:
      "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",

    logos: [abcNews, cnnNetwork, msnbcNetwork, foxNews],
    imageClass: 'breaking_news',
  },
  {
    id: 3,
    title: 'Biggest Event',
    description:
      "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
    logos: [emmys, goldenGlobal, grammyAward, oscarAward],
    imageClass: 'biggest_event',
  },
];

export const planFeatures = [
  {
    id: 1,
    dTitle: 'Monthly price',
    espnTitle: 'Monthly price. Save up to $19.98/mo.*',
    maxTitle: 'Monthly price. Save up to $21.98/mo.*',
    beforeDiscountBasic: '$19.98/mo.',
    basic: '$2.99/mo. for 4 mos.^',
    beforeDiscountPremium: '$34.98/mo.',
    premium: '$19.99/mo.*',

    beforeDiscountEspnBasic: '$31.97/mo.',
    espnBasic: '$16.99/mo.*',
    beforeDiscountEspnPremium: '$46.97/mo.',
    espnPremium: '$26.99/mo.*',

    beforeDiscountMaxBasic: '$29.97/mo.',
    maxBasic: '$16.99/mo.*',
    beforeDiscountMaxPremium: '$51.97/mo.',
    maxPremium: '$29.99/mo.*',

    liveBasic: '$82.99/mo.',
    livePremium: '$95.99/mo.',
  },

  {
    id: 2,
    title: 'Subscriptions included in each plan',
    basic: 'Disney+ and Hulu',
    premium: 'Disney+ and Hulu',

    espnBasic: 'Disney+, Hulu, and ESPN+',
    espnPremium: 'Disney+, Hulu, and ESPN+',

    maxBasic: 'Disney+, Hulu, and Max',
    maxPremium: 'Disney+, Hulu, and Max',

    liveBasic: 'Hulu + Live TV, Disney+, and ESPN+',
    livePremium: 'Hulu + Live TV, Disney+, and ESPN+',
  },

  {
    id: 3,
    title: 'Hulu streaming library with tons of episodes and movies',
    infoIcon: infoIcon,
    basicCheck: checkmark_green,
    premiumCheck: checkmark_green,
  },

  {
    id: 4,
    title: 'Endless entertainment with Disney+',
    infoIcon: infoIcon,
    basicCheck: checkmark_green,
    premiumCheck: checkmark_green,
  },
  {
    id: 5,
    title: 'Most new episodes on Hulu the day after they air†',
    basicCheck: checkmark_green,
    premiumCheck: checkmark_green,
  },
  {
    id: 6,
    title: 'Access to award-winning Hulu Originals',
    basicCheck: checkmark_green,
    premiumCheck: checkmark_green,
  },
  {
    id: 7,
    title:
      'Watch on your favorite devices, including TV, laptop, phone, or tablet',
    basicCheck: checkmark_green,
    premiumCheck: checkmark_green,
  },
  {
    id: 8,
    title: 'No ads in Hulu streaming library',
    infoIcon: infoIcon,
    basic: '—',
    premiumCheck: checkmark_green,
  },
  {
    id: 9,
    title: 'No ads on Disney+',
    maxTitle: 'Ad-free streaming',
    infoIcon: infoIcon,
    basic: '—',
    premium: 'Ads will be served in select live and linear content',
  },
  {
    id: 10,
    title: 'Download and watch on Hulu',
    infoIcon: infoIcon,
    basic: '—',
    premiumCheck: checkmark_green,
  },
  {
    id: 11,
    title: 'Download and watch on Disney+',
    infoIcon: infoIcon,
    basic: '—',
    premiumCheck: checkmark_green,
  },
];

export const socials = [
  {
    id: 1,
    title: 'Browser',
    links: ['Streaming Library', 'Live Tv', 'Live News', 'Live Sports'],
    secondLinks: ['TV Shows', 'Movies', 'Originals', 'Networks', 'Kids', 'FX'],
    thirdLinks: ['Max', 'Cinemax', 'Paramount+ with SHOWTIME', 'STARZ'],
    fourthLinks: [
      'Disney+, Hulu, ESPN+ Bundle Basic',
      'Disney+, Hulu, ESPN+ Bundle Premium',
      'Disney+, Hulu Bundle',
      'Disney+, Hulu, Max Bundle',
      'Student Discount',
    ],
  },
];

export const secondSocials = [
  {
    id: 2,
    title: 'Help',
    links: [
      'Account & Billing',
      'Plans & Pricing',
      'Supported Devices',
      'Accessibility',
    ],
  },
  {
    id: 3,
    title: 'About Us',
    links: ['Shop Hulu', 'Press', 'Jobs', 'Contact', 'Guides | What to Watch'],
  },
];

export const footers = [
  {
    id: 1,
    image: icon,
    text: 'About Ads',
  },
  {
    id: 2,
    text: 'Subscriber Agreement',
  },
  {
    id: 3,
    text: 'Privacy Policy',
  },
  {
    id: 4,
    text: 'Do Not Sell or Share My Personal Information',
  },
  {
    id: 5,
    text: 'Your US State Privacy Rights',
  },
  {
    id: 6,
    text: 'TV Parental Guidelines',
  },
  {
    id: 7,
    text: 'Sitemap',
  },
];
