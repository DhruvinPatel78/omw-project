import Section6BG from "../../images/MobileAPP/section6BG.png";
import Container from "../../components/Container";
import HotelGiftCard from "../../images/MobileAPP/hotel_gift_card.png";
import Iphone from "../../images/MobileAPP/section6Iphone.png";
import Airfare from "../../images/MobileAPP/RoundtripAirfareHotel.png";
import NightCruise from "../../images/MobileAPP/NightCruise.png";
import LuxuryResort from "../../images/MobileAPP/luxuryresort.png";
import StayGetaway from "../../images/MobileAPP/staygetaway.png";
import Rent from "../../images/MobileAPP/rentRoom.png";
import CardWithBorder from "../../components/CardWithBorder";
const Section6 = () => {
  const theoryList = [
    {
      id: 1,
      img: HotelGiftCard,
      title: "$100 Hotel Gift Card",
      description: "Over 400,000 hotels and Resorts worldwide.",
      subTitle: "$500 OnMyWay Dollars",
      subDescription: "24 Months To Travel",
      isCenter: false,
    },
    {
      id: 2,
      img: Airfare,
      title: "Roundtrip Airfare & Hotel!",
      description: "Over 20 Destinations In The USA, 2 People",
      subTitle: "$5000 OnMyWay Dollars",
      subDescription: "24 Months To Travel",
      isCenter: false,
    },
    {
      id: 3,
      img: NightCruise,
      title: "5 Day / 4 Night Cruise",
      description: "Carnival Cruise Lines, Royal Caribbean, No...",
      subTitle: "$4500 OnMyWay Dollars",
      subDescription: "24 Months To Travel",
      isCenter: false,
    },
    {
      id: 4,
      img: Iphone,
      isCenter: true,
    },
    {
      id: 5,
      img: LuxuryResort,
      title: "7 nights luxury resort getaway 3500+ locations",
      description: null,
      subTitle: "$10,000 OnMyWay Dollars",
      subDescription: "12 Months To Resort",
      isCenter: false,
    },
    {
      id: 6,
      img: StayGetaway,
      title: "4 night hotel stay getaway",
      description: null,
      subTitle: "$3125 OnMyWay Dollars",
      subDescription: "24 Months To Resort",
      isCenter: false,
    },
    {
      id: 7,
      img: Rent,
      title: "$500 Hotel Gift Card",
      description: "Over 400,000 hotels and Resorts worldwide.",
      subTitle: "$2500 OnMyWay Dollars",
      subDescription: "24 Months To Travel",
      isCenter: false,
    },
  ];
  return (
    <div className={"w-full flex flex-col gap-4"}>
      <Container
        className={
          "text-center text-4xl sm:text-5xl md:text-6xl lg:text-70 text-primary font-extrabold"
        }
      >
        <span className="bg-millionText bg-clip-text text-transparent">
          The Toostie Roll
        </span>{" "}
        Theory
      </Container>
      <div
        className={
          "h-full w-full bg-no-repeat bg-left flex justify-center items-center bg-cover"
        }
        style={{ backgroundImage: `url(${Section6BG})` }}
      >
        <Container className="flex items-center justify-center bg-[#0a0e14cc]">
          <CardWithBorder
            className={
              "sm:p-16 p-7 px-4 flex flex-col gap-8 justify-center items-center"
            }
          >
            <div
              className="row-span-full w-[65%] h-full lg:hidden flex justify-center items-center"
              key={`card_${Iphone}`}
            >
              <img src={Iphone} alt="Iphone" />
            </div>
            <div className="grid grid-rows-3 grid-flow-col sm:gap-4 gap-2 w-full">
              {theoryList?.map((item, index) => {
                return item.isCenter ? (
                  <div
                    className="row-span-full w-full h-full hidden lg:flex justify-center items-center"
                    key={`card_${item.id + index}`}
                  >
                    <img src={item?.img} alt="Iphone" />
                  </div>
                ) : (
                  <div
                    className="row-span-auto w-full"
                    key={`card_${item.id + index}`}
                  >
                    <div
                      className={
                        "sm:w-[240px] w-[150px] sm:h-[240px] h-[150px] bg-no-repeat bg-contain bg-top flex rounded-md"
                      }
                      style={{ backgroundImage: `url(${item?.img})` }}
                    >
                      <div
                        className={
                          "bg-toostieCardFooter sm:p-4 p-2 w-full rounded-md flex items-start justify-end flex-col sm:gap-[5px] gap-[2px]"
                        }
                      >
                        <span
                          className={
                            "text-[#182455] sm:text-[15px] text-[10px] font-bold leading-normal"
                          }
                        >
                          {item?.title}
                        </span>
                        {item.description && (
                          <span
                            className={
                              "text-[#182455] sm:text-[9px] text-[6px] leading-normal font-normal"
                            }
                          >
                            {item.description}
                          </span>
                        )}

                        <div
                          className={"border-b border-[#7e7ebca6] w-full"}
                        ></div>
                        <div
                          className={
                            "flex flex-row justify-between items-center w-full"
                          }
                        >
                          <div className={"flex flex-col"}>
                            <span
                              className={
                                "text-[#00CB17] sm:text-[10px] text-[6px] font-medium"
                              }
                            >
                              {item?.subTitle}
                            </span>
                            <span
                              className={
                                "text-[#182455] sm:text-[9px] text-[4px] font-normal"
                              }
                            >
                              {item?.subDescription}
                            </span>
                          </div>
                          <button
                            className={
                              "bg-primary sm:p-2 p-0 rounded-full sm:w-[50px] w-[25px] sm:text-[100%] text-[7px] sm:font-thin font-bold"
                            }
                          >
                            get
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white sm:text-left text-center"
              }
            >
              <span className={"text-primary"}>Rewards, Not Punishment</span> -
              Create Positive Outcomes
            </div>
          </CardWithBorder>
        </Container>
      </div>
    </div>
  );
};
export default Section6;
