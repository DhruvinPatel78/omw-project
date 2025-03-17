import Container from "../../components/Container";
import Iphone from "../../images/BusinsessSolution/s7Iphone.png";
import TextField from "../../components/TextField";
import DropDown from "../../components/DropDown";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Section7 = () => {
  const [loading, setLoading] = useState(false);
  const PriceSchema = Yup.object().shape({
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
    term: Yup.string().required("Term is required"),
    employees: Yup.string().required("Employees is required"),
  });
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios
        .post(
          "https://prod-api.onmyway.com/omw/bussiness_price",
          {
            name: values.name,
            company_name: values.companyName,
            company_email: values.companyEmail,
            phone_number: values.phoneNumber,
            term: values.term,
            employees: values.employees,
            amount: values.employees * 15,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((data) => {
          console.log("res", data);
          localStorage.setItem("calculatedData", JSON.stringify(values));
          window.open("/pricing", "_blank");
        })
        .catch((e) => {
          console.log("error", e);
        });
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
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
      <div className={"flex flex-col gap-6 justify-center"} id="priceForm">
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
        <Formik
          initialValues={{
            name: "",
            companyName: "",
            companyEmail: "",
            phoneNumber: "",
            term: "",
            employees: "",
          }}
          validationSchema={PriceSchema}
          onSubmit={async (values, { resetForm }) => {
            await submitHandler(values);
            resetForm();
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
            <form
              onSubmit={handleSubmit}
              className={
                "grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] gap-[20px] place-items-center justify-center"
              }
            >
              <TextField
                label={"Your Name"}
                placeholder={"Enter your name"}
                name={"name"}
                value={values?.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched?.name && errors.name && errors?.name}
                required
                disabled={loading}
              />
              <TextField
                label={"Company Name"}
                placeholder={"Enter Your Common Name"}
                name={"companyName"}
                value={values?.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.companyName &&
                  errors.companyName &&
                  errors?.companyName
                }
                required
                disabled={loading}
              />
              <TextField
                label={"Company Email"}
                placeholder={"Enter Your Company Email"}
                name={"companyEmail"}
                value={values?.companyEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.companyEmail &&
                  errors.companyEmail &&
                  errors?.companyEmail
                }
                required
                type={"email"}
                disabled={loading}
              />
              <TextField
                label={"Phone Number"}
                placeholder={"Enter Your Phone Number"}
                name={"phoneNumber"}
                value={values?.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.phoneNumber &&
                  errors.phoneNumber &&
                  errors?.phoneNumber
                }
                required
                type={"tel"}
                disabled={loading}
              />
              <DropDown
                label={"Term"}
                placeholder={"Select Your Term"}
                options={[
                  { value: 12, label: "12 Months" },
                  { value: 24, label: "24 Months" },
                  { value: 36, label: "36 Months" },
                  { value: 48, label: "48 Months" },
                ]}
                name={"term"}
                value={values?.term}
                onChange={handleChange}
                onBlur={() => setFieldTouched("term", true)}
                error={touched?.term && errors.term && errors?.term}
                required
                disabled={loading}
              />
              <DropDown
                label={"Employees"}
                placeholder={"Number Of Employees"}
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
                name={"employees"}
                value={values?.employees}
                onChange={handleChange}
                onBlur={() => setFieldTouched("employees", true)}
                error={
                  touched?.employees && errors.employees && errors?.employees
                }
                required
                disabled={loading}
              />
              <button
                className={`col-span-1 sm:col-span-2 w-full flex justify-center items-center uppercase p-4 bg-primary font-semibold text-xs sm:text-lg md:text-xl lg:text-[22px] rounded-xl mt-10 ${
                  loading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                type={"submit"}
                disabled={loading}
              >
                {loading ? (
                  <AiOutlineLoading3Quarters
                    className={"text-3xl animate-spin"}
                  />
                ) : (
                  "View Pricing Instantly"
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
export default Section7;
