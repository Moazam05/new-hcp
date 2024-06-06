import { Box } from "@mui/material";
import * as Yup from "yup";
import PrimaryInput from "../../../../../components/PrimaryInput";
import { SubHeading } from "../../../../../components/Heading";
import Paragraph from "../../../../../components/Paragraph";
import SelectInput from "../../../../../components/SelectInput";
import DatePicker from "../../../../../components/DatePicker";

interface TreatmentInformationProps {
  formik: any;
}

const productNameData = [
  {
    value: "1",
    label: "Product 1",
  },
  {
    value: "2",
    label: "Product 2",
  },
  {
    value: "3",
    label: "Product 3",
  },
];

const TreatmentInformation = ({ formik }: TreatmentInformationProps) => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    formik;

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
            <SelectInput
              name="productName"
              styles={{ width: "100%" }}
              value={values.productName}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={productNameData}
              onBlur={handleBlur}
              error={errors.productName && touched.productName ? true : false}
              label="Product Name"
              options={productNameData?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.productName && errors.productName && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.productName}</p>
                </Box>
              )}
            </SelectInput>
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
            <SubHeading>Anticipated Start Date*</SubHeading>
            <DatePicker
              value={values.anticipatedStartDate}
              onChange={(date) => setFieldValue("anticipatedStartDate", date)}
              name="anticipatedStartDate"
              formik={formik}
              errorMessage={
                values?.anticipatedStartDate === null
                  ? "Date is required"
                  : "Invalid Date Format (MM/DD/YYYY)"
              }
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
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Secondary ICD-10</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="secondaryICD10"
              placeholder="secondaryICD10 ICD-10"
              value={values.secondaryICD10}
              helperText={
                errors.secondaryICD10 && touched.secondaryICD10
                  ? errors.secondaryICD10
                  : ""
              }
              error={
                errors.secondaryICD10 && touched.secondaryICD10 ? true : false
              }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

TreatmentInformation.label = "Treatment Information";
TreatmentInformation.initialValues = {
  productName: "",
  anticipatedStartDate: null,
  primaryICD10: "",
  secondaryICD10: "",
};

TreatmentInformation.validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  anticipatedStartDate: Yup.date().required("Date is required"),
  primaryICD10: Yup.string().required("Primary ICD10 is required"),
  secondaryICD10: Yup.string(),
});

export default TreatmentInformation;
