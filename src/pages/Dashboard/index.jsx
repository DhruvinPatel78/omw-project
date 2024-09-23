import MobileApp from "../MobileApp";
import BusinessSolutions from "../BusinessSolutions";
import Layout from "../layout";
import { useEffect, useState } from "react";
import Section8 from "../BusinessSolutions/section8";
import SendInvoice from "../BusinessSolutions/SendInvoice";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("mobileApp");
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("calculatedData")));
  }, []);

  return (
    <Layout selectedTab={selectedTab} toggleTab={setSelectedTab}>
      {selectedTab === "mobileApp" && <MobileApp />}
      {selectedTab === "businessSolutions" && <BusinessSolutions />}
      {selectedTab === "pricing" && (
        <div className={"flex flex-col gap-4"}>
          <Section8 data={data} />
          {/*<Section9 data={data} />*/}
          <SendInvoice data={data} />
        </div>
      )}
    </Layout>
  );
};
export default Dashboard;
