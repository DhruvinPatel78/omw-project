import Container from "../../components/Container";
import Section4BG from "../../images/MobileAPP/section4BG.png";
import CardWithBorder from "../../components/CardWithBorder";
const Section4 = () => {
  return (
    <div
      className={
        "h-full w-full bg-no-repeat bg-left flex justify-center items-center"
      }
      style={{ backgroundImage: `url(${Section4BG})` }}
    >
      <Container className="flex items-center justify-center bg-[#0a0e14cc]">
        <CardWithBorder
          className={
            "py-14 px-4 flex flex-col gap-3 justify-center items-center"
          }
        >
          <span className={"font-bold sm:text-xl md:text-2xl lg:text-[26px]"}>
            So Far…
          </span>
          <div
            className={
              "font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center"
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
        </CardWithBorder>
      </Container>
    </div>
  );
};
export default Section4;
