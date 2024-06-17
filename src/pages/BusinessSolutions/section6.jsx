import Container from "../../components/Container";
import CardWithBorder from "../../components/CardWithBorder";

const Section6 = () => {
  return (
    <div className={"w-full flex flex-col sm:gap-[60px] gap-[20px] py-8"}>
      <Container className={"flex flex-col sm:gap-[32px] gap-[8px]"}>
        <div
          className={
            "text-center text-[26px] sm:text-5xl md:text-6xl lg:text-70 text-primary font-extrabold !leading-[100%]"
          }
        >
          <span className="bg-millionText bg-clip-text text-transparent">
            Simple and{" "}
          </span>
          Affordable
        </div>
        <span
          className={
            "text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold"
          }
        >
          OnMyWay can be integrated into your company's operations in just days.
        </span>
      </Container>
      <div
        className={`h-full w-full bg-no-repeat bg-left flex justify-center items-center bg-cover bg-none sm:bg-sectionBG`}
      >
        <Container className="flex items-center justify-center">
          <CardWithBorder
            className={
              "sm:py-[42px] py-[18px] px-4 flex flex-col gap-[19px] justify-center items-center"
            }
          >
            <span
              className={
                "text-[10px] sm:text-base md:text-lg lg:text-[20px] max-w-[810px] font-semibold text-center"
              }
            >
              We provide and manage a zero-tolerance distracted driving policy
              and offer over{" "}
              <span className={"text-primary"}>
                $100 million in prizes and rewards to encourage safe driving.
              </span>
            </span>
            <div className={"flex flex-col"}>
              <span
                className={
                  "text-xs sm:text-lg md:text-xl lg:text-[22px] text-center font-bold"
                }
              >
                For as low as
              </span>
              <span className="bg-cardBorder bg-clip-text text-transparent text-[80px] sm:text-8xl md:text-9xl lg:text-[215px] font-black leading-[100%]">
                $10
              </span>
              <span
                className={
                  "text-xs sm:text-lg md:text-xl lg:text-[22px] text-center font-bold mt-2"
                }
              >
                per employee, per month
              </span>
            </div>
            <span
              className={
                "text-[10px] sm:text-base md:text-lg lg:text-xl max-w-[740px] font-semibold text-center"
              }
            >
              Every employee receives personalized account with Archie Voice AI,{" "}
              <span className={"text-primary"}>
                enhancing safety and productivity
              </span>
            </span>
          </CardWithBorder>
        </Container>
      </div>
    </div>
  );
};
export default Section6;
