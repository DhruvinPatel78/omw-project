import PaymentForm from "./PaymentForm";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Container from "../../components/Container";
import TextField from "../../components/TextField";
import radioCheck from "../../images/BusinsessSolution/radioCheck.svg";
import radioUncheck from "../../images/BusinsessSolution/radioUncheck.svg";
import bank from "../../images/BusinsessSolution/bank.svg";
import bankW from "../../images/BusinsessSolution/bankW.svg";
import cardPayment from "../../images/BusinsessSolution/cardPayment.svg";
import cardPaymentW from "../../images/BusinsessSolution/cardPaymentW.svg";
import moment from "moment/moment";
import getStripe from "./lib";

// const stripePromise = getStripe();

const Section9 = ({ data }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSelect, setPaymentSelect] = useState("fullPayment");
  const [paymentOptSelect, setPaymentOptSelect] = useState("paymentCard");
  const [paymentDetail, setPaymentDetail] = useState({
    firstName: "",
    lastName: "",
    // cardNumber: "",
    // expirationDate: "",
    // cvvCode: "",
    companyName: "",
    signerFirstName: "",
    signerLastName: "",
    // signature: "",
    // date: "",
  });

  const payment = (value) => {
    setPaymentSelect(value);
  };
  const paymentOption = (value) => {
    setPaymentOptSelect(value);
  };
  const paymentChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentDetail((pre) => ({ ...pre, [name]: value }));
  };

  const amount = data?.employees * 15;
  const discountedAmount = amount * data?.term;

  const submitHandler = async (e) => {
    e.preventDefault();

    // Fetch client secret from the backend
    // const { data } = await fetch(
    //   "http://localhost:8080/omw/create-payment-intent",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ amount: 50.0 }), // amount in cents ($50.00)
    //   }
    // ).then((res) => res.json());
    //
    // console.log("DATA =>", data);
    // setClientSecret(data?.clientSecret);

    // const paymentResult = await stripe.confirmCardPayment(data.clientSecret, {
    //   payment_method: {
    //     card: cardElement,
    //     billing_details: {
    //       name: "Customer Name",
    //     },
    //   },
    // });
    //
    // if (paymentResult.error) {
    //   setErrorMessage(paymentResult.error.message);
    // } else if (paymentResult.paymentIntent.status === "succeeded") {
    //   alert("Payment Successful!");
    // }
    //
    // setIsPaymentProcessing(false);
  };

  return (
    <Container className="w-full flex bg-[#0a0e14cc]">
      <form
        className={
          "w-full flex md:flex-row flex-col sm:gap-[30px] gap-[24px] sm:p-8 p-4 border-solid border-2 border-[#5f6e8580] rounded-2xl"
        }
        onSubmit={submitHandler}
      >
        {/*<div className="md:w-1/4 w-full">*/}
        {/*  <ul className="w-full flex md:flex-col flex-row sm:gap-[30px] gap-[24px]">*/}
        {/*    <li className={"md:w-full w-1/2"}>*/}
        {/*      <input*/}
        {/*        type="radio"*/}
        {/*        id="bankPay"*/}
        {/*        name="paymentOption"*/}
        {/*        value="bankPay"*/}
        {/*        className="hidden peer"*/}
        {/*        required*/}
        {/*        onChange={paymentOption}*/}
        {/*      />*/}
        {/*      <label*/}
        {/*        htmlFor="bankPay"*/}
        {/*        className={`inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 ${*/}
        {/*          paymentOptSelect === "bankPay"*/}
        {/*            ? "border-primary"*/}
        {/*            : "border-[#5f6e8580]"*/}
        {/*        } sm:rounded-[16px] rounded-[5px] cursor-pointer`}*/}
        {/*      >*/}
        {/*        <div*/}
        {/*          className={*/}
        {/*            "w-full flex md:flex-col flex-col-reverse justify-between items-center h-full sm:gap-2 gap-0"*/}
        {/*          }*/}
        {/*        >*/}
        {/*          <div className={"flex justify-end w-full"}>*/}
        {/*            <img*/}
        {/*              src={*/}
        {/*                paymentOptSelect === "bankPay"*/}
        {/*                  ? radioCheck*/}
        {/*                  : radioUncheck*/}
        {/*              }*/}
        {/*              alt={""}*/}
        {/*              className={"h-[20px]"}*/}
        {/*            />*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*            className={*/}
        {/*              "sm:gap-4 gap-2 flex flex-col justify-between md:items-center items-start w-full h-full"*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <div className="w-full font-bold sm:text-[13px] text-[10px] md:text-center text-start">*/}
        {/*              Request Bank Wire or ACH Payment Option*/}
        {/*            </div>*/}
        {/*            <img*/}
        {/*              src={paymentOptSelect === "bankPay" ? bank : bankW}*/}
        {/*              className={"md:h-[100px] h-[50px]"}*/}
        {/*              alt={""}*/}
        {/*            />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </label>*/}
        {/*    </li>*/}
        {/*    <li className={"md:w-full w-1/2"}>*/}
        {/*      <input*/}
        {/*        type="radio"*/}
        {/*        id="paymentCard"*/}
        {/*        name="paymentOption"*/}
        {/*        value="paymentCard"*/}
        {/*        className="hidden peer"*/}
        {/*        onChange={paymentOption}*/}
        {/*      />*/}
        {/*      <label*/}
        {/*        htmlFor="paymentCard"*/}
        {/*        className={`inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 ${*/}
        {/*          paymentOptSelect === "paymentCard"*/}
        {/*            ? "border-primary"*/}
        {/*            : "border-[#5f6e8580]"*/}
        {/*        }  sm:rounded-[16px] rounded-[5px] cursor-pointer`}*/}
        {/*      >*/}
        {/*        <div*/}
        {/*          className={*/}
        {/*            "w-full flex md:flex-col flex-col-reverse justify-between items-center h-full sm:gap-2 gap-0"*/}
        {/*          }*/}
        {/*        >*/}
        {/*          <div className={"flex justify-end w-full"}>*/}
        {/*            <img*/}
        {/*              src={*/}
        {/*                paymentOptSelect === "paymentCard"*/}
        {/*                  ? radioCheck*/}
        {/*                  : radioUncheck*/}
        {/*              }*/}
        {/*              alt={""}*/}
        {/*              className={"h-[20px]"}*/}
        {/*            />*/}
        {/*          </div>*/}
        {/*          <div*/}
        {/*            className={*/}
        {/*              "sm:gap-4 gap-2 flex flex-col justify-between md:items-center items-start w-full h-full"*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <div className="w-full font-bold sm:text-[13px] text-[10px] md:text-center text-start">*/}
        {/*              Credit card*/}
        {/*            </div>*/}
        {/*            <img*/}
        {/*              src={*/}
        {/*                paymentOptSelect === "paymentCard"*/}
        {/*                  ? cardPayment*/}
        {/*                  : cardPaymentW*/}
        {/*              }*/}
        {/*              className={"md:h-[100px] h-[50px]"}*/}
        {/*              alt={""}*/}
        {/*            />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </label>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        <div className={"w-full flex flex-col md:gap-[36px] gap-[18px]"}>
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
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"firstName"}
              value={paymentDetail?.firstName}
              onChange={paymentChangeHandler}
            />
            <TextField
              label={"Last Name"}
              placeholder={"Enter Your Name"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"lastName"}
              value={paymentDetail?.lastName}
              onChange={paymentChangeHandler}
            />
          </div>
          {/*<span*/}
          {/*  className={*/}
          {/*    "font-semibold text-sm sm:text-base md:text-xl lg:text-[28px]"*/}
          {/*  }*/}
          {/*>*/}
          {/*  Credit Card information*/}
          {/*</span>*/}
          {/*<div*/}
          {/*  className={*/}
          {/*    "grid md:grid-cols-3 grid-cols-1 md:gap-[36px] gap-[18px]"*/}
          {/*  }*/}
          {/*>*/}
          {/*  <TextField*/}
          {/*    label={"Card Number"}*/}
          {/*    placeholder={"4111 1111 1111 1111"}*/}
          {/*    required*/}
          {/*    border={false}*/}
          {/*    className={"!bg-[#18212E]"}*/}
          {/*    value={paymentDetail.cardNumber}*/}
          {/*    name={"cardNumber"}*/}
          {/*    onChange={paymentChangeHandler}*/}
          {/*  />*/}
          {/*  <TextField*/}
          {/*    label={"Expiration Date"}*/}
          {/*    placeholder={"select Date"}*/}
          {/*    required*/}
          {/*    border={false}*/}
          {/*    className={"!bg-[#18212E]"}*/}
          {/*    type={"date"}*/}
          {/*    name={"expirationDate"}*/}
          {/*    value={paymentDetail.expirationDate}*/}
          {/*    onChange={paymentChangeHandler}*/}
          {/*  />*/}
          {/*  <TextField*/}
          {/*    label={"Security Code / CVV"}*/}
          {/*    placeholder={"3 or 4 Digit Code"}*/}
          {/*    required*/}
          {/*    border={false}*/}
          {/*    className={"!bg-[#18212E]"}*/}
          {/*    name={"cvvCode"}*/}
          {/*    value={paymentDetail.cvvCode}*/}
          {/*    onChange={paymentChangeHandler}*/}
          {/*  />*/}
          {/*</div>*/}
          <div
            className={"w-full border-b-2 border-[#5F6E85] border-dashed "}
          />

          <ul className="grid w-full sm:gap-[27px] gap-[14px] md:grid-cols-2">
            <li onClick={() => paymentOption("bankPay")}>
              <div
                className={`inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 ${
                  paymentOptSelect === "bankPay"
                    ? "border-primary"
                    : "border-[#5f6e8580]"
                } sm:rounded-[14px] rounded-[6px] cursor-pointer`}
              >
                <div className={"w-full"}>
                  <div className={"w-full flex justify-end"}>
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
                  <div className={"gap-4 flex items-center px-2 sm:pb-4 pb-2"}>
                    <img
                      src={paymentOptSelect === "bankPay" ? bank : bankW}
                      className={"md:h-[60px] h-[40px]"}
                      alt={""}
                    />
                    <div className="flex flex-col gap-[5px]">
                      <div className="w-full font-bold text-xs sm:text-base md:text-lg lg:text-xl">
                        Request Bank Wire or ACH Payment Option
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li onClick={() => paymentOption("paymentCard")}>
              <div
                className={`inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 ${
                  paymentOptSelect === "paymentCard"
                    ? "border-primary"
                    : "border-[#5f6e8580]"
                } sm:rounded-[14px] rounded-[6px] cursor-pointer`}
              >
                <div className={"w-full"}>
                  <div className={"w-full flex justify-end"}>
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
                  <div className={"gap-4 flex items-center px-2 sm:pb-4 pb-2"}>
                    <img
                      src={
                        paymentOptSelect === "paymentCard"
                          ? cardPayment
                          : cardPaymentW
                      }
                      className={"md:h-[60px] h-[40px]"}
                      alt={""}
                    />
                    <div className="flex flex-col gap-[5px]">
                      <div className="w-full font-bold text-xs sm:text-base md:text-lg lg:text-xl">
                        Credit card
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div
            className={"w-full border-b-2 border-[#5F6E85] border-dashed "}
          />
          <ul className="grid w-full sm:gap-[27px] gap-[14px] md:grid-cols-2">
            <li>
              <div
                onClick={() => payment("monthlyPay")}
                className={`inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 ${
                  paymentSelect === "monthlyPay"
                    ? "border-primary"
                    : "border-[#5f6e8580]"
                } sm:rounded-[14px] rounded-[6px] cursor-pointer`}
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
                  <div className={"gap-4 flex items-center px-2 sm:pb-4 pb-2"}>
                    <img src={cardPaymentW} className={"h-[40px]"} alt={""} />
                    <div className="flex flex-col gap-[5px]">
                      <div className="w-full font-bold text-xs sm:text-base md:text-lg lg:text-xl">
                        Pay Monthly
                      </div>
                      <div className="w-full text-primary font-bold text-xs sm:text-base md:text-lg lg:text-xl">
                        ${amount / +data.term}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => payment("fullPayment")}
                className={`inline-flex items-center justify-between w-full h-full p-[15px] bg-transparent border-2 ${
                  paymentSelect === "fullPayment"
                    ? "border-primary"
                    : "border-[#5f6e8580]"
                } sm:rounded-[14px] rounded-[6px] cursor-pointer`}
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
                  <div className={"gap-4 flex items-center px-2 sm:pb-4 pb-2"}>
                    <img src={cardPaymentW} className={"h-[40px]"} alt={""} />
                    <div className="flex flex-col gap-[5px]">
                      <div className="w-full font-bold text-xs sm:text-base md:text-lg lg:text-xl">
                        One Pay - Full Payment
                      </div>
                      <div className="w-full text-primary font-bold text-xs sm:text-base md:text-lg lg:text-xl">
                        ${discountedAmount}{" "}
                        {/*<span className={"text-xl text-[#5F6E85] text-center"}>*/}
                        {/*  .*/}
                        {/*</span>{" "}*/}
                        {/*<span>10% Discount</span>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className={"flex justify-center items-center gap-10"}>
            <TextField
              label={"Company Name"}
              placeholder={"Enter your Company"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"companyName"}
              value={paymentDetail?.companyName}
              onChange={paymentChangeHandler}
            />
            <TextField
              label={"Date"}
              placeholder={"Select Date"}
              border={false}
              className={"!bg-[#18212E]"}
              name={"date"}
              value={moment().format("YYYY-MM-DD")}
              readonly
              disabled={true}
            />
          </div>
          <div className={"grid grid-cols-2 md:gap-[36px] gap-[18px]"}>
            <TextField
              label={"Signer First Name"}
              placeholder={"Enter your First Name"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"signerFirstName"}
              value={paymentDetail?.signerFirstName}
              onChange={paymentChangeHandler}
            />
            <TextField
              label={"Signer Last Name"}
              placeholder={"Enter your Last Name"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"signerLastName"}
              value={paymentDetail?.signerLastName}
              onChange={paymentChangeHandler}
            />
            {/*<TextField*/}
            {/*  label={"Signature"}*/}
            {/*  placeholder={"Signature"}*/}
            {/*  required*/}
            {/*  border={false}*/}
            {/*  className={`appearance-none block !bg-[#18212E] text-center text-primary placeholder:text-[#78bbff78] focus:outline-none font-homemade-apple !py-0 sm:!leading-[56px] !leading-[32px]`}*/}
            {/*  name={"signature"}*/}
            {/*  value={paymentDetail?.signature}*/}
            {/*  onChange={paymentChangeHandler}*/}
            {/*/>*/}
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
              "w-full uppercase bg-primary sm:p-[19px] p-[10px] text-[11px] md:text-sm  lg:text-[22px] sm:rounded-[12px] rounded-[6px]"
            }
            type={"submit"}
          >
            submit signature and payment
          </button>
        </div>
      </form>
      {/*{clientSecret && stripePromise ? (*/}
      {/*  <Elements stripe={stripePromise} options={{ clientSecret }}>*/}
      {/*    <PaymentForm />*/}
      {/*  </Elements>*/}
      {/*) : null}*/}
    </Container>
  );
};

export default Section9;
