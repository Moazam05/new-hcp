// MUI Imports
import { Box } from "@mui/material";
// Yup
import * as Yup from "yup";
// Custom Imports
import PrimaryInput from "../../../components/PrimaryInput";
import { SubHeading } from "../../../components/Heading";
// CSS
import "../Registration.css";

interface UserInformationProps {
  formik: any;
}

const UserInformation = ({ formik }: UserInformationProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

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
      <h2 className="registration-title">Create your admin account.</h2>
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
            maxWidth: "470px",
          }}
        >
          <p>
            You will be able to add additional users once you have completed
            your registration.
          </p>
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
          <PrimaryInput
            type="number"
            label=""
            name="phoneNumber"
            placeholder="Phone Number"
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
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Emails must match")
    .required("Confirm Email is required"),
});

export default UserInformation;
