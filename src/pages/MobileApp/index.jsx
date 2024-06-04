import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";

const MobileApp = () => {
  const dummyList = [
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
  return (
    <div className={"flex flex-col gap-4"}>
      <Section1 />
      <Section2 />
      <Section3
        title={"How OnMyWay Works…"}
        subTitle={"It’s Simple."}
        list={dummyList}
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};
export default MobileApp;
