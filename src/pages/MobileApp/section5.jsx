import Container from "../../components/container";
import Iphone from "../../images/iPhone.png";
const Section5 = () => {
  return (
    // <Container className={"w-full flex flex-row gap-10 justify-center"}>
    <Container
      className={
        "w-full flex flex-col lg:flex-row gap-10 justify-center "
        // + "bg-red-600 sm:bg-blue-600 md:bg-green-600 lg:bg-pink-700"
      }
    >
      <div
        className={
          "w-full lg:w-2/5 h-full lg:h-screen bg-no-repeat bg-center flex items-end justify-center bg-contain sm:bg-contain md:bg-contain lg:bg-auto xl:bg-auto min-h-[500px]"
        }
        style={{ backgroundImage: `url(${Iphone})` }}
      >
        <div
          className={"bg-cardFooter w-full rounded-md text-center h-[290px]"}
        />
      </div>
      <div
        className={
          "w-full lg:w-3/5 h-full lg:h-screen flex flex-col gap-7 justify-center md:text-left text-center"
        }
      >
        <div
          className={
            "font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-70 flex flex-col whitespace-nowrap"
          }
        >
          <span className={"text-primary"}>Archie Voice AI,</span>
          <span className={"bg-millionText bg-clip-text text-transparent"}>
            Your Superhero
          </span>
        </div>
        <div
          className={
            "font-semibold text-base sm:text-lg md:text-xl lg:text-2xl flex flex-col max-w-[650px]"
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
            "font-semibold text-base sm:text-lg md:text-xl lg:text-2xl max-w-[650px]"
          }
        >
          <span className={"text-primary"}>Imagine Staying Connected,</span>{" "}
          Staying Productive and Staying Alive.
        </div>
        <div
          className={
            "font-semibold text-base sm:text-lg md:text-xl lg:text-2xl max-w-[650px]"
          }
        >
          <span className={"text-primary"}>
            We knew we couldn’t stop distracted driving,
          </span>{" "}
          so we made it safe with Archie.
        </div>
        <div
          className={
            "font-semibold text-base sm:text-lg md:text-xl lg:text-2xl max-w-[650px]"
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
