import logo from "../images/omwLogo.svg";
import Tab from "../components/Tab";
import Container from "../components/Container";
const Header = ({ setSelectedTab, selectedTab }) => {
  const tabList = [
    {
      id: 1,
      title: "Mobile App",
    },
    {
      id: 2,
      title: "Business Solutions",
    },
    {
      id: 3,
      title: "Merch",
    },
  ];
  return (
    <Container
      className={`flex md:flex-row flex-col justify-center items-center relative md:gap-0 gap-4 ${
        selectedTab === 1 ? "md:pt-4 pr-0 pt-0 md:pr-4" : ""
      }`}
    >
      <div
        className={`md:block flex ${
          selectedTab === 1 ? "justify-between" : "justify-center"
        } flex-row md:w-[auto] w-full gap-2`}
      >
        <img
          src={logo}
          className="md:absolute relative md:left-4 left-0 md:bottom-4 bottom-0"
          alt="omw-project"
        />
        {selectedTab === 1 && (
          <button
            className={"md:hidden flex bg-primary p-4 uppercase font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px]"}
          >
            Contact Sales
          </button>
        )}
      </div>

      <Tab
        tabList={tabList}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </Container>
  );
};
export default Header;
