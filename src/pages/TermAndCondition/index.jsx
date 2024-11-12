import Layout from "../layout";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container";

const TermAndCondition = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  return (
    <Layout>
      <Container className={"flex flex-col gap-4"}>
        <div
          className={
            "flex flex-col justify-center items-center sm:gap-[24px] gap-[10px] h-full"
          }
        >
          <span
            className={
              "font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[890px] text-center bg-cardBorder bg-clip-text text-transparent"
            }
          >
            Terms and Conditions
          </span>
        </div>
        {pathname === "100_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $100 Hotel Gift Card
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span> $4.95
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                12 Months to book travel
              </div>
            </div>
          </>
        ) : pathname === "200_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $200 Hotel Gift Card
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span> $9.95
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                12 Months to book travel
              </div>
            </div>
          </>
        ) : pathname === "300_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $300 Hotel Gift Card
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span> $14.95
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                12 Months to book travel
              </div>
            </div>
          </>
        ) : pathname === "400_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $400 Hotel Gift Card
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span> $19.95
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                12 Months to book travel
              </div>
            </div>
          </>
        ) : pathname === "500_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $500 Hotel Gift Card
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span> $24.95
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                12 Months to book travel
              </div>
            </div>
          </>
        ) : pathname === "3_night_hotel_stay_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                3-Night Hotel Stay Getaway
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span>{" "}
                $19.95/Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Good For Two Adults & Two Children
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Retail Value </span> $477.00
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                (resort fees not included)
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Room Rate, Taxes and Fees:
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $19-$39 Per Night
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $20-$29 Per Night for Fri & Sat Night Stays
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $5-$13 Per Night Per Child Up To 2 Children 17 Or Under
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                24 Months to complete travel
              </div>
            </div>
          </>
        ) : pathname === "4_night_hotel_stay_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                4-Night Hotel Stay Getaway
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span>{" "}
                $24.95/Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Good For Two Adults & Two Children
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Retail Value </span> $636.00
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                (resort fees not included)
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Room Rate, Taxes and Fees:
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $19-$39 Per Night
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $20-$29 Per Night for Fri & Sat Night Stays
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $5-$13 Per Night Per Child Up To 2 Children 17 Or Under
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                24 Months to complete travel
              </div>
            </div>
          </>
        ) : pathname === "4_night_mexico_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                4-Night Mexico Getaway
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span>{" "}
                $19.95/Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Taxes & Fees </span> $149 Grand
                Total for All 4 Nights
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Good For Two Adults & Two Children
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Retail Value </span> $699.00
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                24 Months to complete travel
              </div>
            </div>
          </>
        ) : pathname === "5_day_4_night_cruise" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                5-Day/4-Night Cruise
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span>{" "}
                $49.95/Person
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Taxes & Fees
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $258.96 Per Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                $517.92 Per Couple
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Good For Two Adults
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Retail Value </span> $899.00
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                24 Months to complete travel
              </div>
            </div>
          </>
        ) : pathname === "7_night_luxury_resort_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                7-Night Luxury Resort Getaway
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                3,500+ Locations
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span>{" "}
                $24.95/Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl "}>
                <span className={"font-bold"}>Taxes & Fees</span> $398 Grand
                Total
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Good For Two Adults & Two Guests
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Retail Value </span> $1,249.00
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                24 Months to complete travel
              </div>
            </div>
          </>
        ) : pathname === "roundtrip_airfare_and_hotel" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                Roundtrip Airfare & Hotel
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Redemption Fee</span>{" "}
                $50.00/Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl "}>
                <span className={"font-bold"}>Taxes & Fees</span> $199 Per
                Person
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Limit of One Hotel Voucher:</span>{" "}
                Only one of Any hotel vouchers, whether purchased or won, can be
                redeemed within any 24-month period.
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                Good For Two Adults
              </div>
              <div className={"text-sm sm:text-base md:text-lg lg:text-xl"}>
                <span className={"font-bold"}>Retail Value </span> $999.00
              </div>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                24 Months to complete travel
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </Layout>
  );
};
export default TermAndCondition;
