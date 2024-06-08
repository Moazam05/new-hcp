import { Box } from "@mui/material";
import { SubHeading } from "../../../../components/Heading";
import PrimaryInput from "../../../../components/PrimaryInput";
import * as Yup from "yup";
import InputMask from "react-input-mask";

interface PharmacyInsuranceProps {
  formik: any;
}

const PharmacyInsurance = ({ formik }: PharmacyInsuranceProps) => {
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
        <h1>Pharmacy Insurance</h1>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            marginTop: "40px",
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
              width: "52%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Pharmacy Benefit Manager (PBM) Name</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="beneficiaryName"
              placeholder="Pharmacy Benefit Manager (PBM) Name"
              value={values.beneficiaryName}
              helperText={
                errors.beneficiaryName && touched.beneficiaryName
                  ? errors.beneficiaryName
                  : ""
              }
              error={
                errors.beneficiaryName && touched.beneficiaryName ? true : false
              }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
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
            <SubHeading>Pharmacy Insurance Phone Number </SubHeading>
            <InputMask
              mask="(999) 999-9999"
              value={values.pharmacyInsuranceNumber}
              disabled={false}
              maskChar="_"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <PrimaryInput
                type="text"
                label=""
                name="pharmacyInsuranceNumber"
                placeholder="(123) 456-7890"
                value={values.pharmacyInsuranceNumber}
                helperText={
                  errors.pharmacyInsuranceNumber &&
                  touched.pharmacyInsuranceNumber
                    ? errors.pharmacyInsuranceNumber
                    : ""
                }
                error={
                  errors.pharmacyInsuranceNumber &&
                  touched.pharmacyInsuranceNumber
                    ? true
                    : false
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputMask>
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
            <SubHeading>Rx Member ID</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="pharmacyMemberId"
              placeholder="Rx Member ID"
              value={values.pharmacyMemberId}
              helperText={
                errors.pharmacyMemberId && touched.pharmacyMemberId
                  ? errors.pharmacyMemberId
                  : ""
              }
              error={
                errors.pharmacyMemberId && touched.pharmacyMemberId
                  ? true
                  : false
              }
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
            <SubHeading>Rx Group Number</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="pharmacyGroupNumber"
              placeholder="Rx Group Number"
              value={values.pharmacyGroupNumber}
              helperText={
                errors.pharmacyGroupNumber && touched.pharmacyGroupNumber
                  ? errors.pharmacyGroupNumber
                  : ""
              }
              error={
                errors.pharmacyGroupNumber && touched.pharmacyGroupNumber
                  ? true
                  : false
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
            <SubHeading>Rx Bin Number</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="pharmacyBinNumber"
              placeholder="Rx Bin Number"
              value={values.pharmacyBinNumber}
              helperText={
                errors.pharmacyBinNumber && touched.pharmacyBinNumber
                  ? errors.pharmacyBinNumber
                  : ""
              }
              error={
                errors.pharmacyBinNumber && touched.pharmacyBinNumber
                  ? true
                  : false
              }
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
            <SubHeading>Rx PCN Number</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="pharmacyPcnNumber"
              placeholder="Rx PCN Number"
              value={values.pharmacyPcnNumber}
              helperText={
                errors.pharmacyPcnNumber && touched.pharmacyPcnNumber
                  ? errors.pharmacyPcnNumber
                  : ""
              }
              error={
                errors.pharmacyPcnNumber && touched.pharmacyPcnNumber
                  ? true
                  : false
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
                display: "none",
              },
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

PharmacyInsurance.label = "Pharmacy Insurance";
PharmacyInsurance.initialValues = {
  beneficiaryName: "",
  pharmacyInsuranceNumber: "",
  pharmacyMemberId: "",
  pharmacyGroupNumber: "",
  pharmacyBinNumber: "",
  pharmacyPcnNumber: "",
};

PharmacyInsurance.validationSchema = Yup.object().shape({
  beneficiaryName: Yup.string(),
  pharmacyInsuranceNumber: Yup.string(),
  pharmacyMemberId: Yup.string(),
  pharmacyGroupNumber: Yup.string(),
  pharmacyBinNumber: Yup.string(),
  pharmacyPcnNumber: Yup.string(),
});

export default PharmacyInsurance;
