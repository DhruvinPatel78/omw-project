import Section6BG from "../../images/MobileAPP/section6BG.png";
import Container from "../../components/Container";
import Iphone from "../../images/MobileAPP/section6Iphone.png";
import CardWithBorder from "../../components/CardWithBorder";
import { theoryList } from "../constant";
const Section6 = () => {
  return (
    <div className={"w-full flex flex-col sm:gap-[50px] gap-[24px]"}>
      <Container
        className={
          "text-center text-[28px] sm:text-5xl md:text-6xl lg:text-70 text-primary font-extrabold py-0"
        }
      >
        <span className="bg-millionText bg-clip-text text-transparent">
          The Toostie Roll
        </span>{" "}
        Theory
      </Container>
      <div
        className={
          "h-full w-full bg-no-repeat bg-left flex justify-center items-center bg-cover"
        }
        style={{ backgroundImage: `url(${Section6BG})` }}
      >
        <Container className="flex items-center justify-center bg-[#0a0e14cc]">
          <CardWithBorder
            className={
              "sm:p-16 p-7 px-4 flex flex-col sm:gap-8 gap-4 justify-center items-center"
            }
          >
            <div
              className="row-span-full w-[65%] h-full lg:hidden flex justify-center items-center"
              key={`card_${Iphone}`}
            >
              <img src={Iphone} alt="Iphone" />
            </div>
            <div className="grid grid-rows-3 grid-flow-col sm:gap-4 gap-2 w-full">
              {theoryList?.map((item, index) => {
                return item.isCenter ? (
                  <div
                    className="row-span-full w-full h-full hidden lg:flex justify-center items-center"
                    key={`card_${item.id + index}`}
                  >
                    <img src={item?.img} alt="Iphone" />
                  </div>
                ) : (
                  <div
                    className="row-span-auto w-full"
                    key={`card_${item.id + index}`}
                  >
                    <div
                      className={
                        "sm:w-[240px] w-[150px] sm:h-[240px] h-[150px] bg-no-repeat bg-contain bg-top flex rounded-md"
                      }
                      style={{ backgroundImage: `url(${item?.img})` }}
                    >
                      <div
                        className={
                          "bg-toostieCardFooter sm:p-4 p-2 w-full rounded-md flex items-start justify-end flex-col sm:gap-[5px] gap-[2px]"
                        }
                      >
                        <span
                          className={
                            "text-[#182455] sm:text-[15px] text-[10px] font-bold leading-normal"
                          }
                        >
                          {item?.title}
                        </span>
                        {item.description && (
                          <span
                            className={
                              "text-[#182455] sm:text-[9px] text-[6px] leading-normal font-normal"
                            }
                          >
                            {item.description}
                          </span>
                        )}

                        <div
                          className={"border-b border-[#7e7ebca6] w-full"}
                        ></div>
                        <div
                          className={
                            "flex flex-row justify-between items-center w-full"
                          }
                        >
                          <div className={"flex flex-col"}>
                            <span
                              className={
                                "text-[#00CB17] sm:text-[10px] text-[6px] font-medium"
                              }
                            >
                              {item?.subTitle}
                            </span>
                            <span
                              className={
                                "text-[#182455] sm:text-[9px] text-[4px] font-normal"
                              }
                            >
                              {item?.subDescription}
                            </span>
                          </div>
                          <button
                            className={
                              "bg-primary sm:p-2 p-0 rounded-full sm:w-[50px] w-[25px] sm:text-[100%] text-[7px] sm:font-thin font-bold"
                            }
                          >
                            get
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "text-[16px] sm:text-2xl md:text-3xl lg:text-[37px] font-bold text-white sm:text-left text-center"
              }
            >
              <span className={"text-primary"}>Rewards, Not Punishment</span> -
              Create Positive Outcomes
            </div>
          </CardWithBorder>
        </Container>
      </div>
    </div>
  );
};
export default Section6;
