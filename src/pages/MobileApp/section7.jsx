import Container from "../../components/container";
import Section7BG from "../../images/section7BG.png";
import Iphone from "../../images/section7Iphone.png";
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
      <Container className="w-full flex items-center justify-center">
        <div
          className="w-full border-4 border-transparent flex flex-col gap-8 justify-center items-center"
          style={{
            borderImage:
              "linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)",
            borderImageSlice: 2,
            boxShadow: "0px 4px 30px 0px rgba(65, 209, 255, 0.30)",
          }}
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
        </div>
      </Container>
    </div>
  );
};
export default Section7;
