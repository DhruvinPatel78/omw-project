import Container from "../../components/container";

const Section3 = () => {
  const dummyList = [
    {
      id: Math.random(),
      title: "Download the App",
      description:
        "Simply download the OnMyWay app to start earning rewards for every mile you and your friend's drive.",
    },
    {
      id: Math.random(),
      title: "Redeem Rewards",
      description:
        "Use your OnMyWay Dollars for a over $100 Million in prizes and rewards, including hotel gift cards, travel, tuition, gas, instant win contests, and much more.",
    },
    {
      id: Math.random(),
      title: "Hands-Free",
      description:
        "Archie AI ensures your eyes stay on the road and your hands stay on the wheel while managing all your tasks through voice commands.",
    },
    {
      id: Math.random(),
      title: "Your Privacy",
      description: "We never sell or share your data.",
    },
    {
      id: Math.random(),
      title: "No Limits",
      description:
        "Enjoy unlimited miles, unlimited referrals, and unlimited lives saved.",
    },
  ];
  return (
    <Container className={"w-full flex justify-center items-center py-10"}>
      <div className={"w-full flex flex-col gap-10"}>
        <div
          className={
            "font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-70 flex flex-col"
          }
        >
          <span>How OnMyWay Works…</span>
          <span className={"text-primary"}>It’s Simple.</span>
        </div>
        <div className={"flex flex-col"}>
          {dummyList?.map((item, index) => {
            const lastItem = dummyList[dummyList?.length - 1];
            return (
              <div
                className={`flex flex-row gap-8 py-6 ${
                  item.id === lastItem.id ? "border-0" : "border-b"
                } border-secondary`}
                key={`item-${index}`}
              >
                <span
                  className={
                    "text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] min-w-[200px] sm:min-w-[200px] md:min-w-[290px] lg:min-w-[323px]  whitespace-nowrap"
                  }
                >
                  {item.title}:
                </span>
                <span
                  className={
                    "font-semibold text-xl sm:text-2xl md:text-[26px] lg:text-[28px]"
                  }
                >
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Section3;
