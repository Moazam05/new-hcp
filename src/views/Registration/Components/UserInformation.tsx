// React Imports
import { useEffect, useState } from "react";
// React Input Mask
import InputMask from "react-input-mask";
// MUI
import { Box } from "@mui/material";
// Yup
import * as Yup from "yup";
// CSS
import "../Registration.css";
// Constants
import constants from "../../../constants";
// Custom
import PrimaryInput from "../../../components/PrimaryInput";
import { SubHeading } from "../../../components/Heading";
import InActiveModal from "./InActiveModal";

interface UserInformationProps {
  formik: any;
}

const UserInformation = ({ formik }: UserInformationProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  // Inactivity Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [showInactivity, setShowInactivity] = useState(false);

  useEffect(() => {
    let interval: any;

    const startTimer = () => {
      const time = Number(import.meta.env.VITE_REACT_INACTIVE_TIME) * 60 * 1000;

      interval = setInterval(() => {
        setShowInactivity(true);
        setModalOpen(true);
      }, time);
    };
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [modalOpen]);

  let interval: any;
  const handleResetTimer = () => {
    setShowInactivity(false);
    setModalOpen(false);
    clearInterval(interval);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 576px)": {
          padding: "0 20px",
          gap: "0px",
        },
      }}
    >
      <h2 className="registration-title">{constants.USER_INFORMATION_TITLE}</h2>
      <Box
        sx={{
          fontSize: "20px",
          margin: "5px 0 40px",
          color: "#414042",
          fontWeight: 400,
          "@media (max-width: 576px)": {
            fontSize: "16px",
            margin: "8px 0",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "470px",
          }}
        >
          <p>{constants.USER_INFORMATION_PARAGRAPH}</p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            margin: "8px 0",
          },
        }}
      >
        <Box
          sx={{
            height: "86px",
            width: "275px",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Last Name*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            helperText={
              errors.lastName && touched.lastName ? errors.lastName : ""
            }
            error={errors.lastName && touched.lastName ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "275px",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>First Name*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            helperText={
              errors.firstName && touched.firstName ? errors.firstName : ""
            }
            error={errors.firstName && touched.firstName ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
      {/* 2nd */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            margin: "8px 0",
          },
        }}
      >
        <Box
          sx={{
            height: "86px",
            width: "275px",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Job Title*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="jobTitle"
            placeholder="Job Title"
            value={values.jobTitle}
            helperText={
              errors.jobTitle && touched.jobTitle ? errors.jobTitle : ""
            }
            error={errors.jobTitle && touched.jobTitle ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "275px",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Phone Number*</SubHeading>
          <InputMask
            mask="(999) 999-9999"
            value={values.phoneNumber}
            disabled={false}
            maskChar="_"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <PrimaryInput
              type="text"
              label=""
              name="phoneNumber"
              placeholder="(123) 456-7890"
              value={values.phoneNumber}
              helperText={
                errors.phoneNumber && touched.phoneNumber
                  ? errors.phoneNumber
                  : ""
              }
              error={errors.phoneNumber && touched.phoneNumber ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputMask>
        </Box>
      </Box>
      {/* 3rd */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            margin: "8px 0",
          },
        }}
      >
        <Box
          sx={{
            height: "86px",
            width: "275px",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Email Address*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="email"
            placeholder="Email Address"
            value={values.email}
            helperText={errors.email && touched.email ? errors.email : ""}
            error={errors.email && touched.email ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "275px",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Confirm Email Address*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="confirmEmail"
            placeholder="Confirm Email Address"
            value={values.confirmEmail}
            helperText={
              errors.confirmEmail && touched.confirmEmail
                ? errors.confirmEmail
                : ""
            }
            error={errors.confirmEmail && touched.confirmEmail ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
      {showInactivity && (
        <InActiveModal
          modalOpen={modalOpen}
          handleResetTimer={handleResetTimer}
        />
      )}
    </Box>
  );
};

UserInformation.label = "User Information";
UserInformation.initialValues = {
  lastName: "",
  firstName: "",
  jobTitle: "",
  phoneNumber: "",
  email: "",
  confirmEmail: "",
};

UserInformation.validationSchema = Yup.object().shape({
  lastName: Yup.string().required("Last Name is required"),
  firstName: Yup.string().required("First Name is required"),
  jobTitle: Yup.string().required("Job Title is required"),
  phoneNumber: Yup.string()
    .test(
      "valid-phone-number",
      "Invalid Characters",
      (value: string | undefined) => {
        if (!value) return false;
        const numericValue = value.replace(/\D/g, "");
        return numericValue.length === 10;
      }
    )
    .required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Email Address Does Not Match")
    .required("Confirm Email is required"),
});

export default UserInformation;
