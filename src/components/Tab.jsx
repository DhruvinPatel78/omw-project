const TabPage = ({ tabList, selectedTab, setSelectedTab }) => {
  return (
    <div className={"flex flex-row justify-center"}>
      {tabList?.map((item, index) => {
        const lastIndex = tabList?.map((item, index) => index)[
          tabList.length - 1
        ];
        return (
          <button
            className={`p-2 border border-secondary border-r-0 border-l-0 px-8
               ${
                 index === 0
                   ? "rounded-s-full border-l-[1px]"
                   : index === lastIndex && "rounded-e-full border-r-[1px]"
               } 
               font-semibold text-sm bg-[#1B2027] ${
                 index === selectedTab
                   ? "text-primary transition-transform"
                   : ""
               }`}
            key={`tab_${index}`}
            onClick={() => setSelectedTab(index)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};
export default TabPage;
