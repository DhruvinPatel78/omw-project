import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Layout = ({ selectedTab, toggleTab, children }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (location.pathname.split("=")[1]) {
      toggleTab(location.pathname.split("=")[1]);
    } else {
      if (location.state) {
        toggleTab(location.state?.path);
      }
    }
  }, [location]);

  return (
    <div className="w-full overflow-hidden">
      <Modal show={show} toggle={() => setShow((prev) => !prev)} />
      <div className={"flex flex-row gap-2"}>
        <Header
          selectedTab={selectedTab}
          setSelectedTab={toggleTab}
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
      <marquee
        style={{ background: "#00b050" }}
        className={"font-semibold text-base sm:text-lg md:text-xl lg:text-2xl p-1"}
        loop={"true"}
        scollAmount={"2"}
        width={"100%"}
      >
        "OnMyWay 2.0 with Archie AI… Launching This Month! - (Here Is Your
        Exclusive Preview)"
      </marquee>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
