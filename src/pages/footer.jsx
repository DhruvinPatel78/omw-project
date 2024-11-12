import Container from "../components/Container";
import Logo from "../images/omwLogo.svg";
import { resourceDummyList, socialMediaDummyList } from "./constant";
import React, { useState } from "react";
import PopUp from "../components/PopUp";
import { IoCloseOutline } from "react-icons/io5";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const navigate = useNavigate();
  const [userSupportOpen, setUserSupportOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const HandleRemovePopUp = () => setUserSupportOpen(false);
  const sendEmail = async (values) => {
    let htmlStr = `<div>
                <h3>First Name: <span>${values["firstName"]}</span></h3>
                <h3>Last Name: <span>${values["lastName"]}</span></h3>
                <h3>Email: <span>${values["email"]}</span></h3>
                <h3>Phone: <span>${values["phone"]}</span></h3>
                <h3>Comment: <span>${values["comment"]}</span></h3>
                </div>`;
    const payload = {
      subject: "User Support",
      html: htmlStr,
      to: ["We.are@onmyway.com"],
    };
    await axios
      .post(
        "https://whispering-citadel-11540-0a9768b9a869.herokuapp.com/https://prod-api.onmyway.com/omw/sendMail",
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
      })
      .finally(() => HandleRemovePopUp());
  };
  const UserSupportSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
        "Invalid email address format"
      )
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string()
      .matches("^(\\+\\d{1,3}[- ]?)?\\d{10}$", "Phone number must be correct")
      .required("Phone is required"),
    comment: Yup.string().required("Comment is required"),
  });

  return (
    <div className={"w-full"}>
      <Container>
        <div className={"border-b border-secondary"}></div>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] place-items-center py-10 justify-center"
          }
        >
          <div className={"w-full h-full flex flex-col gap-[20px]"}>
            <span className={"sm:text-lg text-sm font-bold uppercase"}>
              STAY CONNECTED
            </span>
            <div className={"flex flex-col gap-2"}>
              {socialMediaDummyList?.map((item, index) => (
                <div className={"flex flex-row gap-4 items-center"} key={index}>
                  <img src={item.icon} alt={item.title} />
                  <a
                    href={item.href}
                    className={
                      "sm:text-sm text-xs font-medium border-b border-transparent hover:border-b hover:border-white"
                    }
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={"w-full h-full flex flex-col gap-[20px]"}>
            <span className={"sm:text-lg text-sm font-bold uppercase"}>
              Business Solutions
            </span>
            <div className={"flex flex-row gap-4 items-center"}>
              <div className={"w-[10px] h-[10px] rounded-full bg-primary"} />
              <span className={"sm:text-sm text-xs font-medium"}>
                Businesses / Organizations / Schools
              </span>
            </div>
          </div>
          <div className={"w-full h-full flex flex-col gap-[20px]"}>
            <span className={"sm:text-lg text-sm font-bold uppercase"}>
              Business Solutions
            </span>
            <div className={"flex flex-col gap-2"}>
              {resourceDummyList?.map((item, index) => (
                <div className={"flex flex-row gap-4 items-center"} key={index}>
                  <div
                    className={"w-[10px] h-[10px] rounded-full bg-primary"}
                  />
                  <button
                    className={"sm:text-sm text-xs font-medium"}
                    onClick={() => {
                      if (item?.title === "User Support") {
                        setUserSupportOpen(true);
                      } else {
                        navigate(item?.href);
                      }
                    }}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={"w-full h-full flex flex-col gap-[20px] items-start"}>
            <img src={Logo} alt="Logo" className={"h-[30px]"} />
            <div className={"flex flex-col sm:gap-[10px] gap-[7px]"}>
              <span className={"font-bold sm:text-sm text-xs"}>
                OnMyWay Headquarters
              </span>
              <span
                className={"sm:w-[150px] w-full sm:text-sm text-xs font-medium"}
              >
                174 Meeting Street Suite 300-1061 Charleston, SC 29401
              </span>
            </div>
            <div className={"flex flex-row gap-4 items-center"}>
              <div className={"w-[10px] h-[10px] rounded-full bg-primary"} />
              <span
                className={"sm:text-sm text-xs font-medium cursor-pointer"}
                onClick={() => setOpenContact(true)}
              >
                Contact Sales
              </span>
            </div>
          </div>
        </div>
      </Container>
      <div className={"border-b border-secondary"}></div>
      <Container className={"text-center p-6 px-4"}>
        <span
          className={
            " flex sm:flex-row flex-col justify-center sm:text-xs text-[10px] font-medium text-[#B0B0C1]"
          }
        >
          © OnMyWay 2024. All Rights Reserved{" "}
          <span className={"text-[#EFF2FF]"}>
            {" "}
            |{" "}
            <a
              href={"/terms"}
              className={
                "border-b border-transparent hover:border-b hover:border-white"
              }
            >
              Terms of Use
            </a>{" "}
            | Privacy Policy
          </span>
        </span>
      </Container>
      <PopUp open={userSupportOpen} close={HandleRemovePopUp}>
        <div className={"flex w-full justify-end items-center"}>
          <IoCloseOutline
            color="#fff"
            size={32}
            onClick={HandleRemovePopUp}
            className={"cursor-pointer"}
          />
        </div>
        <p className={"text-2xl sm:text-[70px] font-extrabold"}>
          User <span className={"text-[#0A84FF]"}>Support</span>
        </p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            comment: "",
          }}
          validationSchema={UserSupportSchema}
          onSubmit={(values, { resetForm }) => {
            sendEmail(values).then(() => resetForm());
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
                  label={"First Name"}
                  placeholder={"Enter Your First Name"}
                  className={"!bg-[#0B0E16]"}
                  border={false}
                  value={values?.firstName}
                  name={"firstName"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched?.firstName && errors.firstName && errors?.firstName
                  }
                />
                <TextField
                  label={"Last Name"}
                  placeholder={"Enter Your Last Name"}
                  className={"!bg-[#0B0E16]"}
                  border={false}
                  value={values?.lastName}
                  name={"lastName"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={
                    touched?.lastName && errors.lastName && errors.lastName
                  }
                />
                <TextField
                  label={"Email"}
                  placeholder={"Enter Your Email"}
                  className={"!bg-[#0B0E16]"}
                  border={false}
                  value={values.email}
                  name={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={touched?.email && errors.email && errors.email}
                />
                <TextField
                  label={"Phone Number"}
                  placeholder={"Enter Your Phone Number"}
                  className={"!bg-[#0B0E16]"}
                  border={false}
                  value={values.phone}
                  name={"phone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={touched?.phone && errors.phone && errors.phone}
                />
                <div className={"col-span-1 sm:col-span-2"}>
                  <TextArea
                    label={"Comment / Request"}
                    placeholder={"Enter Your Comment"}
                    className={"!bg-[#0B0E16] max-h-[80px]"}
                    border={false}
                    value={values.comment}
                    name={"comment"}
                    type={"textArea"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={touched?.comment && errors.comment && errors.comment}
                  />
                </div>
                <div
                  className={
                    "col-span-1 sm:col-span-2 w-full flex justify-center items-center"
                  }
                >
                  <button
                    className={`bg-[#0A84FF] w-full max-w-[390px] h-10 sm:h-[68px] rounded-[6px] sm:rounded-xl text-[12px] sm:text-[22px] ${
                      isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    type={"submit"}
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
      <Modal
        show={openContact}
        toggle={() => setOpenContact((prev) => !prev)}
      />
    </div>
  );
};
export default Footer;
