import { IoCloseOutline } from "react-icons/io5";
import TextField from "./TextField";
import DropDown from "./DropDown";
import { useState } from "react";

const Modal = ({ show, toggle }) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    contactPreference: "",
    employees: "",
  });
  const contactChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInfo((pre) => ({ ...pre, [name]: value }));
  };
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
        <p
          className={
            "text-base sm:text-xl font-semibold text-[#EFF2FF] mt-2 sm:mt-6"
          }
        >
          60 Minute Call Back Guaranteed
        </p>
        <form
          className={
            "mt-8 border-[#ffffff33] border border-solid w-full rounded-[18px] p-4 sm:p-[54px]"
          }
          onSubmit={toggle}
        >
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-2 gap-x-[68px] gap-y-5 sm:gap-y-[45px]"
            }
          >
            <TextField
              label={"Your Name"}
              placeholder={"Enter Your Name"}
              className={"!bg-[#0B0E16]"}
              border={false}
              value={contactInfo?.name}
              name={"name"}
              onChange={contactChangeHandler}
              required
            />
            <TextField
              label={"Company Name"}
              placeholder={"Enter Your Company Name"}
              className={"!bg-[#0B0E16]"}
              border={false}
              value={contactInfo.companyName}
              name={"companyName"}
              onChange={contactChangeHandler}
              required
            />
            <TextField
              label={"Company Email"}
              placeholder={"Enter Your Company Email"}
              className={"!bg-[#0B0E16]"}
              border={false}
              value={contactInfo.companyEmail}
              name={"companyEmail"}
              onChange={contactChangeHandler}
              required
            />
            <TextField
              label={"Phone Number"}
              placeholder={"Enter Your Phone Number"}
              className={"!bg-[#0B0E16]"}
              border={false}
              value={contactInfo.phoneNumber}
              name={"phoneNumber"}
              onChange={contactChangeHandler}
              required
            />
            <DropDown
              label={"Contact Preference"}
              // placeholder={"Number Of Employees"}
              className={"!bg-[#0B0E16]"}
              border={false}
              options={[
                { value: "Phone Call", label: "Phone Call" },
                { value: "Text", label: "Text" },
                { value: "Email", label: "Email" },
              ]}
              value={contactInfo.contactPreference}
              name={"contactPreference"}
              onChange={contactChangeHandler}
              required
            />
            <DropDown
              label={"Employees"}
              placeholder={"Number Of Employees"}
              className={"!bg-[#0B0E16]"}
              border={false}
              options={[
                { value: "1-50", label: "1-50" },
                { value: "51-100", label: "51-100" },
                { value: "101-150", label: "101-150" },
                { value: "151-200", label: "151-200" },
                { value: "201-250", label: "201-250" },
                { value: "251-300", label: "251-300" },
                { value: "301-350", label: "301-350" },
                { value: "351-400", label: "351-400" },
                { value: "401-450", label: "401-450" },
                { value: "451-500", label: "451-500" },
                { value: "501-1000", label: "501-1000" },
                { value: "1001-2000", label: "1001-2000" },
                { value: "2001-3000", label: "2001-3000" },
                { value: "3001-4000", label: "3001-4000" },
                { value: "4001-5000", label: "4001-5000" },
                { value: "5001-10000", label: "5001-10000" },
                { value: "10001-15000", label: "10001-15000" },
                { value: "20001-25000", label: "20001-25000" },
                { value: "25001-30000", label: "25001-30000" },
                { value: "30001-35000", label: "30001-35000" },
                { value: "35001-40000", label: "35001-40000" },
                { value: "40001-45000", label: "40001-45000" },
                { value: "45001-50000", label: "45001-50000" },
                { value: "50001-75000", label: "50001-75000" },
                { value: "75001-100000", label: "75001-100000" },
                { value: "100001-150000", label: "100001-150000" },
                { value: "200001-300000", label: "200001-300000" },
                { value: "300001-400000", label: "300001-400000" },
                { value: "400001-500000", label: "400001-500000" },
                { value: "500001-1000000", label: "500001-1000000" },
              ]}
              value={contactInfo.employees}
              name={"employees"}
              onChange={contactChangeHandler}
              required
            />
          </div>
          <div className={"w-full flex justify-center items-center"}>
            <button
              className={
                "bg-[#0A84FF] w-full max-w-[390px] h-10 sm:h-[68px] rounded-[6px] sm:rounded-xl mt-10 text-[12px] sm:text-[22px]"
              }
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
