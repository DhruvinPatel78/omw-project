import logo from "../images/omwLogo.svg";
import Tab from "../components/Tab";
import Container from "../components/container";
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
    <Container className={"w-full flex sm:flex-row flex-col justify-center items-end relative sm:gap-0 gap-4"}>
      <div className={"sm:block flex justify-center sm:w-[auto] w-full"}>
        <img src={logo} className="logo sm:absolute relative sm:left-4 left-0 sm:bottom-4 bottom-0" alt="omw-project"/>
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
