import { IoCloseOutline } from "react-icons/io5";
import TextField from "./TextField";
import DropDown from "./DropDown";

const Modal = ({ show, toggle }) => {
  return show ? (
    <div
      className={
        "fixed w-screen h-screen z-10 top-0 left-0 overflow-y-scroll bg-[#00000099] flex justify-center items-center"
      }
    >
      <div
        className={
          "bg-[#242A2F] rounded-[30px] shadow-[0px_4px_64px_0px_#021426] p-4 sm:p-9 w-full max-w-[1000px] flex flex-col justify-center items-center"
        }
      >
        <div className={"flex w-full justify-end items-center"}>
          <IoCloseOutline
            color="#fff"
            size={32}
            onClick={toggle}
            className={"cursor-pointer"}
          />
        </div>
        <p className={"text-2xl sm:text-[70px] font-extrabold"}>
          Contact <span className={"text-[#0A84FF]"}>Sales</span>
        </p>
        <p className={"text-base sm:text-xl font-semibold text-[#EFF2FF] mt-2 sm:mt-6"}>
          60 Minute Call Back Guaranteed
        </p>
        <div
          className={
            "mt-8 border-[#ffffff33] border border-solid w-full rounded-[18px] p-4 sm:p-[54px]"
          }
        >
          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-[68px] gap-y-5 sm:gap-y-[45px]"}>
            <TextField
              label={"Your Name"}
              placeholder={"Enter Your Name"}
              className={"!bg-[#0B0E16]"}
              border={false}
            />
            <TextField
              label={"Company Name"}
              placeholder={"Enter Your Company Name"}
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
              placeholder={"Enter Your Phone Number"}
              className={"!bg-[#0B0E16]"}
              border={false}
            />
            <DropDown
              label={"Contact Preference"}
              placeholder={"Number Of Employees"}
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
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
              ]}
            />
          </div>
          <div className={"w-full flex justify-center items-center"}>
            <button
              className={
                "bg-[#0A84FF] w-full max-w-[390px] h-10 sm:h-[68px] rounded-xl mt-10 text-base sm:text-xl"
              }
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
