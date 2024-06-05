import Container from "../../components/Container";
import Iphone from "../../images/BusinsessSolution/s7Iphone.png";
import TextField from "../../components/TextField";
import DropDown from "../../components/DropDown";
const Section7 = () => {
  return (
    <Container className={"flex flex-col lg:flex-row gap-6 py-8"}>
      <div
        className={
          "w-full lg:w-2/5 h-full lg:h-[calc(100vh-150px)] bg-no-repeat bg-center flex items-end justify-center bg-contain min-h-[500px]"
        }
        style={{ backgroundImage: `url(${Iphone})` }}
      ></div>
      <div className={"flex flex-col gap-6 justify-center"}>
        <span
          className={
            "font-extrabold text-2xl sm:text-3xl md:text-6xl lg:text-70 flex flex-col text-primary"
          }
        >
          <span className="bg-millionText bg-clip-text text-transparent">
            Real Time
          </span>{" "}
          Price Calculator
        </span>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 gap-4  place-items-center justify-center"
          }
        >
          <TextField label={"Your Name"} placeholder={"Enter your name"} />
          <TextField
            label={"Company Name"}
            placeholder={"Enter Your Common Name"}
          />
          <TextField
            label={"Company Email"}
            placeholder={"Enter Your Company Email"}
          />
          <TextField
            label={"Phone Number"}
            placeholder={"Enter Your Phone Number"}
          />
          <DropDown
            label={"Term"}
            placeholder={"Select Your Term"}
            options={[
              { value: 12, label: "12 Month" },
              { value: 1, label: "1 Month" },
            ]}
          />
          <DropDown
            label={"Employees"}
            placeholder={"Number Of Employees"}
            options={[]}
          />
        </div>
        <button
          className={
            "w-full uppercase p-4 bg-primary font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] rounded-xl"
          }
        >
          Get Pricing
        </button>
      </div>
    </Container>
  );
};
export default Section7;
