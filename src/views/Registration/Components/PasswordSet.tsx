import { Box } from "@mui/material";
import * as Yup from "yup";
import { SubHeading } from "../../../components/Heading";
import PrimaryInput from "../../../components/PrimaryInput";
import { useState } from "react";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import "../Registration.css";

interface PasswordSetProps {
  formik: any;
}

const PasswordSet = ({ formik }: PasswordSetProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const { values, errors, touched, handleChange, handleBlur } = formik;

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const hideShowConfirmPassword = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };

  const checkPasswordStrength = () => {
    const password = values.password;
    const strengthConditions = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /\d/.test(password),
      /[@$!%*?&]/.test(password),
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
      <h2 className="registration-title">Complete your registration.</h2>
      <Box
        sx={{
          fontSize: "20px",
          margin: "5px 0 40px",
          color: "#414042",
          fontWeight: 600,
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
          <p>
            Please enter the password you would like to use for your account.
          </p>

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
                {index === 0 ? "  Minimum of 8 characters" : null}
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
    .min(8, "Password must be at least 8 characters.")
    .matches(/[@$!%*?&]/, "Password must contain a special character.")
    .matches(/\d/, "Password must contain a number.")
    .matches(/[A-Z]/, "Password must contain an uppercase letter."),
  confirmPassword: Yup.string()
    .required("Passwords do not match.")
    .oneOf([Yup.ref("password")], "Passwords do not match."),
});

export default PasswordSet;
