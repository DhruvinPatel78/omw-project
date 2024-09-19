import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "../MobileApp/section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9 from "./section9";
import { businessDummyList } from "../constant";

const BusinessSolutions = () => {
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
        list={businessDummyList}
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
      {/*<Section8 />*/}
      {/*<Section9 />*/}
      {/*<Section10 />*/}
    </div>
  );
};
export default BusinessSolutions;
