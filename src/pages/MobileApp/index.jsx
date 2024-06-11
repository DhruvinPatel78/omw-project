import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import { mobileDummyList } from "../constant";

const MobileApp = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <Section1 />
      <Section2 />
      <Section3
        title={"How OnMyWay Works…"}
        subTitle={"It’s Simple."}
        list={mobileDummyList}
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};
export default MobileApp;
