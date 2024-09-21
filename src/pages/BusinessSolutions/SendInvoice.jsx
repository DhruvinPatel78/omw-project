import TextField from "../../components/TextField";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import moment from "moment/moment";

const SendInvoice = () => {
  const [data, setData] = useState({
    member: [],
    term: "",
    employees: 0,
    amount: 0,
  });

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("calculatedData"), null);
    if (localData) {
      console.log(localData);
      setData((prev) => ({
        ...prev,
        member: [
          ...prev.member,
          {
            name: localData.name,
            company: localData.companyName,
            phone: localData.phoneNumber,
            companyEmail: localData.companyEmail,
          },
        ],
        term: `${localData.term} Months`,
        employees: +localData.employees,
        amount: localData.employees * 15,
      }));
    }
  }, []);

  console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="w-full flex bg-[#0a0e14cc]">
      <form
        className={
          "w-full flex md:flex-row flex-col sm:gap-[30px] gap-[24px] sm:p-8 p-4 border-solid border-2 border-[#5f6e8580] rounded-2xl"
        }
        onSubmit={submitHandler}
      >
        <div className={"w-full flex flex-col md:gap-[36px] gap-[18px]"}>
          <span
            className={
              "text-[14px] sm:text-2xl md:text-3xl lg:text-[34px] font-bold"
            }
          >
            Invoice Information
          </span>
          <div
            className={
              "grid md:grid-cols-2 grid-cols-1 md:gap-[36px] gap-[18px]"
            }
          >
            <TextField
              label={"Your Name"}
              placeholder={"Enter Your Name"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"name"}
            />
            <TextField
              label={"Company Name"}
              placeholder={"Enter Company Name"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"companyName"}
            />
            <TextField
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"phone"}
            />
            <TextField
              label={"Email"}
              placeholder={"Enter Email"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"email"}
            />
          </div>
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
            />
            <TextField
              label={"Signer Last Name"}
              placeholder={"Enter your Last Name"}
              required
              border={false}
              className={"!bg-[#18212E]"}
              name={"signerLastName"}
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
              "w-full uppercase bg-primary sm:p-[19px] p-[10px] text-[11px] md:text-sm  lg:text-[22px] sm:rounded-[12px] rounded-[6px]"
            }
            type={"submit"}
          >
            submit signature and payment
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SendInvoice;
