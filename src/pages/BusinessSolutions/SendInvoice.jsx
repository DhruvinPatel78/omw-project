import TextField from "../../components/TextField";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import moment from "moment/moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SendInvoice = ({ reviewData }) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    member: [],
    term: "",
    employees: 0,
    amount: 0,
  });

  useEffect(() => {
    if (msg) {
      if (msg === "success") {
        setTimeout(() => setMsg(""), 3000);
        navigate("/");
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("calculatedData"), null);
    if (localData) {
      setData((prev) => ({
        ...prev,
        member: [
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

  useEffect(() => {
    if (reviewData) {
      setData((prev) => ({
        ...prev,
        member: [
          {
            name: reviewData.name,
            company: reviewData.companyName,
            phone: reviewData.phoneNumber,
            companyEmail: reviewData.companyEmail,
          },
        ],
        term: `${reviewData.term} Months`,
        employees: reviewData.employees,
        amount: reviewData.amount || reviewData.employees * 15,
      }));
    }
  }, [reviewData]);

  const onChangeHandler = (e, index) => {
    const tempData = { ...data };
    tempData.member[index][e.target.name] = e.target.value;
    setData({ ...tempData });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const allEmployees = [];
    data.member.forEach((member, index) => {
      const employee = {
        name: member.name,
        company_name: member.company,
        phone_number: member.phone,
        email: member.companyEmail,
      };
      allEmployees.push(employee);
    });

    try {
      setLoading(true);
      setMsg("");
      await axios.post(
        "https://prod-api.onmyway.com/omw/bussiness_employee",
        {
          employees: allEmployees,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      let htmlStr = `<div>
                <h3>Date: <span>${moment().format("DD/MM/yyyy")}</span></h3>
                <h3>Term: <span>${data.term}</span></h3>
                <h3>Employees: <span>${data.employees}</span></h3>
                <h3>Amount: <span>${data.amount}</span></h3>
                <br />`;
      data.member.forEach((member, index) => {
        htmlStr += `<ul>
        <strong>Member ${index + 1}</strong>
        <li>Name: ${member.name}</li>
        <li>Company Name: ${member.company}</li>
        <li>Email: ${member.companyEmail}</li>
        <li>Phone: ${member.phone}</li>
        <br />
      </ul>`;
      });
      htmlStr += `</div>`;
      const payload = {
        subject: "New Invoice",
        html: htmlStr,
      };
      await axios
        .post("https://prod-api.onmyway.com/omw/sendMail", payload, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((data) => {
          console.log("res", data);
          setMsg("success");
        })
        .catch((e) => {
          console.log("error", e);
          setMsg("Fail");
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addMember = () => {
    setData((prev) => ({
      ...prev,
      member: [
        ...prev.member,
        {
          name: "",
          company: "",
          phone: "",
          companyEmail: "",
        },
      ],
    }));
  };

  const removeMember = (index) => {
    setData((prev) => ({
      ...prev,
      member: prev.member.filter((_, i) => i !== index),
    }));
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
            Send Payment Link and Invoice Options
          </span>
          {data.member.map((member, index) => (
            <div className={"w-full"} key={index}>
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
                  value={member.name}
                  onChange={(e) => onChangeHandler(e, index)}
                />
                <TextField
                  label={"Company Name"}
                  placeholder={"Enter Company Name"}
                  required
                  border={false}
                  className={"!bg-[#18212E]"}
                  name={"company"}
                  value={member.company}
                  onChange={(e) => onChangeHandler(e, index)}
                />
                <TextField
                  label={"Phone Number"}
                  placeholder={"Enter Phone Number"}
                  required
                  border={false}
                  className={"!bg-[#18212E]"}
                  name={"phone"}
                  value={member.phone}
                  onChange={(e) => onChangeHandler(e, index)}
                />
                <TextField
                  label={"Email"}
                  placeholder={"Enter Email"}
                  required
                  border={false}
                  className={"!bg-[#18212E]"}
                  name={"companyEmail"}
                  value={member.companyEmail}
                  onChange={(e) => onChangeHandler(e, index)}
                />
              </div>
              {index && index > 0 ? (
                <div className={"flex w-full justify-end items-center"}>
                  <IoCloseOutline
                    color="#fff"
                    size={32}
                    onClick={() => removeMember(index)}
                    className={"cursor-pointer"}
                  />
                </div>
              ) : null}
            </div>
          ))}

          <div className={"flex justify-center items-center"}>
            <button
              className={
                "w-full sm:max-w-[300px] bg-primary sm:p-[19px] p-[10px] text-[11px] md:text-sm  lg:text-[22px] sm:rounded-[12px] rounded-[6px]"
              }
              onClick={addMember}
            >
              Add Team Member
            </button>
          </div>
          <div
            className={"w-full border-b-2 border-[#5F6E85] border-dashed "}
          />

          <button
            className={
              "w-full  bg-primary sm:p-[19px] p-[10px] text-[11px] md:text-sm  lg:text-[22px] sm:rounded-[12px] rounded-[6px]"
            }
            type={"submit"}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request For Invoice"}
          </button>
          {msg ? (
            <div className={"w-full justify-center items-center"}>
              <p className={"text-center text-ls sm:text-2xl"}>
                {msg === "success"
                  ? "We will contact you soon"
                  : "Try again after some time."}
              </p>
            </div>
          ) : null}
        </div>
      </form>
    </Container>
  );
};

export default SendInvoice;
