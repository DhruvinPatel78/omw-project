import Container from "../../components/Container";
import logo from "../../images/MediaKit/logo1.svg";
import logo2 from "../../images/MediaKit/logo2.svg";
import logo3 from "../../images/MediaKit/logo3.svg";
import logo4 from "../../images/MediaKit/logo4.svg";
import logo5 from "../../images/MediaKit/logo5.svg";
import logo6 from "../../images/MediaKit/logo6.svg";
const Section2 = () => {
  const logoList = [
    {
      id: 1,
      logo: logo,
    },
    {
      id: 2,
      logo: logo2,
    },
    {
      id: 3,
      logo: logo3,
    },
    {
      id: 4,
      logo: logo4,
    },
    {
      id: 5,
      logo: logo5,
    },
    {
      id: 6,
      logo: logo6,
    },
  ];
  return (
    <Container
      className={
        "flex flex-col sm:gap-[80px] gap-[20px] sm:py-[123px] py-[40px] justify-center items-center"
      }
    >
      <span
        className={
          "font-extrabold text-[28px] sm:text-5xl md:text-6xl lg:text-70 text-primary"
        }
      >
        OnMyWay <span className={"text-white"}>Logos</span>
      </span>
      <div
        className={
          "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full sm:gap-[45px] gap-[20px]"
        }
      >
        {logoList?.map((item, index) => {
          return (
            <div
              style={{
                border: "1px transparent",
                backgroundImage: `linear-gradient(#0A0E14, #0A0E14),linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                padding: 2,
                width: "100%",
              }}
              key={`logo${index}`}
              className={"sm:rounded-[16px] rounded-[6px]"}
            >
              <div className={"p-4 flex flex-col justify-between gap-[26px]"}>
                <div
                  className={`sm:h-[170px] h-[100px] w-full flex justify-center rounded-[14px] p-2`}
                  style={{
                    background:
                      item.id === 2 || item.id === 4
                        ? ` linear-gradient(154deg, rgba(255, 255, 255, 0.85) 52.15%, #DDE4FE 102.26%)`
                        : "transparent",
                  }}
                >
                  <img src={item?.logo} alt={`Logo-${item.id}`} />
                </div>
                <button
                  style={{
                    border: "1px transparent",
                    backgroundImage: `linear-gradient(#0A0E14, #0A0E14),linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    padding: 2,
                    width: "100%",
                  }}
                  className={
                    "sm:h-[50px] h-[30px] sm:rounded-[16px] rounded-[6px]"
                  }
                >
                  <span
                    className={
                      "text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold"
                    }
                  >
                    Download
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={
          "bg-primary py-[15px] px-[90px] rounded-[12px] text-[10px] sm:text-base md:text-lg lg:text-xl uppercase"
        }
      >
        Download all
      </button>
    </Container>
  );
};
export default Section2;
