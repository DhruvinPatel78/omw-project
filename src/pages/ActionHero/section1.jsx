import Logo from "../../images/ActionHero/actionHeroTop.svg";
import ActionHeroLogos from "../../images/ActionHero/actionHeroLogos.png";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import DownArrow from "../../images/downArrow.png";
import { IoIosArrowForward } from "react-icons/io";
const Section1 = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    preference: "phone_call",
    employees: "1",
  });

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const formSubmit = () => {
    console.log(formData);
    setShow(false);
  };
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
        <div
          className={
            "p-10 w-[calc(100vw_*_951_/_320)] h-[400px] sm:w-[calc(100vw_*_1853_/_1524)] sm:h-[500px] rounded-bl-none rounded-br-none border-transparent outline-none bg-black overflow-hidden shadow-[0px_-40px_4px_0px_#6644BB] flex flex-col items-center"
          }
          style={{
            borderRadius: "50% / 100%",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <div
            className={
              "bg-[#030303] shadow-[0px_0px_30px_0px_#FFF_inset] sm:shadow-[0px_0px_30px_0px_#FFF_inset] pt-[20px] sm:pt-[40px] w-[170vw] sm:w-[calc(100vw_/_1.2)] h-[500px] sm:h-[500px] rounded-[50%] gap-4 sm:gap-[30px] flex flex-col items-center"
            }
          >
            <div className={"flex flex-col items-center"}>
              <img src={Logo} alt={"Logo"} width={35} />
              <div
                className={
                  "flex flex-col items-center mt-4 sm:m-[27px] gap-4 sm:gap-[30px]"
                }
              >
                <span
                  className={
                    "text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold"
                  }
                >
                  AI Action Hero
                </span>
                <p
                  className={
                    "text-sm w-[70vw] sm:w-full sm:text-base md:text-xl lg:text-[28px] font-semibold text-center opacity-[0.5] text-[#EFF2FF]"
                  }
                >
                  Works With Startups, Academic Institutions, and Enterprises.
                </p>
              </div>
            </div>
            <img
              src={ActionHeroLogos}
              alt="Action Hero"
              className={"my-2 sm:my-0"}
            />
            <div className={"w-screen flex items-center justify-center"}>
              <p
                className={
                  "w-[66vw] flex flex-col xl:flex-row justify-center items-center sm:w-full sm:flex text-base sm:text-lg md:text-xl lg:text-[26px] font-bold text-center text-[#EFF2FF] mt-1 sm:mt-2"
                }
              >
                We Work With Everyone.
                <span className={"text-[#AFA0FF]"}>
                  {" "}
                  Welcome To Our Server Agnostic Solution.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            "bg-black w-full mt-[-32px] pt-[60px] sm:pt-[240px] flex justify-center"
          }
        >
          <div
            className={
              "sm:p-[55px] p-4 mx-4 bg-[#111121] flex flex-col sm:gap-[30px] gap-[20px] items-center relative sm:top-[-200px] top-0 mb-8 rounded-[22px]"
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
                "sm:rounded-[10px] rounded-[4px] sm:px-[31px] px-[11px] sm:py-[17px] py-[6px] text-xs sm:text-lg md:text-xl lg:text-[24px] font-bold flex flex-row gap-[20px] items-center"
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
                className={"sm:w-[15px] w-[10px] sm:h-[25px] h-[15px]"}
              >
                <path
                  d="M2 2L12.5 12.5L2 23.5"
                  stroke="white"
                  strokeWidth="3.2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {show ? (
        <div
          className={
            "fixed w-screen h-screen z-10 top-0 left-0 overflow-y-scroll bg-[#00000099] flex justify-center items-center backdrop-blur-[3px]"
          }
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
            />
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
            <form
              className={
                "mt-8 border-[#ffffff33] border border-solid w-full rounded-[18px] p-4 sm:p-[54px] z-[1]"
              }
              onSubmit={formSubmit}
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
                    className={`text-white sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border border-solid border-[#CBCCD23D] bg-transparent`}
                    placeholder={"Enter Your Name"}
                    value={formData.name}
                    onChange={onChange}
                    required
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
                    className={`text-white sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border border-solid border-[#CBCCD23D] bg-transparent`}
                    placeholder={"Enter Your Company Name"}
                    value={formData.company}
                    onChange={onChange}
                    required
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
                    className={`text-white sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border border-solid border-[#CBCCD23D] bg-transparent`}
                    placeholder={"Enter Your Company Email"}
                    value={formData.email}
                    onChange={onChange}
                    required
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
                    className={`text-white sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border border-solid border-[#CBCCD23D] bg-transparent`}
                    placeholder={"Enter Your Phone Number"}
                    value={formData.phone}
                    onChange={onChange}
                    type={"tel"}
                    required
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
                    className={`bg-no-repeat appearance-none sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border border-solid border-[#CBCCD23D] bg-transparent`}
                    style={{
                      backgroundImage: `url(${DownArrow})`,
                      backgroundSize: "1rem",
                      backgroundPosition: "right 0.7rem center",
                    }}
                    onChange={onChange}
                  >
                    <option value="phone_call">Phone Call</option>
                    <option value="phone_call_1">Phone Call 1</option>
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
                    className={`bg-no-repeat appearance-none sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[10px] sm:text-base md:text-lg lg:text-xl border border-solid border-[#CBCCD23D] bg-transparent`}
                    style={{
                      backgroundImage: `url(${DownArrow})`,
                      backgroundSize: "1rem",
                      backgroundPosition: "right 0.7rem center",
                    }}
                    onChange={onChange}
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
                    "text-white w-full max-w-[254px] h-10 sm:h-[68px] rounded-xl mt-10 text-base sm:text-xl bg-gradient-to-b from-[#602DF0] to-[#321681] flex justify-center items-center gap-4"
                  }
                  type={"submit"}
                >
                  Submit{" "}
                  <IoIosArrowForward color={"white"} className={"text-xl"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      {/*<div className={"h-full w-full"}>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      "relative sm:top-[-300px] top-[-200px] left-[-70px] sm:left-[-160px] md:left-[-190px] lg:left-[-150px]"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <div*/}
      {/*      className={*/}
      {/*        "lg:w-[120%] md:w-[140%] sm:w-[150%] w-[130%] sm:h-[800px] h-[400px] bg-[#030303] rounded-[50%] p-[40px]"*/}
      {/*      }*/}
      {/*      style={{*/}
      {/*        // borderTop: "40px solid rgba(133, 98, 237)",*/}
      {/*        boxShadow: "rgba(133, 98, 237) 0px -43px 1px 0px",*/}
      {/*        // boxShadow: "rgb(133, 98, 237) 0px -40px 3px 0px",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <div*/}
      {/*        className={*/}
      {/*          "w-[110%] sm:w-[100%] md:w-[100%] lg:w-[80%]  sm:h-[600px] h-[400px] rounded-[50%] relative sm:left-[10px] left-[-13px] md:left-0 lg:left-[190px] flex justify-center items-center flex-col sm:p-10 p-[50px] sm:gap-[60px] gap-[30px]"*/}
      {/*        }*/}
      {/*        style={{*/}
      {/*          boxShadow: "0px 3px 53px 0px #FFF inset",*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <div className={"flex flex-col items-center"}>*/}
      {/*          <img src={Logo} alt={"Logo"} width={35} />*/}
      {/*          <div className={"flex flex-col items-center mt-[27px]"}>*/}
      {/*            <span*/}
      {/*              className={*/}
      {/*                "text-xl sm:text-4xl font-bold"*/}
      {/*              }*/}
      {/*            >*/}
      {/*              AI Action Hero*/}
      {/*            </span>*/}
      {/*            <span*/}
      {/*              className={*/}
      {/*                "text-sm sm:text-3xl font-semibold text-center mt-[19px] text-[#EFF2FF] opacity-50"*/}
      {/*              }*/}
      {/*            >*/}
      {/*              Works With Startups, Academic Institutions, and Enterprises.*/}
      {/*            </span>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <img src={ActionHeroLogos} alt="Action Hero" />*/}
      {/*        <span*/}
      {/*          className={*/}
      {/*            "text-sm sm:text-3xl font-bold text-center text-white"*/}
      {/*          }*/}
      {/*        >*/}
      {/*          We Work With Everyone.*/}
      {/*          <span className={"text-[#AFA0FF]"}>*/}
      {/*            {" "}*/}
      {/*            Welcome To Our Server Agnostic Solution.*/}
      {/*          </span>*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={*/}
      {/*    "sm:p-[55px] p-4 mx-4 bg-[#111121] flex flex-col sm:gap-[30px] gap-[20px] items-center relative sm:top-[-200px] top-0 mb-8 rounded-[22px]"*/}
      {/*  }*/}
      {/*  style={{*/}
      {/*    boxShadow:*/}
      {/*      "#7E73CC 0px 0px 0px 5px, rgb(67 57 160) 0px 0px 0px 10px, rgb(27 40 67) 0px 0px 0px 16px",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <span*/}
      {/*    className={"text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold"}*/}
      {/*  >*/}
      {/*    Skip Our Waiting List*/}
      {/*  </span>*/}
      {/*  <button*/}
      {/*    className={*/}
      {/*      "sm:rounded-[10px] rounded-[4px] sm:px-[31px] px-[11px] sm:py-[17px] py-[6px] text-xs sm:text-lg md:text-xl lg:text-[24px] font-bold flex flex-row gap-[20px] items-center"*/}
      {/*    }*/}
      {/*    style={{*/}
      {/*      background:*/}
      {/*        "linear-gradient(180deg, #602DF0 28.26%, #321681 94.2%)",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Nerds Come First / Click To Schedule*/}
      {/*    <svg*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      viewBox="0 0 15 25"*/}
      {/*      fill="none"*/}
      {/*      className={"sm:w-[15px] w-[10px] sm:h-[25px] h-[15px]"}*/}
      {/*    >*/}
      {/*      <path d="M2 2L12.5 12.5L2 23.5" stroke="white" strokeWidth="3.2" />*/}
      {/*    </svg>*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
};
export default Section1;
