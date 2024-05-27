import { Box } from "@mui/material";
import * as Yup from "yup";
import PrimaryInput from "../../../../components/PrimaryInput";
import { SubHeading } from "../../../../components/Heading";
import Paragraph from "../../../../components/Paragraph";

interface TreatmentInformationProps {
  formik: any;
}

const TreatmentInformation = ({ formik }: TreatmentInformationProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          "@media (max-width: 576px)": {
            padding: "0",
            gap: "0px",
          },
        }}
      >
        <h1>Treatment Information</h1>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Paragraph
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#414042",
              marginLeft: "220px",
              "@media (max-width: 576px)": {
                fontSize: "18px",
                marginLeft: "0",
              },
            }}
          >
            Product Information
          </Paragraph>
        </Box>
        {/* 2nd */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Product Name*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="productName"
              placeholder="Product Name"
              value={values.productName}
              helperText={
                errors.productName && touched.productName
                  ? errors.productName
                  : ""
              }
              error={errors.productName && touched.productName ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>NDC*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="ndc"
              placeholder="NDC"
              value={values.ndc}
              helperText={errors.ndc && touched.ndc ? errors.ndc : ""}
              error={errors.ndc && touched.ndc ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
        {/* 3rd */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Quantity*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="quantity"
              placeholder="Quantity"
              value={values.quantity}
              helperText={
                errors.quantity && touched.quantity ? errors.quantity : ""
              }
              error={errors.quantity && touched.quantity ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>J Code or Q Code</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="qCode"
              placeholder="J Code or Q Code"
              value={values.qCode}
              helperText={errors.qCode && touched.qCode ? errors.qCode : ""}
              error={errors.qCode && touched.qCode ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
        {/* 4th */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Primary ICD-10*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="dateOfRxWritten"
              placeholder="Date of Rx Written"
              value={values.dateOfRxWritten}
              helperText={
                errors.dateOfRxWritten && touched.dateOfRxWritten
                  ? errors.dateOfRxWritten
                  : ""
              }
              error={
                errors.dateOfRxWritten && touched.dateOfRxWritten ? true : false
              }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Dispense Type*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="dispenseType"
              placeholder="Dispense Type"
              value={values.dispenseType}
              helperText={
                errors.dispenseType && touched.dispenseType
                  ? errors.dispenseType
                  : ""
              }
              error={errors.dispenseType && touched.dispenseType ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
        {/* SECONDARY */}

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            marginTop: "20px",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Paragraph
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#414042",
              marginLeft: "220px",
              "@media (max-width: 576px)": {
                fontSize: "18px",
                margin: "20px 0 0",
              },
            }}
          >
            Diagnosis Code
          </Paragraph>
        </Box>
        {/* 1st */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Primary ICD-10*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryICD10"
              placeholder="Primary ICD-10*"
              value={values.primaryICD10}
              helperText={
                errors.primaryICD10 && touched.primaryICD10
                  ? errors.primaryICD10
                  : ""
              }
              error={errors.primaryICD10 && touched.primaryICD10 ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box
            sx={{
              height: "86px",
              width: "25%",
              "@media (max-width: 576px)": {
                display: "none",
              },
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

TreatmentInformation.label = "Treatment Information";
TreatmentInformation.initialValues = {
  productName: "",
  ndc: "",
  quantity: "",
  qCode: "",
  dateOfRxWritten: "",
  dispenseType: "",
  primaryICD10: "",
};

TreatmentInformation.validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  ndc: Yup.string().required("NDC is required"),
  quantity: Yup.string().required("Quantity is required"),
  qCode: Yup.string(),
  dateOfRxWritten: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      "Invalid Date Format (01/01/2021)"
    )
    .required("Date of Birth is required"),
  dispenseType: Yup.string().required("Dispense Type is required"),
  primaryICD10: Yup.string().required("Primary ICD10 is required"),
});

export default TreatmentInformation;
