import { Box } from "@mui/material";
import * as Yup from "yup";
import PrimaryInput from "../../../components/PrimaryInput";
import { SubHeading } from "../../../components/Heading";
import "../Registration.css";

interface PracticeInformationProps {
  formik: any;
}

const PracticeInformation = ({ formik }: PracticeInformationProps) => {
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
      <h2 className="registration-title">Enter your practice information.</h2>
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
            maxWidth: "505px",
          }}
        >
          <p>
            Please enter the primary address and contact info for your practice.
          </p>
        </Box>
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
        <SubHeading>Practice Name*</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="practiceName"
          placeholder="Practice Name"
          value={values.practiceName}
          helperText={
            errors.practiceName && touched.practiceName
              ? errors.practiceName
              : ""
          }
          error={errors.practiceName && touched.practiceName ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
        <SubHeading>State of Service*</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="siteOfService"
          placeholder="State of Service"
          value={values.siteOfService}
          helperText={
            errors.siteOfService && touched.siteOfService
              ? errors.siteOfService
              : ""
          }
          error={errors.siteOfService && touched.siteOfService ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
        <SubHeading>Address Line 1*</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="addressLineOne"
          placeholder="Address Line 1"
          value={values.addressLineOne}
          helperText={
            errors.addressLineOne && touched.addressLineOne
              ? errors.addressLineOne
              : ""
          }
          error={errors.addressLineOne && touched.addressLineOne ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>

      <Box
        sx={{
          height: "80px",
          width: "100%",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "60px",
          },
        }}
      >
        <SubHeading>Address Line 2</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="addressLineTwo"
          placeholder="Address Line 2"
          value={values.addressLineTwo}
          helperText={
            errors.addressLineTwo && touched.addressLineTwo
              ? errors.addressLineTwo
              : ""
          }
          error={errors.addressLineTwo && touched.addressLineTwo ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>State*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="state"
            placeholder="State"
            value={values.state}
            helperText={errors.state && touched.state ? errors.state : ""}
            error={errors.state && touched.state ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Zip Code*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="zipCode"
            placeholder="Zip Code"
            value={values.zipCode}
            helperText={errors.zipCode && touched.zipCode ? errors.zipCode : ""}
            error={errors.zipCode && touched.zipCode ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
            width: "100%",
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
            name="practiceJobTitle"
            placeholder="Job Title"
            value={values.practiceJobTitle}
            helperText={
              errors.practiceJobTitle && touched.practiceJobTitle
                ? errors.practiceJobTitle
                : ""
            }
            error={
              errors.practiceJobTitle && touched.practiceJobTitle ? true : false
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Phone Number*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="practicePhoneNumber"
            placeholder="Phone Number"
            value={values.practicePhoneNumber}
            helperText={
              errors.practicePhoneNumber && touched.practicePhoneNumber
                ? errors.practicePhoneNumber
                : ""
            }
            error={
              errors.practicePhoneNumber && touched.practicePhoneNumber
                ? true
                : false
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
    </Box>
  );
};

PracticeInformation.label = "Practice Information";
PracticeInformation.initialValues = {
  practiceName: "",
  siteOfService: "",
  addressLineOne: "",
  addressLineTwo: "",
  state: "",
  zipCode: "",
  practiceJobTitle: "",
  practicePhoneNumber: "",
};

PracticeInformation.validationSchema = Yup.object().shape({
  practiceName: Yup.string().required("Practice Name is required"),
  siteOfService: Yup.string().required("Site of Service is required"),
  addressLineOne: Yup.string().required("Address Line 1 is required"),
  addressLineTwo: Yup.string(),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  practiceJobTitle: Yup.string().required("Job Title is required"),
  practicePhoneNumber: Yup.string().required("Phone Number is required"),
});

export default PracticeInformation;
