import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Layout from "../layout";
import { useNavigate } from "react-router-dom";

const MediaKit = () => {
  const navigate = useNavigate();
  return (
    <Layout selectedTab={""} toggleTab={(v) => navigate(`/tab=${v}`)}>
      <div className={"flex flex-col gap-4"}>
        <Section1 />
        <div className={"max-w-1200 w-full mx-auto"}>
          <div className={"border-b border-secondary border-dashed "} />
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </Layout>
  );
};
export default MediaKit;
