import Container from "../../components/Container";
import { logoList } from "../constant";

const Section2 = () => {
  return (
    <Container
      className={
        "flex flex-col sm:gap-[80px] gap-[20px] sm:py-[100px] py-[30px] justify-center items-center"
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
                  <img
                    src={item?.logo}
                    alt={`Logo-${item.id}`}
                    className={"object-contain"}
                  />
                </div>
                <a href={item.logo} download={`OMW_logo${index + 1}.png`}>
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
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <a href={'/OnMyWay-Media-Kit.zip'} download={`OMW_Media.zip`}>
        <button
          className={
            "bg-primary py-[15px] px-[90px] rounded-[12px] text-[10px] sm:text-base md:text-lg lg:text-xl uppercase"
          }
        >
          Download all
        </button>
      </a>
    </Container>
  );
};
export default Section2;
