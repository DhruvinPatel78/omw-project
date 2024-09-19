import MobileApp from "../MobileApp";
import BusinessSolutions from "../BusinessSolutions";
import Layout from "../layout";
import { useState } from "react";
import Section8 from "../BusinessSolutions/section8";
import Section9 from "../BusinessSolutions/section9";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("mobileApp");
  const location = useLocation();
  return (
    <Layout selectedTab={selectedTab} toggleTab={setSelectedTab}>
      {selectedTab === "mobileApp" && <MobileApp />}
      {selectedTab === "businessSolutions" && <BusinessSolutions />}
      {selectedTab === "pricing" && (
        <div className={"flex flex-col gap-4"}>
          <Section8 data={location?.state} />
          <Section9 />
        </div>
      )}
    </Layout>
  );
};
export default Dashboard;
