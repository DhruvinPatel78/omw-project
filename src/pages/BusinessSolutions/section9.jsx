import cardPayment from "../../images/BusinsessSolution/cardPayment.svg";
import cardPaymentW from "../../images/BusinsessSolution/cardPaymentW.svg";
import bank from "../../images/BusinsessSolution/bank.svg";
import bankW from "../../images/BusinsessSolution/bankW.svg";
import radioCheck from "../../images/BusinsessSolution/radioCheck.svg";
import radioUncheck from "../../images/BusinsessSolution/radioUncheck.svg";
import { useState } from "react";
import Container from "../../components/Container";
import TextField from "../../components/TextField";

const Section9 = () => {
  const [paymentSelect, setPaymentSelect] = useState("");
  const [paymentOptSelect, setPaymentOptSelect] = useState("");
  const payment = (e) => {
    setPaymentSelect(e.target.value);
  };
  const paymentOption = (e) => {
    setPaymentOptSelect(e.target.value);
  };
  return (
    <Container className="w-full flex bg-[#0a0e14cc]">
      <div
        className={
          "w-full flex md:flex-row flex-col sm:gap-[30px] gap-[24px] sm:p-8 p-4 border-solid border-2 border-[#5f6e8580] rounded-2xl"
        }
      >
        <div className="md:w-1/4 w-full">
          <ul className="w-full flex md:flex-col flex-row sm:gap-[30px] gap-[24px]">
            <li className={"md:w-full w-1/2"}>
              <input
                type="radio"
                id="bankPay"
                name="paymentOption"
                value="bankPay"
                className="hidden peer"
                required
                onChange={paymentOption}
              />
              <label
                htmlFor="bankPay"
                className="inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 border-[#5f6e8580] sm:rounded-[16px] rounded-[5px] cursor-pointer peer-checked:border-primary peer-checked:border-2"
              >
                <div
                  className={
                    "w-full flex md:flex-col flex-col-reverse justify-between items-center h-full gap-2"
                  }
                >
                  <div className={"flex justify-end w-full"}>
                    <img
                      src={
                        paymentOptSelect === "bankPay"
                          ? radioCheck
                          : radioUncheck
                      }
                      alt={""}
                      className={"h-[20px]"}
                    />
                  </div>
                  <div
                    className={
                      "gap-4 flex flex-col justify-between md:items-center items-start w-full h-full"
                    }
                  >
                    <div className="w-full font-bold text-[13px] md:text-center text-start">
                      Request Bank Wire or ACH Payment Option
                    </div>
                    <img
                      src={paymentOptSelect === "bankPay" ? bank : bankW}
                      className={"md:h-[100px] h-[50px]"}
                      alt={""}
                    />
                  </div>
                </div>
              </label>
            </li>
            <li className={"md:w-full w-1/2"}>
              <input
                type="radio"
                id="paymentCard"
                name="paymentOption"
                value="paymentCard"
                className="hidden peer"
                onChange={paymentOption}
              />
              <label
                htmlFor="paymentCard"
                className="inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 border-[#5f6e8580] sm:rounded-[16px] rounded-[5px] cursor-pointer peer-checked:border-primary peer-checked:border-2"
              >
                <div
                  className={
                    "w-full flex md:flex-col flex-col-reverse justify-between items-center h-full gap-2"
                  }
                >
                  <div className={"flex justify-end w-full"}>
                    <img
                      src={
                        paymentOptSelect === "paymentCard"
                          ? radioCheck
                          : radioUncheck
                      }
                      alt={""}
                      className={"h-[20px]"}
                    />
                  </div>
                  <div
                    className={
                      "gap-4 flex flex-col justify-between md:items-center items-start w-full h-full"
                    }
                  >
                    <div className="w-full font-bold text-[13px] md:text-center text-start">
                      Credit card
                    </div>
                    <img
                      src={
                        paymentOptSelect === "paymentCard"
                          ? cardPayment
                          : cardPaymentW
                      }
                      className={"md:h-[100px] h-[50px]"}
                      alt={""}
                    />
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div
          className={"md:w-9/12 w-full flex flex-col md:gap-[36px] gap-[18px]"}
        >
          <span
            className={
              "text-[14px] sm:text-2xl md:text-3xl lg:text-[34px] font-bold"
            }
          >
            Payment Options
          </span>
          <div
            className={
              "grid md:grid-cols-2 grid-cols-1 md:gap-[36px] gap-[18px]"
            }
          >
            <TextField
              label={"First Name"}
              placeholder={"Enter Your Name"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
            <TextField
              label={"Last Name"}
              placeholder={"Enter Your Name"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
          </div>
          <span
            className={
              "font-semibold text-sm sm:text-base md:text-xl lg:text-[28px]"
            }
          >
            Credit Card information
          </span>
          <div
            className={
              "grid md:grid-cols-3 grid-cols-1 md:gap-[36px] gap-[18px]"
            }
          >
            <TextField
              label={"Card Number"}
              placeholder={"4111 1111 1111 1111"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
            <TextField
              label={"Expiration Date"}
              placeholder={"select Date"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
              type={"date"}
            />{" "}
            <TextField
              label={"Security Code / CVV"}
              placeholder={"3 or 4 Digit Code"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
          </div>
          <div
            className={"w-full border-b-2 border-[#5F6E85] border-dashed "}
          />
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="monthlyPay"
                name="payment"
                value="monthlyPay"
                className="hidden peer"
                required
                onChange={payment}
              />
              <label
                htmlFor="monthlyPay"
                className="inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 border-[#5f6e8580] sm:rounded-[16px] rounded-[5px] cursor-pointer peer-checked:border-primary peer-checked:border-2"
              >
                <div className={"w-full"}>
                  <div className={"w-full flex justify-end"}>
                    <img
                      src={
                        paymentSelect === "monthlyPay"
                          ? radioCheck
                          : radioUncheck
                      }
                      alt={""}
                      className={"h-[20px]"}
                    />
                  </div>
                  <div className={" gap-4 flex items-center px-2 pb-4"}>
                    <img src={cardPaymentW} className={"h-[40px]"} alt={""} />
                    <div className="flex flex-col gap-[5px]">
                      <div className="w-full font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                        Pay Monthly
                      </div>
                      <div className="w-full text-primary font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                        $300,000
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="fullPayment"
                name="payment"
                value="fullPayment"
                className="hidden peer"
                onChange={payment}
              />
              <label
                htmlFor="fullPayment"
                className="inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 border-[#5f6e8580] sm:rounded-[16px] rounded-[5px] cursor-pointer peer-checked:border-primary peer-checked:border-2"
              >
                <div className={"w-full"}>
                  <div className={"w-full flex justify-end"}>
                    <img
                      src={
                        paymentSelect === "fullPayment"
                          ? radioCheck
                          : radioUncheck
                      }
                      className={"h-[20px]"}
                      alt={""}
                    />
                  </div>
                  <div className={"gap-4 flex items-center px-2 pb-4"}>
                    <img src={cardPaymentW} className={"h-[40px]"} alt={""} />
                    <div className="flex flex-col gap-[5px]">
                      <div className="w-full font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                        One Pay - Full Payment
                      </div>
                      <div className="w-full text-primary font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                        $600,000 . <span>10% Discount</span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </li>
          </ul>
          <div
            className={"w-full border-b-2 border-[#5F6E85] border-dashed "}
          />
          <span
            className={
              "font-semibold text-sm sm:text-base md:text-xl lg:text-[28px]"
            }
          >
            Authorize Campaign
          </span>
          <TextField
            label={"Company Name"}
            placeholder={"Enter your Company"}
            required={true}
            border={false}
            className={"!bg-[#18212E]"}
          />
          <div className={"grid grid-cols-2 md:gap-[36px] gap-[18px]"}>
            <TextField
              label={"Signer First Name"}
              placeholder={"Enter your First Name"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
            <TextField
              label={"Signer Last Name"}
              placeholder={"Enter your Last Name"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
            <TextField
              label={"Signature"}
              placeholder={"Signature"}
              required={true}
              border={false}
              className={`appearance-none block !bg-[#18212E] text-center text-primary placeholder:text-[#78bbff78] focus:outline-none font-homemade-apple !py-0 sm:!leading-[56px] !leading-[32px]`}
            />
            <TextField
              label={"Date"}
              placeholder={"Select Date"}
              required={true}
              border={false}
              className={"!bg-[#18212E]"}
            />
          </div>
          <div
            className={
              "w-full flex md:flex-row flex-col gap-2 justify-center items-center font-semibold text-[10px] sm:text-base md:text-lg lg:text-xl"
            }
          >
            <div>By signing above, I agree to our</div>
            <div className={"text-primary"}>
              <span className={"border-b border-solid border-primary"}>
                Terms and Conditions
              </span>
            </div>
          </div>
          <button
            className={
              "w-full uppercase bg-primary p-3 text-xs md:text-sm  lg:text-[22px] rounded-md"
            }
          >
            submit signature and payment
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Section9;
