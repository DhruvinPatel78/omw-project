import Container from "../../components/container";
import Section7BG from "../../images/MobileAPP/section7BG.png";
import Iphone from "../../images/MobileAPP/section7Iphone.png";
import CardWithBorder from "../../components/CardWithBorder";
const Section7 = () => {
  return (
    <div className={"w-full flex flex-col gap-4 py-16"}>
      <div
        className={
          "max-w-1200 mx-auto p-4 w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-70 text-primary font-extrabold"
        }
      >
        <span className="bg-millionText bg-clip-text text-transparent">
          I Am OnMyWay,{" "}
        </span>
        {"  "} Are You?
      </div>
      <Container className="flex items-center justify-center">
        <CardWithBorder
          className={"flex flex-col gap-8 justify-center items-center"}
        >
          <div
            className={
              "h-full w-full bg-no-repeat bg-left flex justify-center items-center bg-cover p-8 pb-0"
            }
            style={{
              backgroundImage: `url(${Section7BG})`,
            }}
          >
            <img src={Iphone} alt={"Iphone"} />
          </div>
        </CardWithBorder>
      </Container>
    </div>
  );
};
export default Section7;
