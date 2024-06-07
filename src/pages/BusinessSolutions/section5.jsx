import Container from "../../components/Container";
import Section2 from "../MobileApp/section2";

const Section5 = () => {
  return (
    <div className={"w-full flex flex-col gap-4 py-4"}>
      <Container
        className={
          "text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold !leading-[100%] "
        }
      >
        Rewards, Not Punishment
        <span className="bg-millionText bg-clip-text text-transparent">
          - Create Positive Outcomes
        </span>
      </Container>
      <Section2 />
      <Container className={"flex justify-center flex-col gap-2 items-center text-xs sm:text-lg md:text-xl lg:text-[22px] font-semibold"}>
        <span>OnMyWay Manages All Prizes and Rewards</span>
        <div className={"flex sm:flex-row flex-col items-center justify-center font-semibold"}>
          <div className={"flex flex-row gap-2 items-center "}>
            <div className={"w-[8px] h-[8px] rounded-full bg-primary"} />
            <span className={"text-xs sm:text-lg md:text-xl lg:text-[22px]"}>
              They Are Included With Your Subscription{" "}
            </span>
          </div>
          <div className={"pl-2 flex flex-row gap-2 items-center font-semibold"}>
            <div className={"w-[8px] h-[8px] rounded-full bg-primary"} />
            <span className={"text-xs sm:text-lg md:text-xl lg:text-[22px]"}>
              No Additional Costs{" "}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Section5;
