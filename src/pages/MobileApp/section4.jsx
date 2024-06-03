import Container from "../../components/container";
import Section4BG from "../../images/section4BG.png";
const Section4 = () => {
  return (
    <div
      className={
        "h-full w-full bg-no-repeat bg-left flex justify-center items-center"
      }
      style={{ backgroundImage: `url(${Section4BG})` }}
    >
      <Container className="w-full flex items-center justify-center bg-[#0a0e14cc]">
        <div
          className="w-full border-4 border-transparent py-6 px-3 flex flex-col gap-3 justify-center items-center"
          style={{
            borderImage:
              "linear-gradient(82deg, rgba(10,99,253,1) 0%, rgba(1,207,252,1) 17%, rgba(0,135,255,1) 35%, rgba(0,105,255,1) 54%, rgba(1,207,252,1) 73%, rgba(10,132,255,1) 89%, rgba(4,103,243,1) 100%)",
            borderImageSlice: 1,
            boxShadow: "rgba(1,207,252, 0.35) 0px 5px 15px",
          }}
        >
          <span className={"font-bold sm:text-xl md:text-2xl lg:text-[26px]"}>
            So Far…
          </span>
          <div
            className={
              "flex flex-row gap-[5px] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            }
          >
            <span className="bg-cardBorder bg-clip-text text-transparent">
              228
            </span>
            <span className="bg-millionText bg-clip-text text-transparent">
              Lives Saved
            </span>
          </div>
          <span className={"font-bold sm:text-xl md:text-2xl lg:text-[26px]"}>
            Millions Of Active Users And Growing
          </span>
        </div>
      </Container>
    </div>
  );
};
export default Section4;
