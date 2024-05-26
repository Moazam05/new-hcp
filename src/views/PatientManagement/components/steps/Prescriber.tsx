// Yup
import { Box } from "@mui/material";
import * as Yup from "yup";
import { SubHeading } from "../../../../components/Heading";
import SelectInput from "../../../../components/SelectInput";
import PrimaryInput from "../../../../components/PrimaryInput";
import Paragraph from "../../../../components/Paragraph";

interface PrescriberProps {
  formik: any;
}

const prescriberData = [
  {
    label: "Doctor",
    value: "doctor",
  },
  {
    label: "Nurse",
    value: "nurse",
  },
];

const Prescriber = ({ formik }: PrescriberProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "@media (max-width: 576px)": {
            padding: "0",
            gap: "0px",
          },
        }}
      >
        <h1>Which prescriber is requesting services</h1>
      </Box>

      <Box
        sx={{
          height: "86px",
          width: "100%",
          margin: "40px 0",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "60px",
          },
        }}
      >
        {/* <SubHeading>Preferred Phone Type*</SubHeading> */}
        <SelectInput
          name="prescriber"
          styles={{ width: "100%" }}
          value={values.prescriber}
          onChange={(e: any) => {
            handleChange(e);
          }}
          data={prescriberData}
          onBlur={handleBlur}
          error={errors.prescriber && touched.prescriber ? true : false}
          label="Prescriber"
          options={prescriberData?.map((project: any) => {
            return {
              ...project,
              id: project.value,
              value: project.value,
              label: project.label,
            };
          })}
        >
          {touched.prescriber && errors.prescriber && (
            <Box
              sx={{
                fontSize: "12px",
                color: "#FF0000",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              <p>{errors.prescriber}</p>
            </Box>
          )}
        </SelectInput>
      </Box>

      {/* 2nd */}
      <Box
        sx={{
          maxWidth: "470px",
        }}
      >
        <Paragraph
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#00739A",
            "@media (max-width: 576px)": {
              fontSize: "14px",
            },
          }}
        >
          Prescriber Details
        </Paragraph>
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
      {/* 3rd */}
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
          <SubHeading>NPI Number*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="npi"
            placeholder="NPI Number"
            value={values.npi}
            helperText={errors.npi && touched.npi ? errors.npi : ""}
            error={errors.npi && touched.npi ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
    </>
  );
};

Prescriber.label = "Prescriber";
Prescriber.initialValues = {
  prescriber: "",
  lastName: "",
  firstName: "",
  npi: "",
};

Prescriber.validationSchema = Yup.object().shape({
  prescriber: Yup.string().required("Prescriber is required"),
  lastName: Yup.string().required("Last Name is required"),
  firstName: Yup.string().required("First Name is required"),
  npi: Yup.string()
    .min(10, "NPI Number must be 10 digits")
    .max(10, "NPI Number must be 10 digits")
    .required("NPI Number is required"),
});

export default Prescriber;
