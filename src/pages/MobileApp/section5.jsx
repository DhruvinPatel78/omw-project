import Container from "../../components/Container";
import Iphone from "../../images/MobileAPP/Phone.png";
const Section5 = () => {
  return (
    <Container className={"flex flex-col lg:flex-row gap-10 justify-center "}>
      <div
        className={
          "w-full lg:w-2/5 h-full lg:h-screen bg-no-repeat bg-center flex items-end justify-center bg-contain sm:bg-contain md:bg-contain lg:bg-auto xl:bg-auto min-h-[500px]"
        }
        style={{ backgroundImage: `url(${Iphone})` }}
      >
        {/*<div*/}
        {/*  className={"bg-cardFooter w-full rounded-md text-center h-[290px]"}*/}
        {/*/>*/}
      </div>
      <div
        className={
          "w-full lg:w-3/5 h-full lg:h-screen flex flex-col sm:gap-[29px] gap-[19px] justify-center md:text-left text-center"
        }
      >
        <div
          className={
            "font-extrabold text-[28px] sm:text-5xl md:text-6xl lg:text-70 flex flex-col whitespace-nowrap"
          }
        >
          <span className={"text-primary"}>Archie Voice AI,</span>
          <span className={"bg-millionText bg-clip-text text-transparent"}>
            Your Superhero
          </span>
        </div>
        <div
          className={
            "font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] flex flex-col max-w-[650px] gap-[4px]"
          }
        >
          <span className={"text-primary"}>Stay Safe and Stay Connected:</span>
          <span>
            Archie Voice AI enables you to send text messages, order food,
            schedule events, book reservations, check flights, travel, navigate,
            search the web, play music, check the weather, follow news, stocks,
            make calls, and interact with social media entirely by voice, plus
            much, much more…
          </span>
        </div>
        <div
          className={
            "font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] max-w-[650px]"
          }
        >
          <span className={"text-primary"}>Imagine Staying Connected,</span>{" "}
          Staying Productive and Staying Alive.
        </div>
        <div
          className={
            "font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] max-w-[650px]"
          }
        >
          <span className={"text-primary"}>
            We knew we couldn’t stop distracted driving,
          </span>{" "}
          so we made it safe with Archie.
        </div>
        <div
          className={
            "font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] max-w-[650px]"
          }
        >
          <span className={"text-primary"}>Your New Best Friend</span> While
          Driving.
        </div>
      </div>
    </Container>
  );
};
export default Section5;
