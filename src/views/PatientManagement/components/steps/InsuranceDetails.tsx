import { Box } from "@mui/material";
import * as Yup from "yup";
import { SubHeading } from "../../../../components/Heading";
import PrimaryInput from "../../../../components/PrimaryInput";

interface InsuranceDetailsProps {
  formik: any;
}

const InsuranceDetails = ({ formik }: InsuranceDetailsProps) => {
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
        <h1>Insurance Information</h1>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            margin: "40px 0px 40px 0",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <SubHeading
            sx={{
              marginRight: "140px",
            }}
          >
            Primary Insurance*
          </SubHeading>

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
            <SubHeading>Payer Type*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryPrayerType"
              placeholder="Payer Type"
              value={values.primaryPrayerType}
              helperText={
                errors.primaryPrayerType && touched.primaryPrayerType
                  ? errors.primaryPrayerType
                  : ""
              }
              error={
                errors.primaryPrayerType && touched.primaryPrayerType
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
              marginRight: "250px",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Insurance Company*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryInsuranceCompany"
              placeholder="Insurance Company"
              value={values.primaryInsuranceCompany}
              helperText={
                errors.primaryInsuranceCompany &&
                touched.primaryInsuranceCompany
                  ? errors.primaryInsuranceCompany
                  : ""
              }
              error={
                errors.primaryInsuranceCompany &&
                touched.primaryInsuranceCompany
                  ? true
                  : false
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

InsuranceDetails.label = "InsuranceDetails";
InsuranceDetails.initialValues = {
  primaryPrayerType: "",
  primaryInsuranceCompany: "",
  primaryPolicyID: "",
  primaryPhoneNumber: "",
  primaryPolicyHolderFirstName: "",
  primaryPolicyHolderLastName: "",
  primaryRelationshipToPatient: "",
  primaryGroupNumber: "",
  // for secondary
  secondaryPrayerType: "",
  secondaryInsuranceCompany: "",
  secondaryPolicyID: "",
  secondaryPhoneNumber: "",
  secondaryPolicyHolderFirstName: "",
  secondaryPolicyHolderLastName: "",
  secondaryRelationshipToPatient: "",
  secondaryGroupNumber: "",
};

InsuranceDetails.validationSchema = Yup.object().shape({
  primaryPrayerType: Yup.string().required("Required"),
  primaryInsuranceCompany: Yup.string().required("Required"),
  primaryPolicyID: Yup.string().required("Required"),
  primaryPhoneNumber: Yup.string(),
  primaryPolicyHolderFirstName: Yup.string().required("Required"),
  primaryPolicyHolderLastName: Yup.string().required("Required"),
  primaryRelationshipToPatient: Yup.string().required("Required"),
  primaryGroupNumber: Yup.string(),
  // secondary
  secondaryPrayerType: Yup.string().required("Required"),
  secondaryInsuranceCompany: Yup.string().required("Required"),
  secondaryPolicyID: Yup.string().required("Required"),
  secondaryPhoneNumber: Yup.string(),
  secondaryPolicyHolderFirstName: Yup.string().required("Required"),
  secondaryPolicyHolderLastName: Yup.string().required("Required"),
  secondaryRelationshipToPatient: Yup.string().required("Required"),
  secondaryGroupNumber: Yup.string(),
});

export default InsuranceDetails;
