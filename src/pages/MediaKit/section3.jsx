import Container from "../../components/Container";
import CardWithBorder from "../../components/CardWithBorder";
import { IphoneList } from "../constant";
const Section3 = () => {
  return (
    <Container
      className={
        "sm:py-[40px] py-[20px] flex flex-col sm:gap-[80px] gap-[30px] items-center justify-center"
      }
    >
      <span
        className={
          "font-extrabold text-[28px] sm:text-5xl md:text-6xl lg:text-70 text-primary"
        }
      >
        Mobile App <span className={"text-white"}>Shots</span>
      </span>
      <CardWithBorder
        className={
          "sm:p-[50px] px-4 py-[30px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full sm:gap-[45px] gap-[20px]"
        }
      >
        {IphoneList?.map((item, index) => {
          return (
            <div
              className={"flex flex-col sm:gap-[44px] gap-[19px]"}
              key={"Iphone" + index}
            >
              <img src={item.img} alt="Iphone1" />
              <a
                href={item.img}
                download={`OMW_mobile${index + 1}.png`}
                className={"w-full"}
              >
                <button
                  className={
                    "bg-primary p-3 rounded-[12px] text-[10px] sm:text-base md:text-lg lg:text-xl font-semibold w-full"
                  }
                >
                  Download
                </button>
              </a>
            </div>
          );
        })}
      </CardWithBorder>
    </Container>
  );
};
export default Section3;
