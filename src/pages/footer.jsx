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
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();
  const [userSupportOpen, setUserSupportOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openThankyou, setOpenThankyou] = useState(false);
  const [isWhistleblower, setIsWhistleblower] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleRemovePopUp = () => {
    setUserSupportOpen(false);
    setIsWhistleblower(false);
  };

  const UserSupportSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
        "Invalid email address format"
      )
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required(
      isWhistleblower ? "Company Name is required." : "Last Name is required"
    ),
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
            <div className={"flex flex-col gap-2"}>
              <div className={"flex flex-row gap-4 items-center"}>
                <div className={"w-[10px] h-[10px] rounded-full bg-primary"} />
                <span className={"sm:text-sm text-xs font-medium"}>
                  Businesses / Organizations / Schools
                </span>
              </div>
              <div className={"flex flex-row gap-4 items-center"}>
                <div className={"w-[10px] h-[10px] rounded-full bg-primary"} />
                <button
                  className={"sm:text-sm text-xs font-medium"}
                  onClick={async () => {
                    await setIsWhistleblower(true);
                    setUserSupportOpen(true);
                  }}
                >
                  Whistleblower (Anonymous)
                </button>
              </div>
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
            |{" "}
            <a
              href={"/privacy"}
              className={
                "border-b border-transparent hover:border-b hover:border-white"
              }
            >
              Privacy Policy
            </a>
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
        <p
          className={`text-2xl ${
            isWhistleblower ? "sm:text-[50px]" : "sm:text-[70px]"
          } font-extrabold`}
        >
          {isWhistleblower ? "Whistleblower" : "User"}{" "}
          <span className={"text-[#0A84FF]"}>
            {isWhistleblower ? "Submission" : "Support"}
          </span>
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
          onSubmit={async (values, { resetForm }) => {
            try {
              setLoading(true);
              const payload = {
                first_name: values["firstName"],
                email: values["email"],
                phone_number: values["phone"],
                comment: values["comment"],
              };
              if (isWhistleblower) {
                payload.company_name = values["lastName"];
              } else {
                payload.last_name = values["lastName"];
              }
              await axios
                .post(
                  `https://prod-api.onmyway.com/omw/${
                    isWhistleblower ? "whistler_blower_support" : "user_support"
                  }`,
                  {
                    ...payload,
                  },
                  {
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                    },
                  }
                )
                .then((data) => {
                  console.log("res");
                  setOpenThankyou(true);
                })
                .catch((e) => {
                  console.log("error", e);
                });
              resetForm();
              HandleRemovePopUp();
            } catch (error) {
              console.log("error", error);
            } finally {
              setLoading(false);
            }
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
                "mt-4 sm:mt-8 border-[#ffffff33] border border-solid w-full rounded-[18px] p-4 sm:p-[54px]"
              }
            >
              <form
                onSubmit={handleSubmit}
                className={
                  "grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] gap-y-5 sm:gap-y-6"
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
                  readOnly={isSubmitting}
                  disabled={loading}
                />
                <TextField
                  label={isWhistleblower ? "Company Name" : "Last Name"}
                  placeholder={
                    isWhistleblower
                      ? "Enter Your Company Name"
                      : "Enter Your Last Name"
                  }
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                    disabled={loading}
                  />
                </div>
                <div
                  className={
                    "col-span-1 sm:col-span-2 w-full flex justify-center items-center"
                  }
                >
                  <button
                    className={`bg-[#0A84FF] w-full flex justify-center items-center max-w-[390px] h-10 sm:h-[68px] rounded-[6px] sm:rounded-xl text-[12px] sm:text-[22px] ${
                        loading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    type={"submit"}
                    disabled={loading}
                  >
                    {loading ? <AiOutlineLoading3Quarters className={'text-3xl animate-spin'} /> : "SUBMIT"}
                  </button>
                </div>
                {isWhistleblower && (
                  <div
                    className={
                      "col-span-1 sm:col-span-2 w-full flex justify-center items-center"
                    }
                  >
                    <p className={"text-xs sm:text-base"}>
                      Disclaimer: We guarantee that you will stay anonymous. Our
                      Policy Is to have our OSHA/SEC Taskforce Review
                      Immediately. Then take action if needed. We will keep you
                      updated, every step of the way! Thank You!
                    </p>
                  </div>
                )}
              </form>
            </div>
          )}
        </Formik>
      </PopUp>
      <Modal
        show={openContact}
        toggle={() => setOpenContact(false)}
        setOpenThankyou={setOpenThankyou}
      />
      <PopUp
        open={openThankyou}
        close={() => setOpenThankyou((prev) => !prev)}
        containerClass={"max-w-[90%] sm:max-w-[500px]"}
      >
        <div className={"flex w-full justify-end items-center"}>
          <IoCloseOutline
            color="#fff"
            size={24}
            onClick={() => setOpenThankyou((prev) => !prev)}
            className={"cursor-pointer"}
          />
        </div>
        <div className={"flex flex-col items-center gap-5"}>
          <p
            className={
              "text-2xl sm:text-3xl font-extrabold bg-cardBorder bg-clip-text text-transparent whitespace-nowrap"
            }
          >
            Thank You
          </p>
          <p>We Will Contact You Shortly.</p>
        </div>
      </PopUp>
    </div>
  );
};
export default Footer;
