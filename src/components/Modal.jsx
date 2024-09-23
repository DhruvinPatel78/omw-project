import { IoCloseOutline } from "react-icons/io5";
import TextField from "./TextField";
import DropDown from "./DropDown";
import axios from "axios";
import PopUp from "./PopUp";
import { Formik } from "formik";
import * as Yup from "yup";

const Modal = ({ show, toggle }) => {
  const formSubmit = async (values) => {
    const data = {
      name: values["name"],
      company_name: values["companyName"],
      company_email: values["companyEmail"],
      employees: values["employees"],
      phone_number: values["phoneNumber"],
      contact_preference: values["contactPreference"],
    };
    sendEmail(values);
    await axios
      .post(
        "https://whispering-citadel-11540-0a9768b9a869.herokuapp.com/https://be.devomw.com/omw/sales",
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((data) => {
        console.log("res", data);
        toggle();
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const sendEmail = async (values) => {
    let htmlStr = `<div>
                <h3>Name: <span>${values["name"]}</span></h3>
                <h3>Company Name: <span>${values["companyName"]}</span></h3>
                <h3>Email: <span>${values["companyEmail"]}</span></h3>
                <h3>Phone: <span>${values["phoneNumber"]}</span></h3>
                <h3>Contact Preference: <span>${values["contactPreference"]}</span></h3>
                <h3>Employees: <span>${values["employees"]}</span></h3>
                </div>`;
    const payload = {
      subject: "New Contact",
      html: htmlStr,
    };
    await axios
      .post(
        "https://whispering-citadel-11540-0a9768b9a869.herokuapp.com/https://omw-api.devomw.com/omw/sendEmail",
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((data) => {
        console.log("res", data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  const ContactSelSchema = Yup.object().shape({
    companyEmail: Yup.string()
      .matches(
        "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
        "Invalid email address format"
      )
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    phoneNumber: Yup.string()
      .matches("^(\\+\\d{1,3}[- ]?)?\\d{10}$", "Phone number must be correct")
      .required("Phone is required"),
    contactPreference: Yup.string().required("Contact Preference is required"),
    employees: Yup.string().required("Employees is required"),
  });
  return (
    <PopUp open={show} close={toggle}>
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
      <Formik
        initialValues={{
          name: "",
          companyName: "",
          companyEmail: "",
          phoneNumber: "",
          contactPreference: "",
          employees: "",
        }}
        validationSchema={ContactSelSchema}
        onSubmit={(values, { resetForm }) => {
          formSubmit(values).then(() => resetForm());
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <div
            className={
              "mt-8 border-[#ffffff33] border border-solid w-full rounded-[18px] p-4 sm:p-[54px]"
            }
          >
            <form
              onSubmit={handleSubmit}
              className={
                "grid grid-cols-1 sm:grid-cols-2 gap-x-[68px] gap-y-5 sm:gap-y-[45px]"
              }
            >
              <TextField
                label={"Your Name"}
                placeholder={"Enter Your Name"}
                className={"!bg-[#0B0E16]"}
                border={false}
                value={values?.name}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.name && errors.name && errors?.name}
                required
              />
              <TextField
                label={"Company Name"}
                placeholder={"Enter Your Company Name"}
                className={"!bg-[#0B0E16]"}
                border={false}
                value={values.companyName}
                name={"companyName"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.companyName &&
                  errors.companyName &&
                  errors?.companyName
                }
                required
              />
              <TextField
                label={"Company Email"}
                placeholder={"Enter Your Company Email"}
                className={"!bg-[#0B0E16]"}
                border={false}
                value={values.companyEmail}
                name={"companyEmail"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.companyEmail &&
                  errors.companyEmail &&
                  errors?.companyEmail
                }
                required
              />
              <TextField
                label={"Phone Number"}
                placeholder={"Enter Your Phone Number"}
                className={"!bg-[#0B0E16]"}
                border={false}
                value={values.phoneNumber}
                name={"phoneNumber"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.phoneNumber &&
                  errors.phoneNumber &&
                  errors?.phoneNumber
                }
                required
              />
              <DropDown
                label={"Contact Preference"}
                className={"!bg-[#0B0E16]"}
                border={false}
                options={[
                  { value: "phone call", label: "Phone Call" },
                  { value: "text", label: "Text" },
                  { value: "email", label: "Email" },
                ]}
                value={values.contactPreference}
                name={"contactPreference"}
                onChange={handleChange}
                onBlur={() => setFieldTouched("contactPreference", true)}
                error={
                  touched?.contactPreference &&
                  errors.contactPreference &&
                  errors?.contactPreference
                }
                required
              />
              <DropDown
                label={"Employees"}
                placeholder={"Number Of Employees"}
                className={"!bg-[#0B0E16]"}
                border={false}
                options={[
                  { value: 50, label: "1-50" },
                  { value: 100, label: "51-100" },
                  { value: 150, label: "101-150" },
                  { value: 200, label: "151-200" },
                  { value: 250, label: "201-250" },
                  { value: 300, label: "251-300" },
                  { value: 350, label: "301-350" },
                  { value: 400, label: "351-400" },
                  { value: 450, label: "401-450" },
                  { value: 500, label: "451-500" },
                  { value: 1000, label: "501-1000" },
                  { value: 2000, label: "1001-2000" },
                  { value: 3000, label: "2001-3000" },
                  { value: 4000, label: "3001-4000" },
                  { value: 5000, label: "4001-5000" },
                  { value: 10000, label: "5001-10000" },
                  { value: 15000, label: "10001-15000" },
                  { value: 25000, label: "20001-25000" },
                  { value: 30000, label: "25001-30000" },
                  { value: 35000, label: "30001-35000" },
                  { value: 40000, label: "35001-40000" },
                  { value: 45000, label: "40001-45000" },
                  { value: 50000, label: "45001-50000" },
                  { value: 75000, label: "50001-75000" },
                  { value: 100000, label: "75001-100000" },
                  { value: 150000, label: "100001-150000" },
                  { value: 300000, label: "200001-300000" },
                  { value: 400000, label: "300001-400000" },
                  { value: 500000, label: "400001-500000" },
                  { value: 1000000, label: "500001-1000000" },
                ]}
                value={values.employees}
                name={"employees"}
                onChange={handleChange}
                onBlur={() => setFieldTouched("employees", true)}
                error={
                  touched?.employees && errors.employees && errors?.employees
                }
                required
              />
              <div
                className={
                  "col-span-1 sm:col-span-2 w-full flex justify-center items-center"
                }
              >
                <button
                  className={
                    "bg-[#0A84FF] w-full max-w-[390px] h-10 sm:h-[68px] rounded-[6px] sm:rounded-xl text-[12px] sm:text-[22px]"
                  }
                  disabled={isSubmitting}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </PopUp>
  );
};

export default Modal;
