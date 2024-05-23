// Yup
import * as Yup from "yup";
import PrimaryInput from "../../../../components/PrimaryInput";
import { SubHeading } from "../../../../components/Heading";
import { Box } from "@mui/material";
interface PatientDetailsProps {
  formik: any;
}

const PatientDetails = ({ formik }: PatientDetailsProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <>
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
        <h2 className="registration-title">Patient Details</h2>
        <Box
          sx={{
            fontSize: "20px",
            margin: "5px 0 30px",
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
            <p>Patient Name</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "86px",
              width: "50%",
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
              width: "50%",
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
            width: "100%",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "86px",
              width: "50%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Date of Birth*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="dateOfBirth"
              placeholder="xx/xx/xxxx"
              value={values.dateOfBirth}
              helperText={
                errors.dateOfBirth && touched.dateOfBirth
                  ? errors.dateOfBirth
                  : ""
              }
              error={errors.dateOfBirth && touched.dateOfBirth ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box
            sx={{
              height: "86px",
              width: "50%",
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
        {/* 3rd */}
      </Box>
    </>
  );
};

PatientDetails.label = "Patient Details";
PatientDetails.initialValues = {
  lastName: "",
  firstName: "",
  dateOfBirth: "",
  gender: "",
  addressOne: "",
  addressTwo: "",
  city: "",
  state: "",
  zip: "",
};

PatientDetails.validationSchema = Yup.object().shape({
  lastName: Yup.string().required("Last Name is required"),
  firstName: Yup.string().required("First Name is required"),
  // date of Birth is like this format 05/05/2021
  dateOfBirth: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Invalid Date Format"
    )
    .required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  addressOne: Yup.string().required("Required"),
  addressTwo: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
});

export default PatientDetails;
