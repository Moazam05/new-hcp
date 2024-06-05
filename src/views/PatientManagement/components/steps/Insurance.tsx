import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { SubHeading } from "../../../../components/Heading";
import * as Yup from "yup";
import SelectInput from "../../../../components/SelectInput";
import Paragraph from "../../../../components/Paragraph";
import { useEffect } from "react";

interface InsuranceProps {
  formik: any;
  setMediCareValue: any;
}

const payerTypeData = [
  {
    label: "Commercial",
    value: "commercial",
  },
  {
    label: "Medicare",
    value: "medicare",
  },
  {
    label: "Self Pay",
    value: "selfPay",
  },
];

const Insurance = ({ formik, setMediCareValue }: InsuranceProps) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    setTouched,
  } = formik;

  useEffect(() => {
    if (values.payerType === "commercial") {
      setFieldValue("medicareYes", null);
      setFieldValue("medicareNo", null);
    }

    if (values.payerType === "medicare") {
      setFieldValue("copayYes", null);
      setFieldValue("copayNo", null);
    }
  }, [values.payerType]);

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
        <h1>What type of insurance does the patient have?</h1>

        <Box
          sx={{
            height: "86px",
            width: "30%",
            margin: "40px 0",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
              margin: "20px 0",
            },
          }}
        >
          <SubHeading>Payer Type*</SubHeading>
          <SelectInput
            name="payerType"
            styles={{ width: "100%" }}
            value={values.payerType}
            onChange={(e: any) => {
              handleChange(e);
              setMediCareValue(e.target.value);
            }}
            data={payerTypeData}
            onBlur={handleBlur}
            error={errors.payerType && touched.payerType ? true : false}
            label="Select Payer Type"
            options={payerTypeData?.map((project: any) => {
              return {
                ...project,
                id: project.value,
                value: project.value,
                label: project.label,
              };
            })}
          >
            {touched.payerType && errors.payerType && (
              <Box
                sx={{
                  fontSize: "12px",
                  color: "#FF0000",
                  fontWeight: 400,
                  lineHeight: "17px",
                }}
              >
                <p>{errors.payerType}</p>
              </Box>
            )}
          </SelectInput>
        </Box>

        {values.payerType === "commercial" && (
          <Box>
            <Paragraph
              sx={{
                fontSize: "48px",
                color: "#00739A",
                "@media (max-width: 576px)": {
                  fontSize: "23px",
                },
              }}
            >
              Does the patient seek to enroll in the Co-Pay Program?
            </Paragraph>
            <Box
              sx={{
                margin: "50px 0",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "50px",
                "@media (max-width: 576px)": {
                  gap: "30px",
                  margin: "30px 0",
                },
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.copayYes}
                    onChange={() => {
                      setFieldValue("copayYes", true);
                      setFieldValue("copayNo", false);
                      setTouched({ ...touched, copayYes: false });
                    }}
                    onBlur={handleBlur}
                  />
                }
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "35px",
                  },
                }}
                componentsProps={{
                  typography: {
                    sx: {
                      fontSize: "40px",
                      color: "#00739A",
                      "@media (max-width: 576px)": {
                        fontSize: "30px",
                      },
                    },
                  },
                }}
                label="Yes"
                name="copayYes"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.copayNo}
                    onChange={() => {
                      setFieldValue("copayNo", true);
                      setFieldValue("copayYes", false);
                      setTouched({ ...touched, copayNo: false });
                    }}
                    onBlur={handleBlur}
                  />
                }
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "35px",
                  },
                }}
                componentsProps={{
                  typography: {
                    sx: {
                      fontSize: "40px",
                      color: "#00739A",
                      "@media (max-width: 576px)": {
                        fontSize: "30px",
                      },
                    },
                  },
                }}
                label="No"
                name="copayNo"
              />
            </Box>

            {(errors.copayYes || errors.copayNo) &&
              touched.copayYes &&
              touched.copayNo && (
                <Box
                  sx={{
                    color: "#FF0000",
                    fontSize: "14px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  You must select either 'Yes' or 'No'
                </Box>
              )}
          </Box>
        )}

        {values.payerType === "medicare" && (
          <Box>
            <Paragraph
              sx={{
                fontSize: "48px",
                color: "#00739A",
                "@media (max-width: 576px)": {
                  fontSize: "23px",
                },
              }}
            >
              Does the patient seek Financial Assistance?
            </Paragraph>

            <Box
              sx={{
                margin: "50px 0",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "50px",
                "@media (max-width: 576px)": {
                  gap: "30px",
                  margin: "30px 0",
                },
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.medicareYes}
                    onChange={() => {
                      setFieldValue("medicareYes", true);
                      setFieldValue("medicareNo", false);
                      setTouched({ ...touched, medicareYes: false });
                    }}
                    onBlur={handleBlur}
                  />
                }
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "35px",
                  },
                }}
                componentsProps={{
                  typography: {
                    sx: {
                      fontSize: "40px",
                      color: "#00739A",
                      "@media (max-width: 576px)": {
                        fontSize: "30px",
                      },
                    },
                  },
                }}
                label="Yes"
                name="medicareYes"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.medicareNo}
                    onChange={() => {
                      setFieldValue("medicareNo", true);
                      setFieldValue("medicareYes", false);
                      setTouched({ ...touched, medicareNo: false });
                    }}
                    onBlur={handleBlur}
                  />
                }
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "35px",
                  },
                }}
                componentsProps={{
                  typography: {
                    sx: {
                      fontSize: "40px",
                      color: "#00739A",
                      "@media (max-width: 576px)": {
                        fontSize: "30px",
                      },
                    },
                  },
                }}
                label="No"
                name="medicareNo"
              />
            </Box>

            {(errors.medicareYes || errors.medicareNo) &&
              touched.medicareYes &&
              touched.medicareNo && (
                <Box
                  sx={{
                    color: "#FF0000",
                    fontSize: "14px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  You must select either 'Yes' or 'No'
                </Box>
              )}
          </Box>
        )}
      </Box>
    </>
  );
};

Insurance.label = "Insurance";
Insurance.initialValues = {
  payerType: "",
  copayYes: null,
  copayNo: null,
  medicareYes: null,
  medicareNo: null,
};

Insurance.validationSchema = Yup.object().shape({
  payerType: Yup.string().required("Payer Type is required"),
  copayYes: Yup.boolean().oneOf([true, false], "Required").required("Required"),
  copayNo: Yup.boolean().oneOf([true, false], "Required").required("Required"),
  medicareYes: Yup.boolean()
    .oneOf([true, false], "Required")
    .required("Required"),
  medicareNo: Yup.boolean()
    .oneOf([true, false], "Required")
    .required("Required"),
});

export default Insurance;
