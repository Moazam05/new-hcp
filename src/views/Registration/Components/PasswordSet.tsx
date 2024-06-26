// React Imports
import { useEffect, useState } from "react";
// React Icons
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
// MUI
import { Box } from "@mui/material";
// Yup
import * as Yup from "yup";
// Constants
import constants from "../../../constants";
// Custom
import { SubHeading } from "../../../components/Heading";
import PrimaryInput from "../../../components/PrimaryInput";
import InActiveModal from "./InActiveModal";
// Style
import "../Registration.css";

interface PasswordSetProps {
  formik: any;
}

const PasswordSet = ({ formik }: PasswordSetProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  // states
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
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

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const hideShowConfirmPassword = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };

  const checkPasswordStrength = () => {
    const password = values.password;
    const strengthConditions = [
      password.length >= 12, // Minimum of 12 characters
      /[A-Z]/.test(password), // An UPPERCASE letter
      /[a-z]/.test(password), // A lowercase letter
      /[0-9@$!%*?&]/.test(password), // A number or symbol
    ];
    return strengthConditions;
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
      <h2 className="registration-title">{constants.PASSWORD_TITLE}</h2>
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
            maxWidth: "490px",
          }}
        >
          <p>{constants.PASSWORD_PARAGRAPH}</p>

          <Box
            sx={{
              width: "100%",
              marginTop: "20px",
              "@media (max-width: 576px)": {
                width: "100%",
              },
            }}
          >
            <SubHeading>Password*</SubHeading>
            <PrimaryInput
              type={showPassword ? "text" : "password"}
              label=""
              name="password"
              placeholder="Password"
              value={values.password}
              //   helperText={}
              error={errors.password && touched.password ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
              onClick={hideShowPassword}
              endAdornment={
                showPassword ? (
                  <AiOutlineEye color="disabled" />
                ) : (
                  <AiOutlineEyeInvisible color="disabled" />
                )
              }
            />
          </Box>

          <Box
            sx={{
              margin: "30px 0",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              "@media (max-width: 576px)": {
                margin: "20px 0",
              },
            }}
          >
            {checkPasswordStrength().map((condition, index) => (
              <span key={index} className="password-strength">
                {condition ? (
                  <AiOutlineCheckCircle color="green" />
                ) : (
                  <AiOutlineCloseCircle color="red" />
                )}
                {index === 0 ? "  Minimum of 12 characters" : null}
                {index === 1 ? "  An UPPERCASE letter" : null}
                {index === 2 ? "  A lowercase letter" : null}
                {index === 3 ? "  A number or symbol" : null}
                <br />
              </span>
            ))}
          </Box>

          <Box
            sx={{
              height: "86px",
              width: "100%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "80px",
              },
            }}
          >
            <SubHeading>Confirm Password*</SubHeading>
            <PrimaryInput
              type={confirmPasswordShow ? "text" : "password"}
              label=""
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              helperText={
                errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : ""
              }
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              onChange={handleChange}
              onBlur={handleBlur}
              onClick={hideShowConfirmPassword}
              endAdornment={
                confirmPasswordShow ? (
                  <AiOutlineEye color="disabled" />
                ) : (
                  <AiOutlineEyeInvisible color="disabled" />
                )
              }
            />
          </Box>
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

PasswordSet.label = "Password Set";
PasswordSet.initialValues = {
  password: "",
  confirmPassword: "",
};
PasswordSet.validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required.")
    .min(12, "Password must be at least 12 characters.")
    .matches(/[A-Z]/, "")
    .matches(/[a-z]/, "")
    .matches(/[0-9@$!%*?&]/, ""),
  confirmPassword: Yup.string()
    .required("Passwords do not match.")
    .oneOf([Yup.ref("password")], "Passwords do not match."),
});

export default PasswordSet;
