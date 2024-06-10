import MobileApp from "../MobileApp";
import BusinessSolutions from "../BusinessSolutions";

const Dashboard = ({ selectedTab, }) => {
  return (
    <>
      {selectedTab === 0 && <MobileApp />}
      {selectedTab === 1 && <BusinessSolutions />}
    </>
  );
};
export default Dashboard;
