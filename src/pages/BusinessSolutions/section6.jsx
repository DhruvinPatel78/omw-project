import Container from "../../components/container";

const Section6 = () => {
  return (
    <div className={"w-full flex flex-col gap-4 py-8"}>
      <Container className={"flex flex-col gap-4"}>
        <div
          className={
            "text-center text-4xl sm:text-5xl md:text-6xl lg:text-70 text-primary font-extrabold !leading-[100%] "
          }
        >
          <span className="bg-millionText bg-clip-text text-transparent">
            Simple and{" "}
          </span>
          Affordable
        </div>
        <span
          className={
            "text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold"
          }
        >
          OnMyWay can be integrated into your company's operations in just days.
        </span>
      </Container>
    </div>
  );
};
export default Section6;
