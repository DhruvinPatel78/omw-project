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
        className={`flex md:flex-row flex-col justify-center items-center relative md:gap-0 gap-4`}
      >
        <div
          className={`md:block flex justify-start items-center flex-row md:w-[auto] w-full gap-2`}
        >
          <img
            src={logo}
            className={`md:absolute relative md:left-4 left-0 md:bottom-[20px] bottom-0 cursor-pointer`}
            alt="omw-project"
            onClick={() => navigate("/")}
          />
          <button
            className={
              "md:hidden flex bg-primary p-4 uppercase font-semibold text-xs sm:text-sm absolute right-0 top-0"
            }
            onClick={() => navigate("/business#price")}
          >
            Company Price
          </button>
        </div>

        <Tab
          tabList={tabDummyList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          navigate={navigate}
        />
      </Container>
      <button
        className={
          "hidden md:flex w-[200px] h-10 sm:h-[50px] uppercase bg-primary font-semibold text-xs sm:text-sm justify-center items-center absolute right-0 top-0"
        }
        onClick={() => navigate("/business#price")}
      >
        Company Price
      </button>
    </>
  );
};
export default Header;
