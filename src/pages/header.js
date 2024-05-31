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
    <Container className={"w-full flex justify-center items-end relative"}>
      <img src={logo} className="logo absolute left-4" alt="omw-project" />
      <Tab
        tabList={tabList}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </Container>
  );
};
export default Header;
