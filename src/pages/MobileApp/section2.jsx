import Container from "../../components/Container";
import Section2BG from "../../images/MobileAPP/section2BG.png";
import CardWithBorder from "../../components/CardWithBorder";
import AppleLogo from "../../images/apple_logo.png";
import PlayStore from "../../images/play_store.png";
const Section2 = () => {
  return (
    <div
      className={
        "h-full w-full bg-no-repeat bg-left flex justify-center items-center"
      }
      style={{ backgroundImage: `url(${Section2BG})` }}
    >
      <Container className="flex items-center justify-center">
        <CardWithBorder
          className={
            "sm:py-[52px] py-[24px] px-4 flex flex-col sm:gap-[32px] gap-[20px] justify-center items-center"
          }
        >
          <div
            className={
              "flex flex-col sm:gap-[15px] gap-[4px] justify-center items-center"
            }
          >
            <div
              className={
                "flex flex-row sm:gap-[14px] gap-[4px] font-extrabold text-[38px] sm:text-6xl md:text-7xl lg:text-[100px] !leading-[100%]"
              }
            >
              <span className="bg-cardBorder bg-clip-text text-transparent">
                $100
              </span>
              <span className="bg-millionText bg-clip-text text-transparent">
                Million
              </span>
            </div>
            <span
              className={
                "font-bold text-xs sm:text-xl md:text-2xl lg:text-[26px]"
              }
            >
              Prizes and Rewards
            </span>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center sm:pt-[0.625rem] font-bold text-sm sm:text-base md:text-lg lg:text-xl"
            }
          >
            <span
              className={
                "bg-cardBorder bg-clip-text webkitText max-w-[650px] text-center"
              }
            >
              Cash Prizes, Luxury Cars, Travel, Gift Cards, Dream Home
              Giveaways, VIP Events, College Scholarships, RV's, Boats, Shopping
              Sprees
            </span>
          </div>
          <div
            className={
              "flex flex-col gap-[14px] sm:gap-[26px] w-full max-w-[720px] justify-center items-center"
            }
          >
            <div className={"w-full flex sm:flex-row flex-col gap-4"}>
              <button
                className={
                  "w-full bg-primary rounded-md flex flex-row items-center justify-center p-2 gap-2 !leading-8"
                }
                onClick={() => {
                  window.open(
                    "https://itunes.apple.com/us/app/onmyway-drives/id1436132657?ls=1&mt=8",
                    "_blank"
                  );
                }}
              >
                <img
                  src={AppleLogo}
                  alt="Apple"
                  className={"sm:w-[40px] w-[25px]"}
                />
                <span
                  className={
                    "text-sm sm:text-lg md:text-xl lg:text-[22px] font-semibold flex flex-col"
                  }
                >
                  Available on the <span>App Store</span>
                </span>
              </button>
              <button
                className={
                  "w-full bg-primary rounded-md flex flex-row items-center justify-center p-2 gap-2 !leading-8"
                }
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.onmyway.mobi&hl=en",
                    "_blank"
                  );
                }}
              >
                <img
                  src={PlayStore}
                  alt="Play Store"
                  className={"sm:w-[40px] w-[25px]"}
                />
                <span
                  className={
                    "text-sm sm:text-lg md:text-xl lg:text-[22px] font-semibold flex flex-col"
                  }
                >
                  Available on <span>Google Play</span>
                </span>
              </button>
            </div>
            <span
              className={
                "font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
              }
            >
              Available Free - iPhone + Android
            </span>
          </div>
        </CardWithBorder>
      </Container>
    </div>
  );
};
export default Section2;
