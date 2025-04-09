import Iphone1 from "../images/BusinsessSolution/b1.png";
import Iphone2 from "../images/MediaKit/m2Iphone.png";
import Iphone3 from "../images/MobileAPP/section6Iphone.png";
import Iphone4 from "../images/MediaKit/m4Iphone.png";
import Iphone5 from "../images/MediaKit/m5Iphone.png";
import Iphone6 from "../images/MediaKit/m6Iphone.png";
import logo from "../images/MediaKit/logo1.png";
import logo2 from "../images/MediaKit/logo2.png";
import logo3 from "../images/MediaKit/logo3.png";
import logo4 from "../images/MediaKit/logo4.png";
import logo5 from "../images/MediaKit/logo5.png";
import logo6 from "../images/MediaKit/logo6.png";
import CashPrize from "../images/MobileAPP/cashPrizes.png";
import LuxuryPrize from "../images/MobileAPP/luxuryPrize.png";
import TuitionPrize from "../images/MobileAPP/tuitionPrize.png";
import LuxuryReward from "../images/MobileAPP/luxuryReward.png";
import TravelReward from "../images/MobileAPP/travelReward.png";
import HotelGiftCard from "../images/MobileAPP/hotel_gift_card.png";
import Airfare from "../images/MobileAPP/RoundtripAirfareHotel.png";
import NightCruise from "../images/MobileAPP/NightCruise.png";
import Iphone from "../images/MobileAPP/section6Iphone.png";
import LuxuryResort from "../images/MobileAPP/luxuryresort.png";
import StayGetaway from "../images/MobileAPP/staygetaway.png";
import Rent from "../images/MobileAPP/rentRoom.png";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/x.svg";
import LinkedIn from "../images/in.svg";
import Instagram from "../images/instragram.svg";
import Youtube from "../images/yutube.svg";

export const detectDevice = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i)
  ) {
    return "android";
  } else if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/Mac/i)
  ) {
    return "ios";
  } else {
    return "computer";
  }
};

export const tabDummyList = [
  {
    id: 1,
    title: "Mobile App",
    key: "mobileApp",
    path: "/",
  },
  {
    id: 2,
    title: "Business Solutions",
    key: "business",
    path: "/business",
  },
  // {
  //   id: 3,
  //   title: "Price",
  //   key: "business",
  //   path: '/business#price'
  // },
  {
    id: 3,
    title: "Merch",
    key: "merch",
  },
];

export const socialMediaDummyList = [
  {
    id: 1,
    icon: Facebook,
    title: "Facebook",
    href: "https://www.facebook.com/OnMyWayDrives/",
  },
  {
    id: 2,
    icon: Twitter,
    title: "Twitter",
    href: "https://twitter.com/OnMyWayDrives",
  },
  {
    id: 3,
    icon: LinkedIn,
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/onmywaycash/about/",
  },
  {
    id: 4,
    icon: Instagram,
    title: "Instagram",
    href: "https://www.instagram.com/onmywaydrives/",
  },
  {
    id: 5,
    icon: Youtube,
    title: "Youtube",
    href: "https://www.youtube.com/channel/UCTj-r7jknd9cYBliuJgBOIg?app=desktop",
  },
];

export const resourceDummyList = [
  {
    id: 1,
    title: "Press / Media Kit",
    href: "/mediaKit",
  },
  {
    id: 2,
    title: "Careers",
    href: "/",
  },
  {
    id: 3,
    title: "OnMyWay Foundation 501(c)3",
    href: "http://onmywaydrives.org/",
    external: true
  },
  {
    id: 4,
    title: "User Support",
    href: "/",
  },
];

export const IphoneList = [
  {
    id: Math.random(),
    img: Iphone1,
  },
  {
    id: Math.random(),
    img: Iphone2,
  },
  {
    id: Math.random(),
    img: Iphone3,
  },
  {
    id: Math.random(),
    img: Iphone4,
  },
  {
    id: Math.random(),
    img: Iphone5,
  },
  {
    id: Math.random(),
    img: Iphone6,
  },
];

