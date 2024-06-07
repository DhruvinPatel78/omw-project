import Container from "../../components/Container";
import Section4 from "../MobileApp/section4";

const Section2 = () => {
  return (
    <div className={"w-full flex flex-col gap-4 sm:py-[50px] py-[30px]]"}>
      <Container
        className={
          "text-center text-[26px] sm:text-3xl md:text-4xl lg:text-[48px] text-primary font-extrabold !leading-[100%] flex flex-col sm:gap-[18px] gap-[9px]"
        }
      >
        Distracted Driving Is
        <span className="bg-millionText bg-clip-text text-transparent">
          The #1 Cause Of Employee Deaths Globally
        </span>
        <span
          className={"text-xs sm:text-lg md:text-xl lg:text-[24px] font-normal"}
        >
          According To OSHA
        </span>
      </Container>
      <Section4 />
    </div>
  );
};
export default Section2;
