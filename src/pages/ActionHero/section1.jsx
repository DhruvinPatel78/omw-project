import Logo from "../../images/ActionHero/actionHeroTop.svg";
import ActionHeroLogos from "../../images/ActionHero/actionHeroLogos.png";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import DownArrow from "../../images/downArrow.png";
import { IoIosArrowForward } from "react-icons/io";
const Section1 = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={
        "bg-[#030303] flex flex-col items-center overflow-x-hidden gap-[2rem]"
      }
    >
      <div
        className={
          "min-h-screen h-full flex flex-col gap-[32px] items-center w-full"
        }
        style={{
          backgroundImage: `linear-gradient(180deg, #020006 1.6%, #240E62 17.92%, #7245F2 39.04%, #8D68F9 58.93%, #CEBEFF 74.91%)`,
        }}
      >
        <div
          className={
            "flex flex-col items-center sm:gap-[35px] gap-[31px] sm:py-[65px] py-[50px] px-4 max-w-[1140px] text-[#EFF2FF]"
          }
        >
          <span
            className={
              "text-[39px] sm:text-5xl md:text-6xl lg:text-[90px] bg-clip-text text-transparent font-extrabold opacity-30 text-center leading-[120%]"
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
                "text-[26px] sm:text-3xl md:text-4xl lg:text-[39px] font-extrabold bg-clip-text text-transparent text-center leading-[120%]"
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
                "text-center text-[14px] sm:text-lg md:text-xl lg:text-[27px] font-medium leading-[147%]"
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
            "relative sm:top-[-300px] top-[-200px] left-[-80px] sm:left-[-30px] md:left-[-50px] lg:left-[-70px] xl:left-[-80px]"
          }
        >
          <div
            className={
              "sm:w-[110%] w-[140%] sm:h-[800px] h-[400px] bg-[#030303] rounded-[50%] p-[40px] flex items-start justify-center"
            }
            style={{
              boxShadow: "rgb(133, 98, 237) 0px -40px 2px 3px",
            }}
          >
            <div
              className={
                "w-full sm:w-[80%] md:w-[80%] lg:w-[80%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-[50%] flex justify-center items-center flex-col  p-[3rem] sm:p-10 md:p-16 lg:p-16  gap-[20px] sm:gap-[30px] md:gap-[30px] lg:gap-[60px] text-[#EFF2FF]"
              }
              style={{
                boxShadow: "0px 3px 53px 0px rgb(255 255 255 / 35%) inset",
              }}
            >
              <div
                className={
                  "flex flex-col items-center sm:gap-[27px] gap-[18px]"
                }
              >
                <img src={Logo} alt={"Logo"} width={25} />
                <div
                  className={
                    "flex flex-col items-center sm:gap-[19px] gap-[13px]"
                  }
                >
                  <span
                    className={
                      "text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold"
                    }
                  >
                    AI Action Hero
                  </span>
                  <span
                    className={
                      "text-sm sm:text-base md:text-xl lg:text-[28px] font-semibold text-center opacity-[0.5] text-[#EFF2FF]"
                    }
                  >
                    Works With Startups, Academic Institutions, and Enterprises.
                  </span>
                </div>
              </div>
              <img src={ActionHeroLogos} alt="Action Hero" />
              <span
                className={
                  "text-sm sm:text-base md:text-xl lg:text-[26px] font-bold text-center text-[#EFF2FF]"
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
          "sm:py-[55px] sm:px-[76px] py-[27px] px-[28px] mx-4 bg-[#111121] flex flex-col sm:gap-[30px] gap-[20px] items-center relative sm:top-[-200px] top-0 mb-[80px] text-[#EFF2FF] rounded"
        }
        style={{
          boxShadow:
            "#7E73CC 0px 0px 0px 5px, rgb(67 57 160) 0px 0px 0px 10px, rgb(27 40 67) 0px 0px 0px 16px",
        }}
      >
        <span
          className={
            "text-[18px] sm:text-2xl md:text-3xl lg:text-[42px] font-bold"
          }
        >
          Skip Our Waiting List
        </span>
        <button
          className={
            "sm:rounded-[10px] rounded-[4px] sm:px-[31px] px-[11px] sm:py-[17px] py-[6px] text-[10px] sm:text-lg md:text-xl lg:text-[24px] font-bold flex flex-row gap-[20px] items-center"
          }
          style={{
            background:
              "linear-gradient(180deg, #602DF0 28.26%, #321681 94.2%)",
          }}
          onClick={() => setShow(true)}
        >
          Nerds Come First / Click To Schedule
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 25"
            fill="none"
            className={"sm:w-[15px] w-[8px] sm:h-[25px] h-[15px]"}
          >
            <path d="M2 2L12.5 12.5L2 23.5" stroke="white" strokeWidth="3.2" />
          </svg>
        </button>
      </div>
      {show ? (
        <div
          className={
            "fixed w-screen h-screen z-10 top-0 left-0 overflow-y-scroll bg-[#00000099] flex justify-center items-center backdrop-blur-[3px]"
          }
          onClick={() => console.log("Hii")}
        >
          <div
            className={
              "bg-[#030303] border-2 border-solid border-[#3d3455] relative rounded-[30px] shadow-[0px_4px_64px_0px_#021426] p-4 sm:p-9 w-full max-w-[1000px] flex flex-col justify-center items-center"
            }
          >
            <div
              className={
                "w-full bg-[#602DF0] absolute rotate-[155deg] blur-[135px] h-[120px] opacity-75"
              }
            >
              H
            </div>
            <div className={"flex w-full justify-end items-center"}>
              <IoCloseOutline
                color="#fff"
                size={32}
                onClick={() => setShow(false)}
                className={"cursor-pointer"}
              />
            </div>
            <p
              className={
                "text-2xl sm:text-[70px] sm:leading-none font-extrabold bg-gradient-to-r from-[#C9D6FF] via-[#BCBBFF] to-[#AD9CFF] inline-block text-transparent bg-clip-text"
              }
            >
              Contact <span className={"text-white"}>Sales</span>
            </p>
            <p
              className={
                "text-base sm:text-xl font-semibold text-[#94A3B8] mt-2 sm:mt-6"
              }
            >
              60 Minute Call Back Guaranteed
            </p>
            <div
              className={
                "mt-8 border-[#ffffff33] border border-solid w-full rounded-[18px] p-4 sm:p-[54px]"
              }
            >
              <div
                className={
                  "grid grid-cols-1 sm:grid-cols-2 gap-x-[68px] gap-y-5 sm:gap-y-[45px]"
                }
              >
                <div className={"flex flex-col gap-4"}>
                  <label
                    htmlFor={"name"}
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Your Name
                  </label>
                  <input
                    id={"name"}
                    className={`bg-transparent sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border-0 bg-[#0B0E16]`}
                    placeholder={"Enter Your Name"}
                  />
                </div>
                <div className={"flex flex-col gap-4"}>
                  <label
                    htmlFor={"company"}
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Company Name
                  </label>
                  <input
                    id={"company"}
                    className={`bg-transparent sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border-0 bg-[#0B0E16]`}
                    placeholder={"Enter Your Company Name"}
                  />
                </div>
                <div className={"flex flex-col gap-4"}>
                  <label
                    htmlFor={"email"}
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Company Email
                  </label>
                  <input
                    id={"email"}
                    className={`bg-transparent sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border-0 bg-[#0B0E16]`}
                    placeholder={"Enter Your Company Email"}
                  />
                </div>
                <div className={"flex flex-col gap-4"}>
                  <label
                    htmlFor={"phone"}
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Phone Number
                  </label>
                  <input
                    id={"phone"}
                    className={`bg-transparent sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border-0 bg-[#0B0E16]`}
                    placeholder={"Enter Your Phone Number"}
                  />
                </div>
                <div className={"flex flex-col gap-4"}>
                  <label
                    htmlFor={"preference"}
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Contact Preference
                  </label>
                  <select
                    name="preference"
                    id="preference"
                    className={`bg-transparent bg-no-repeat appearance-none sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border-0 bg-[#0B0E16]`}
                    style={{
                      backgroundImage: `url(${DownArrow})`,
                      backgroundSize: "1rem",
                      backgroundPosition: "right 0.7rem center",
                    }}
                  >
                    <option value="Phone Call">Phone Call</option>
                    <option value="Phone Call 1">Phone Call 1</option>
                  </select>
                </div>
                <div className={"flex flex-col gap-4"}>
                  <label
                    htmlFor={"employees"}
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Employees
                  </label>
                  <select
                    name="employees"
                    id="employees"
                    className={`bg-transparent bg-no-repeat appearance-none sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border-0 bg-[#0B0E16]`}
                    style={{
                      backgroundImage: `url(${DownArrow})`,
                      backgroundSize: "1rem",
                      backgroundPosition: "right 0.7rem center",
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className={"w-full flex justify-center items-center"}>
                <button
                  className={
                    "w-full max-w-[254px] h-10 sm:h-[68px] rounded-xl mt-10 text-base sm:text-xl bg-gradient-to-b from-[#602DF0] to-[#321681] flex justify-center items-center gap-4"
                  }
                  onClick={() => setShow(false)}
                >
                  Submit{" "}
                  <IoIosArrowForward color={"white"} className={"text-xl"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Section1;
