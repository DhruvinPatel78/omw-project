import Container from "../../components/Container";
import CashPrize from "../../images/MobileAPP/cashPrizes.png";
import LuxuryPrize from "../../images/MobileAPP/luxuryPrize.png";
import TuitionPrize from "../../images/MobileAPP/tuitionPrize.png";
import LuxuryReward from "../../images/MobileAPP/luxuryReward.png";
import TravelReward from "../../images/MobileAPP/travelReward.png";
const Selection1 = () => {
  const prizeList = [
    {
      title: "Cash Prizes",
      img: CashPrize,
      id: 1,
    },
    {
      title: "Luxury Prizes",
      img: LuxuryPrize,
      id: 2,
    },
    {
      title: "Tuition+ Prizes",
      img: TuitionPrize,
      id: 3,
    },
    {
      title: "Luxury Rewards",
      img: LuxuryReward,
      id: 4,
    },
    {
      title: "Travel Rewards",
      img: TravelReward,
      id: 5,
    },
  ];
  return (
    <Container className={"flex flex-col sm:gap-20 gap-[30px] sm:py-[70px] py-[30px]"}>
      <div className={"flex flex-col justify-center items-center sm:gap-[24px] gap-[10px] h-full"}>
        <span
          className={"font-bold text-xs sm:text-base md:text-xl lg:text-[28px]"}
        >
          Archie Voice AI. Drive Safe. Get Paid.
        </span>
        <span
          className={
            "font-extrabold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[890px] text-center"
          }
        >
          OnMyWay AI Distracted Driving Mobile App
        </span>
      </div>
      <div
        className={
          "sm:grid flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-[26px] gap-[10px] place-items-center sm:flex-nowrap flex-wrap sm:justify-normal justify-center"
        }
      >
        {prizeList?.map((item, index) => (
          <div
            className={
              "sm:w-[210px] w-[100px] sm:h-[300px] h-[160px] rounded-md flex items-end bg-clip-padding border-2 border-secondary bg-center bg-cover"
            }
            style={{
              backgroundImage: `url(${item.img})`,
              borderRadius: "10px",
            }}
            key={`prize-${index}`}
          >
            <div className={"bg-cardFooter p-5 sm:px-[18px] px-[12px] w-full rounded-md text-center"}>
              <span className={"font-bold text-xs sm:text-lg md:text-xl lg:text-[22px]"}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Selection1;