export const logoList = [
  {
    id: 1,
    logo: logo,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
  {
    id: 6,
    logo: logo6,
  },
];

export const prizeList = [
  {
    title: "Cash Prizes",
    img: CashPrize,
    id: 1,
  },
  {
    title: "Luxury Prizes",
    img: LuxuryPrize,
    id: 2,
  },
  {
    title: "Tuition+ Prizes",
    img: TuitionPrize,
    id: 3,
  },
  {
    title: "Luxury Rewards",
    img: LuxuryReward,
    id: 4,
  },
  {
    title: "Travel Rewards",
    img: TravelReward,
    id: 5,
  },
];

export const mobileDummyList = [
  {
    id: Math.random(),
    title: "Download the App",
    description:
      "Simply download the OnMyWay app to start earning rewards for every mile you and your friend's drive.",
  },
  {
    id: Math.random(),
    title: "Redeem Rewards",
    description:
      "Use your OnMyWay Dollars for a over $100 Million in prizes and rewards, including hotel gift cards, travel, tuition, gas, instant win contests, and much more.",
  },
  {
    id: Math.random(),
    title: "Hands-Free",
    description:
      "Archie AI ensures your eyes stay on the road and your hands stay on the wheel while managing all your tasks through voice commands.",
  },
  {
    id: Math.random(),
    title: "Your Privacy",
    description: "We never sell or share your data.",
  },
  {
    id: Math.random(),
    title: "No Limits",
    description:
      "Enjoy unlimited miles, unlimited referrals, and unlimited lives saved.",
  },
];

export const theoryList = [
  {
    id: 1,
    img: HotelGiftCard,
    title: "$100 Hotel Gift Card",
    description: "Over 400,000 hotels and Resorts worldwide.",
    subTitle: "$500 OnMyWay Dollars",
    subDescription: "24 Months To Travel",
    isCenter: false,
  },
  {
    id: 2,
    img: Airfare,
    title: "Roundtrip Airfare & Hotel!",
    description: "Over 20 Destinations In The USA, 2 People",
    subTitle: "$5000 OnMyWay Dollars",
    subDescription: "24 Months To Travel",
    isCenter: false,
  },
  {
    id: 3,
    img: NightCruise,
    title: "5 Day / 4 Night Cruise",
    description: "Carnival Cruise Lines, Royal Caribbean, No...",
    subTitle: "$4500 OnMyWay Dollars",
    subDescription: "24 Months To Travel",
    isCenter: false,
  },
  {
    id: 4,
    img: Iphone,
    isCenter: true,
  },
  {
    id: 5,
    img: LuxuryResort,
    title: "7 nights luxury resort getaway 3500+ locations",
    description: null,
    subTitle: "$10,000 OnMyWay Dollars",
    subDescription: "12 Months To Resort",
    isCenter: false,
  },
  {
    id: 6,
    img: StayGetaway,
    title: "4 night hotel stay getaway",
    description: null,
    subTitle: "$3125 OnMyWay Dollars",
    subDescription: "24 Months To Resort",
    isCenter: false,
  },
  {
    id: 7,
    img: Rent,
    title: "$500 Hotel Gift Card",
    description: "Over 400,000 hotels and Resorts worldwide.",
    subTitle: "$2500 OnMyWay Dollars",
    subDescription: "24 Months To Travel",
    isCenter: false,
  },
];

export const businessDummyList = [
  {
    id: Math.random(),
    title: "Protect Your Employees and Community",
    description:
      "Implementing OnMyWay significantly reduces the risk of distracted driving incidents, safeguarding your workforce and the community.",
  },
  {
    id: Math.random(),
    title: "Eliminate Civil and Criminal Liabilities",
    description:
      "Demonstrate your commitment to safety with a zero-tolerance distracted driving policy and avoid potential legal repercussions.",
  },
  {
    id: Math.random(),
    title: "Boost Productivity",
    description:
      "OnMyWay and Archie increase productivity by allowing employees to manage their tasks safely while driving.",
  },
  {
    id: Math.random(),
    title: "Enhance Reputation and Market Value",
    description:
      'Improve your company\'s reputation, leading to a "reputation dividend" worth up to 11% of market capitalization.',
  },
  {
    id: Math.random(),
    title: "Save Lives and Reduce Turnover",
    description:
      "Creating a safer work environment reduces employee turnover and saves lives, which is invaluable.",
  },
  {
    id: Math.random(),
    title: "Drive Sales Growth",
    description:
      "Companies using OnMyWay have reported significant sales enhancements.",
  },
];

export const voiceList = [
  {
    id: 1,
    title: "Personalized AI Assistant",
    description:
      "Archie can send text messages, make phone calls, check flights, search the web, manage schedules, set reminders, and provide turn-by-turn navigation—all through voice commands.",
  },
  {
    id: 2,
    title: "Real-Time Updates and Management",
    description:
      "Archie can automatically text clients and colleagues with real-time updates, manage inventory and assets, and handle temporary employee directives and checklists.",
  },
  {
    id: 3,
    title: "Convenient Services",
    description:
      "From booking hotel rooms and flights to scheduling restaurant reservations and hair appointments, Archie covers it all.",
  },
  {
    id: 4,
    title: "Enhanced Productivity",
    description:
      "Employees can ask any question on any topic, manage in-app actions and answers, and access all requested information from their phone or computer once they reach their destination.",
  },
  {
    id: 5,
    title: "Safety and Compliance",
    description:
      "Implementing OnMyWay ensures compliance with safety regulations, protecting both your employees and your company's interests.",
  },
];
