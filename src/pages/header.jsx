import logo from "../images/omwLogo.svg";
import Tab from "../components/Tab";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { tabDummyList } from "./constant";
const Header = ({ setSelectedTab, selectedTab, onContactClick }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        className={`flex lg:flex-row flex-col justify-between items-center relative lg:gap-0 gap-4`}
      >
        <img
          src={logo}
          className={`cursor-pointer w-[200px] order-first`}
          alt="omw-project"
          onClick={() => navigate("/")}
        />

        <Tab
          tabList={tabDummyList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          navigate={navigate}
        />
        <button
          className={
            "flex bg-primary py-2 px-4 lg:py-3 lg:px-6 uppercase font-semibold text-xs sm:text-sm rounded-full order-2 lg:order-2"
          }
          onClick={() => navigate("/business#price")}
        >
          Company Price
        </button>
      </Container>
    </>
  );
};
export default Header;
