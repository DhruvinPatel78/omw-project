import Container from "../../components/container";
import Section4 from "../MobileApp/section4";

const Section2 = () => {
  return (
    <div className={"w-full flex flex-col gap-4 py-8"}>
      <Container
        className={
          "text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold !leading-[100%] flex flex-col gap-2"
        }
      >
        Distracted Driving Is
        <span className="bg-millionText bg-clip-text text-transparent">
          The #1 Cause Of Employee Deaths Globally
        </span>
        <span
          className={"text-base sm:text-lg md:text-xl lg:text-2xl font-normal"}
        >
          According To OSHA
        </span>
      </Container>
      <Section4 />
    </div>
  );
};
export default Section2;
