import Container from "../../components/Container";
import Section2BG from "../../images/MobileAPP/section2BG.png";
import CardWithBorder from "../../components/CardWithBorder";
import { detectDevice } from "../constant";
const Section2 = () => {
  const device = detectDevice();
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
            <button
              className={
                "w-full uppercase bg-primary p-3 text-xs sm:text-lg md:text-xl lg:text-[22px] font-semibold rounded-md"
              }
              onClick={() => {
                if (device === "android") {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.onmyway.mobi&hl=en",
                    "_blank"
                  );
                } else if (device === "ios") {
                  window.open(
                    "https://itunes.apple.com/us/app/onmyway-drives/id1436132657?ls=1&mt=8",
                    "_blank"
                  );
                }
              }}
            >
              Download OnMyWay mobile app now
            </button>
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
