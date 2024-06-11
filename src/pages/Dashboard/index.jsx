import MobileApp from "../MobileApp";
import BusinessSolutions from "../BusinessSolutions";
import ActionHero from "../ActionHero";

const Dashboard = ({ selectedTab, }) => {
  return (
    <>
      {selectedTab === "mobileApp" && <MobileApp />}
      {selectedTab === "businessSolutions" && <BusinessSolutions />}
      {selectedTab === "merch" && <ActionHero />}
    </>
  );
};
export default Dashboard;
