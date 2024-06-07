import Container from "../../components/Container";
import TextField from "../../components/TextField";
import DropDown from "../../components/DropDown";

const Section10 = () => {
  return (
    <Container
      className={
        "sm:py-8 py-4 flex flex-col sm:gap-[50px] gap-[23px] justify-center items-center"
      }
    >
      <div
        className={
          "flex flex-col sm:gap-[20px] gap-[10px] justify-center items-center"
        }
      >
        <span
          className={
            "text-2xl sm:text-3xl md:text-6xl lg:text-70 text-primary font-extrabold !leading-[100%]"
          }
        >
          <span className="bg-millionText bg-clip-text text-transparent">
            Contact{" "}
          </span>
          Sales
        </span>
        <span
          className={"text-sm sm:text-base md:text-lg lg:text-xl font-semibold"}
        >
          60 Minute Call Back Guaranteed
        </span>
      </div>
      <div
        className={
          "w-full p-[54px] px-4 sm:px-[54px] sm:py-[45px] py-4  bg-[#242A2F] rounded-[18px] border-[1.5px] border-[#ffffff33] flex flex-col sm:gap-[45px] gap-[19px] justify-center items-center "
        }
      >
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 sm:gap-[45px] gap-[19px] place-items-center justify-center w-full"
          }
        >
          <TextField
            label={"Your Name"}
            placeholder={"Enter your name"}
            className={"!bg-[#0B0E16]"}
            border={false}
          />
          <TextField
            label={"Company Name"}
            placeholder={"Enter Your Common Name"}
            className={"!bg-[#0B0E16]"}
            border={false}
          />
          <TextField
            label={"Company Email"}
            placeholder={"Enter Your Company Email"}
            className={"!bg-[#0B0E16]"}
            border={false}
          />
          <TextField
            label={"Phone Number"}
            placeholder={"Enter Your Company Email"}
            className={"!bg-[#0B0E16]"}
            border={false}
          />
          <DropDown
            label={"Contact Preference"}
            placeholder={"Select Your Contact Preference"}
            className={"!bg-[#0B0E16]"}
            border={false}
            options={[
              { value: "Phone Call", label: "Phone Call" },
              { value: "Phone Call 1", label: "Phone Call" },
            ]}
          />
          <DropDown
            label={"Employees"}
            placeholder={"Number Of Employees"}
            className={"!bg-[#0B0E16]"}
            border={false}
            options={[
              { value: "Phone Call", label: "Phone Call" },
              { value: "Phone Call 1", label: "Phone Call" },
            ]}
          />
        </div>
        <button className={"bg-primary sm:p-[19px] p-[10px] sm:rounded-xl rounded-[6px] sm:w-[390px] w-full uppercase font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px]"}>Submit</button>
      </div>
    </Container>
  );
};
export default Section10;
