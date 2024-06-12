import Logo from "../../images/ActionHero/actionHeroTop.svg";
import ActionHeroLogos from "../../images/ActionHero/actionHeroLogos.png";
const Section1 = () => {
  return (
    <div className={"bg-[#030303] flex flex-col items-center"}>
      <div
        className={"h-screen flex flex-col gap-[32px] items-center w-full"}
        style={{
          backgroundImage: `linear-gradient(180deg, #020006 1.6%, #240E62 17.92%, #7245F2 39.04%, #8D68F9 58.93%, #CEBEFF 74.91%)`,
        }}
      >
        <div
          className={
            "flex flex-col items-center sm:gap-[35px] gap-[31px] sm:py-[65px] py-[50px] px-4 max-w-[1140px]"
          }
        >
          <span
            className={
              "text-[39px] sm:text-5xl md:text-6xl lg:text-[90px] bg-clip-text text-transparent font-extrabold opacity-30 text-center"
            }
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFF 22.98%, #914EFF 95.54%)",
            }}
          >
            Actions Speak Louder Than Words.
          </span>
          <div className={"flex flex-col gap-[18px] items-center"}>
            <span
              className={
                "text-[26px] sm:text-3xl md:text-4xl lg:text-[39px] font-extrabold bg-clip-text text-transparent text-center"
              }
              style={{
                backgroundImage:
                  "linear-gradient(91deg, #FFF 75.55%, #E3C7FF 95.38%)",
              }}
            >
              Think AI Automated Actions. Think AI Action Hero.
            </span>
            <span
              className={
                "text-center text-[14px] sm:text-lg md:text-xl lg:text-[27px] font-medium"
              }
            >
              Over 100+ plug and play automations, activated by Voice or Text,
              we bring your AI solutions to life. You dream up what to automate
              — AI Action Hero will turn it into reality.
            </span>
          </div>
        </div>
      </div>
      <div className={"h-full w-full"}>
        <div
          className={
            "relative sm:top-[-300px] top-[-200px] left-[-70px] sm:left-[-160px] md:left-[-190px] lg:left-[-150px]"
          }
        >
          <div
            className={
              "lg:w-[120%] md:w-[140%] sm:w-[150%] w-[130%] sm:h-[800px] h-[400px] bg-[#030303] rounded-[50%] p-[40px]"
            }
            style={{
              // borderTop: "40px solid rgba(133, 98, 237)",
              boxShadow: "rgba(133, 98, 237) 0px -43px 1px 0px",
              // boxShadow: "rgb(133, 98, 237) 0px -40px 3px 0px",
            }}
          >
            <div
              className={
                "w-[110%] sm:w-[100%] md:w-[100%] lg:w-[80%]  sm:h-[600px] h-[400px] rounded-[50%] relative sm:left-[10px] left-[-13px] md:left-0 lg:left-[190px] flex justify-center items-center flex-col sm:p-10 p-[50px] sm:gap-[60px] gap-[30px]"
              }
              style={{
                boxShadow: "0px 3px 53px 0px #FFF inset",
              }}
            >
              <div className={"flex flex-col items-center"}>
                <img src={Logo} alt={"Logo"} width={25} />
                <div className={"flex flex-col items-center"}>
                  <span
                    className={
                      "text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold"
                    }
                  >
                    AI Action Hero
                  </span>
                  <span
                    className={
                      "text-sm sm:text-base md:text-xl lg:text-[28px] font-semibold text-center"
                    }
                  >
                    Works With Startups, Academic Institutions, and Enterprises.
                  </span>
                </div>
              </div>
              <img src={ActionHeroLogos} alt="Action Hero" />
              <span
                className={
                  "text-sm sm:text-base md:text-xl lg:text-[28px] font-bold text-center"
                }
              >
                We Work With Everyone.
                <span className={"text-[#AFA0FF]"}>
                  {" "}
                  Welcome To Our Server Agnostic Solution.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "sm:p-[55px] p-4 mx-4 bg-[#111121] flex flex-col sm:gap-[30px] gap-[20px] items-center relative sm:top-[-200px] top-0 mb-8"
        }
        style={{
          boxShadow:
            "#7E73CC 0px 0px 0px 5px, rgb(67 57 160) 0px 0px 0px 10px, rgb(27 40 67) 0px 0px 0px 16px",
        }}
      >
        <span
          className={"text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold"}
        >
          Skip Our Waiting List
        </span>
        <button
          className={
            "sm:rounded-[10px] rounded-[4px] sm:px-[31px] px-[11px] sm:py-[17px] py-[6px] text-xs sm:text-lg md:text-xl lg:text-[24px] font-bold flex flex-row gap-[20px] items-center"
          }
          style={{
            background:
              "linear-gradient(180deg, #602DF0 28.26%, #321681 94.2%)",
          }}
        >
          Nerds Come First / Click To Schedule
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 25"
            fill="none"
            className={"sm:w-[15px] w-[10px] sm:h-[25px] h-[15px]"}
          >
            <path d="M2 2L12.5 12.5L2 23.5" stroke="white" strokeWidth="3.2" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Section1;
