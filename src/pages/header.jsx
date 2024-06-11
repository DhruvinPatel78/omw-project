import logo from "../images/omwLogo.svg";
import Tab from "../components/Tab";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { tabDummyList } from "./constant";
const Header = ({ setSelectedTab, selectedTab }) => {
  const navigate = useNavigate();
  return (
    <Container
      className={`flex md:flex-row flex-col justify-center items-center relative md:gap-0 gap-4`}
    >
      <div
        className={`md:block flex 
        ${
          selectedTab === "businessSolutions"
            ? "justify-start"
            : "justify-center items-center"
        } flex-row md:w-[auto] w-full gap-2`}
      >
        <img
          src={logo}
          className={`md:absolute relative md:left-4 left-0 md:bottom-[20px] bottom-0 cursor-pointer`}
          alt="omw-project"
          onClick={() => navigate("/")}
        />
        {selectedTab === "businessSolutions" && (
          <button
            className={
              "md:hidden flex bg-primary p-4 uppercase font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] absolute right-0 top-0"
            }
          >
            Contact Sales
          </button>
        )}
      </div>

      <Tab
        tabList={tabDummyList}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        navigate={navigate}
      />
    </Container>
  );
};
export default Header;
