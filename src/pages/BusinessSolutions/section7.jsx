import Container from "../../components/Container";
import Iphone from "../../images/BusinsessSolution/s7Iphone.png";
import TextField from "../../components/TextField";
import DropDown from "../../components/DropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Section7 = () => {
  const navigate = useNavigate();
  const [priceDetails, setPriceDetails] = useState({
    name: "",
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    term: "",
    employees: "",
  });

  const priceChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPriceDetails((pre) => ({ ...pre, [name]: value }));
  };
  const submitHandler = () => {
    navigate("/tab=pricing", { state: priceDetails });
  };
  return (
    <Container
      className={"flex flex-col lg:flex-row gap-6 sm:py-[80px] py-[30px]"}
    >
      <div
        className={
          "w-full lg:w-2/5 h-full bg-no-repeat bg-center flex items-end justify-center bg-contain min-h-[500px]"
        }
        style={{ backgroundImage: `url(${Iphone})` }}
      ></div>
      <div className={"flex flex-col gap-6 justify-center"}>
        <span
          className={
            "font-extrabold text-[26px] sm:text-3xl md:text-6xl lg:text-70 flex flex-col text-primary"
          }
        >
          <span className="bg-millionText bg-clip-text text-transparent">
            Real Time
          </span>{" "}
          Price Calculator
        </span>
        <div className={"flex flex-col gap-6"}>
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] gap-[20px]  place-items-center justify-center"
            }
          >
            <TextField
              label={"Your Name"}
              placeholder={"Enter your name"}
              name={"name"}
              value={priceDetails.name}
              onChange={priceChangeHandler}
              required
            />
            <TextField
              label={"Company Name"}
              placeholder={"Enter Your Common Name"}
              name={"companyName"}
              value={priceDetails.companyName}
              onChange={priceChangeHandler}
              required
            />
            <TextField
              label={"Company Email"}
              placeholder={"Enter Your Company Email"}
              name={"companyEmail"}
              value={priceDetails.companyEmail}
              onChange={priceChangeHandler}
              required
            />
            <TextField
              label={"Phone Number"}
              placeholder={"Enter Your Phone Number"}
              name={"phoneNumber"}
              value={priceDetails.phoneNumber}
              onChange={priceChangeHandler}
              required
            />
            <DropDown
              label={"Term"}
              placeholder={"Select Your Term"}
              options={[
                { value: 12, label: "12 Month" },
                { value: 1, label: "1 Month" },
              ]}
              name={"term"}
              value={priceDetails.term}
              onChange={priceChangeHandler}
              required
            />
            <DropDown
              label={"Employees"}
              placeholder={"Number Of Employees"}
              options={[
                { value: 5000, label: "0-5000" },
                { value: 10000, label: "5001-10000" },
                { value: 15000, label: "10001-15000" },
                { value: 20000, label: "15001-20000" },
                { value: 25000, label: "20001-25000" },
                { value: 30000, label: "25001-30000" },
              ]}
              name={"employees"}
              value={priceDetails.employees}
              onChange={priceChangeHandler}
              required
            />
          </div>
          <button
            className={
              "w-full uppercase p-4 bg-primary font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] rounded-xl"
            }
            onClick={submitHandler}
          >
            Get Pricing
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Section7;
