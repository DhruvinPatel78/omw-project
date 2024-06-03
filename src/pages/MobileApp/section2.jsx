import Container from "../../components/container";
import Section2BG from "../../images/section2BG.png";
const Section2 = () => {
  return (
    <div
      className={
        "h-full w-full bg-no-repeat bg-left flex justify-center items-center"
      }
      style={{ backgroundImage: `url(${Section2BG})` }}
    >
      <Container className="w-full flex items-center justify-center bg-[#0a0e14cc]">
        <div
          className="w-full border-4 border-transparent py-6 px-3 flex flex-col gap-3 justify-center items-center"
          style={{
            borderImage:
              "linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)",
            borderImageSlice: 2,
            boxShadow: "0px 4px 30px 0px rgba(65, 209, 255, 0.30)",
          }}
        >
          <div className={"flex flex-col gap-1 justify-center items-center"}>
            <div
              className={
                "flex flex-row gap-[14px] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
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
                "font-bold text-sm sm:text-xl md:text-2xl lg:text-[26px]"
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
        </div>
      </Container>
    </div>
  );
};
export default Section2;
