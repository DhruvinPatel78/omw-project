import MobileApp from "../MobileApp";
import BusinessSolutions from "../BusinessSolutions";

const Dashboard = ({ selectedTab, }) => {
  return (
    <>
      {selectedTab === "mobileApp" && <MobileApp />}
      {selectedTab === "businessSolutions" && <BusinessSolutions />}
    </>
  );
};
export default Dashboard;
