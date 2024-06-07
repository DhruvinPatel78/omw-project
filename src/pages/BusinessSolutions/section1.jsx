import Container from "../../components/Container";
import B1Iphone from "../../images/BusinsessSolution/b1.png";
import B2Iphone from "../../images/BusinsessSolution/b2.png";
import B3Iphone from "../../images/BusinsessSolution/b3.png";
import B4Iphone from "../../images/BusinsessSolution/b4.png";
const Section1 = () => {
  return (
    <div className={"w-full flex flex-col sm:gap-[40px] gap-[32px] sm:py-[60px] py-[30px]"}>
      <Container
        className={
          "text-center text-[26px] sm:text-3xl md:text-4xl lg:text-[45px] text-primary font-extrabold !leading-[140%]"
        }
      >
        <span className="bg-millionText bg-clip-text text-transparent">
          Protect Your Company
        </span>{" "}
        and Get Your Employees Home Safe Tonight with OnMyWay
      </Container>
      <div
        className={`h-full w-full bg-no-repeat bg-left flex justify-center items-center bg-cover bg-none sm:bg-sectionBG`}
      >
        <Container
          className={
            "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 place-items-center sm:flex-nowrap flex-wrap sm:justify-normal justify-center"
          }
        >
          <img src={B1Iphone} alt={"B1Iphone"} />
          <img src={B2Iphone} alt={"B2Iphone"} />
          <img src={B3Iphone} alt={"B3Iphone"} />
          <img src={B4Iphone} alt={"B4Iphone"} />
        </Container>
      </div>
      <div
        className={
          "max-w-1200 mx-auto p-4 w-full text-center text-xs sm:text-lg md:text-xl lg:text-[22px] font-bold"
        }
      >
        Prevent Distracted Driving Crashes and Boost Productivity Safely. Your
        Company, Employees, Families, and Community Depend on It.
      </div>
    </div>
  );
};
export default Section1;
