const TabPage = ({ tabList, selectedTab, setSelectedTab, navigate }) => {
  return (
    <div
      className={
        "flex flex-row justify-center sm:self-auto self-center sm:w-auto w-full"
      }
    >
      {tabList?.map((item, index) => {
        const lastIndex = tabList?.map((item, index) => index)[
          tabList.length - 1
        ];
        return (
          <button
            className={`sm:pb-[15px] sm:pt-[13px] py-[9px] border border-secondary border-r-0 border-l-0 sm:px-[50px] px-[17px] w-full
               ${
                 index === 0
                   ? "rounded-s-full border-l-[1px]"
                   : index === lastIndex && "rounded-e-full border-r-[1px]"
               } 
               font-semibold sm:text-sm text-xs bg-[#1B2027] whitespace-nowrap ${
                 item.key === selectedTab
                   ? "text-primary transition-transform"
                   : ""
               }`}
            key={`tab_${index}`}
            onClick={() => {
              if (item.key === "merch") {
                window.location.href = "https://fc9921-2f.myshopify.com/";
              } else {
                setSelectedTab(item?.key);
                navigate("", { state: { path: item?.key } });
              }
            }}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};
export default TabPage;
