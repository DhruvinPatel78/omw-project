import Container from "../../components/Container";
import BG from "../../images/BusinsessSolution/b8BG.png";
import CardWithBorder from "../../components/CardWithBorder";
const Section8 = ({ data }) => {
  return (
    <div className={"w-full flex flex-col gap-4 py-8"}>
      <Container
        className={
          "text-center text-[26px] sm:text-3xl md:text-6xl lg:text-70 text-primary font-extrabold !leading-[100%] "
        }
      >
        <span className="bg-millionText bg-clip-text text-transparent">
          {data?.companyName || "Live Nation"}{" "}
        </span>{" "}
        Pricing
      </Container>
      <div
        className={
          "h-full w-full bg-no-repeat bg-left flex justify-center items-center"
        }
        style={{ backgroundImage: `url(${BG})` }}
      >
        <Container className="flex items-center justify-center">
          <CardWithBorder
            className={
              "sm:py-12 py-6 px-4 flex flex-col gap-8 justify-center items-center"
            }
          >
            <div
              className={
                "w-full flex flex-col sm:gap-[37px] gap-[10px] justify-center items-center"
              }
            >
              <span
                className={
                  "text-[10px] sm:text-xl md:text-2xl lg:text-[34px] font-bold"
                }
              >
                Number of Employees Protected
              </span>
              <div
                className={
                  "flex md:flex-row flex-col items-center md:gap-4 text-[28px] sm:text-5xl md:text-6xl lg:text-[73px] font-black"
                }
              >
                <span className="bg-cardBorder bg-clip-text text-transparent whitespace-nowrap">
                  {new Intl.NumberFormat("en-US").format(
                    data && data?.employees - 50 + 1
                  ) +
                    " - " +
                    new Intl.NumberFormat("en-US").format(data?.employees) ||
                    "0"}
                </span>
                <span className="bg-millionText bg-clip-text text-transparent">
                  Employees
                </span>
              </div>
              <span
                className={
                  "font-bold text-[10px] sm:text-lg md:text-xl lg:text-[22px]"
                }
              >
                Employees Can Be Located Anywhere
              </span>
            </div>
            <div
              className={
                "border-b border-secondary border-dashed max-w-[900px] w-full"
              }
            />
            <div
              className={
                "w-full flex flex-col sm:gap-[37px] gap-[10px]justify-center items-center"
              }
            >
              <span
                className={
                  "text-[12px] sm:text-xl md:text-2xl lg:text-[34px] font-bold"
                }
              >
                Monthly Pricing
              </span>
              <span className="bg-cardBorder bg-clip-text text-transparent whitespace-nowrap text-[42px] sm:text-6xl md:text-9xl lg:text-[140px] font-black">
                $
                {new Intl.NumberFormat("en-US").format(data?.employees * 15) ||
                  "0"}
              </span>
              <span
                className={
                  "font-bold text-[10px] sm:text-lg md:text-xl lg:text-[22px]"
                }
              >
                {data?.term || "12"} Month Term
              </span>
            </div>
          </CardWithBorder>
        </Container>
      </div>
    </div>
  );
};
export default Section8;
