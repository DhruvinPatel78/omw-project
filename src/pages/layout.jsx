import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ selectedTab, setSelectedTab, children }) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.split("=")[1]) {
      setSelectedTab(location.pathname.split("=")[1]);
    } else {
      if (location.state) {
        setSelectedTab(location.state?.path);
      }
    }
  }, [location]);
  console.log("location", location);
  console.log("selectedTab", selectedTab);
  return (
    <div className="w-full overflow-hidden">
      <div className={"flex flex-row gap-2"}>
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "businessSolutions" && (
          <button
            className={
              "hidden md:flex absolute right-0 bg-primary px-[1.28rem] py-[1.7rem] uppercase font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px]"
            }
          >
            Contact Sales
          </button>
        )}
      </div>
      <div className={"border-b border-secondary"}></div>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
