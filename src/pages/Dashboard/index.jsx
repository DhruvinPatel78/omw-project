import MobileApp from "../MobileApp";
import BusinessSolutions from "../BusinessSolutions";
import Layout from "../layout";
import { useState } from "react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("mobileApp");

  return (
    <Layout selectedTab={selectedTab} toggleTab={setSelectedTab}>
      {selectedTab === "mobileApp" && <MobileApp />}
      {selectedTab === "businessSolutions" && <BusinessSolutions />}
    </Layout>
  );
};
export default Dashboard;
