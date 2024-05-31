import Section6BG from "../../images/section6BG.png";
import Container from "../../components/container";

const Section6 = () => {
  return (
    <div className={"w-full flex flex-col gap-4"}>
      <div
        className={
          "max-w-1200 mx-auto p-4 w-full flex justify-center items-center flex-row text-4xl sm:text-5xl md:text-6xl lg:text-70 text-primary font-extrabold"
        }
      >
        <span className="bg-millionText bg-clip-text text-transparent">
          The Toostie Roll
        </span>{" "}
        Theory
      </div>
      <div
        className={
          "h-full w-full bg-no-repeat bg-left flex justify-center items-center bg-cover"
        }
        style={{ backgroundImage: `url(${Section6BG})` }}
      >
        <Container className="w-full flex items-center justify-center bg-[#0a0e14cc]">
          <div
            className="w-full border-4 border-transparent p-16 flex flex-col gap-8 justify-center items-center"
            style={{
              borderImage:
                "linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)",
              borderImageSlice: 2,
              boxShadow: "0px 4px 30px 0px rgba(65, 209, 255, 0.30)",
            }}
          >
            <div>hii</div>
            <div
              className={
                "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
              }
            >
              <span className={"text-primary"}>Rewards, Not Punishment</span> -
              Create Positive Outcomes
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Section6;
