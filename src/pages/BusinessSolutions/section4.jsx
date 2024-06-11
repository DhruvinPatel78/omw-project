import Container from "../../components/Container";
import Iphone from "../../images/BusinsessSolution/bIphone.png";
import { voiceList } from "../constant";
const Section4 = () => {
  return (
    <Container className={"flex flex-col sm:gap-[80px] gap-[30px] py-[30px]"}>
      <span
        className={
          "text-[26px] sm:text-4lx md:text-5xl lg:text-[60px] font-extrabold text-primary text-center"
        }
      >
        Archie Voice AI,{" "}
        <span className="bg-millionText bg-clip-text text-transparent">
          {" "}
          Simply The Best.
        </span>
      </span>
      <div
        className={"w-full flex flex-col lg:flex-row gap-[30px] justify-center"}
      >
        <div
          className={
            "w-full lg:w-2/5 h-full bg-no-repeat bg-center flex items-end justify-center bg-contain min-h-[500px]"
          }
          style={{ backgroundImage: `url(${Iphone})` }}
        ></div>
        <div
          className={
            "w-full lg:w-3/5 h-full flex flex-col sm:gap-[20px] gap-4 justify-center md:text-left text-center"
          }
        >
          {voiceList?.map((item, index) => {
            return (
              <div
                className={
                  "font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] flex flex-col max-w-[650px] sm:gap-[5px] gap-[4px]"
                }
                key={`voice-${index}`}
              >
                <span
                  className={
                    "text-primary text-sm sm:text-lg md:text-xl lg:text-[24px]"
                  }
                >
                  {item.title}:
                </span>
                <span>{item?.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Section4;
