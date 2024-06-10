import Container from "../../components/Container";

const Section1 = () => {
  return (
    <Container
      className={
        "flex flex-col sm:gap-[24px] gap-[15px] sm:py-[123px] py-[40px] justify-center items-center"
      }
    >
      <span
        className={
          "font-extrabold text-[28px] sm:text-5xl md:text-6xl lg:text-70 text-primary"
        }
      >
        Media <span className={"text-white"}>Kit</span>
      </span>
      <span className={"font-semibold text-xs sm:text-base md:text-xl lg:text-[28px] max-w-[920px] w-full text-center"}>
        We've created some guidelines to help you use our brand and assets,
        including our logo, Mobileshots.
      </span>
    </Container>
  );
};
export default Section1;
