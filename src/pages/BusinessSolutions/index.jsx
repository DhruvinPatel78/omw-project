import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "../MobileApp/section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";

const BusinessSolutions = () => {
  const dummyList = [
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
  return (
    <div className={"flex flex-col gap-4"}>
      <Section1 />
      <div className={"max-w-1200 w-full mx-auto"}>
        <div className={"border-b border-secondary border-dashed "} />
      </div>
      <Section2 />
      <Section3
        title={"Transform Your Company"}
        subTitle={"with OnMyWay"}
        list={dummyList}
      />
      <div className={"max-w-1200 w-full mx-auto"}>
        <div className={"border-b border-secondary border-dashed "} />
      </div>
      <Section4 />
      <Section5 />
      <div className={"max-w-1200 w-full mx-auto"}>
        <div className={"border-b border-secondary border-dashed "} />
      </div>
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
};
export default BusinessSolutions;
