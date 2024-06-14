import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Layout = ({ selectedTab, setSelectedTab, children }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
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
  console.log("selectedTab", selectedTab, show);
  return (
    <div className="w-full overflow-hidden">
      <Modal show={show} toggle={() => setShow((prev) => !prev)} />
      <div className={"flex flex-row gap-2"}>
        <Header
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onContactClick={() => setShow(true)}
        />
        {selectedTab === "businessSolutions" && (
          <button
            className={
              "hidden md:flex absolute right-0 bg-primary px-[1.28rem] py-[1.7rem] uppercase font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px]"
            }
            onClick={() => {
              setShow(true);
            }}
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
