import Header from "./header";
import Footer from "./footer";

const Layout = ({ selectedTab, setSelectedTab, children }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className={"flex flex-row gap-2"}>
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === 1 && (
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
