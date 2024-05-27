import { Box } from "@mui/material";
import * as Yup from "yup";
import { SubHeading } from "../../../../components/Heading";
import PrimaryInput from "../../../../components/PrimaryInput";
import SelectInput from "../../../../components/SelectInput";
import InputMask from "react-input-mask";

interface InsuranceDetailsProps {
  formik: any;
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

const patientRelationshipData = [
  {
    label: "Self",
    value: "self",
  },
  {
    label: "Spouse",
    value: "spouse",
  },
  {
    label: "Child",
    value: "child",
  },
];

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
            margin: "40px 0 0 0",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <SubHeading
            sx={{
              marginRight: "60px",
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
            <SelectInput
              name="primaryPrayerType"
              styles={{ width: "100%" }}
              value={values.primaryPrayerType}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={payerTypeData}
              onBlur={handleBlur}
              error={
                errors.primaryPrayerType && touched.primaryPrayerType
                  ? true
                  : false
              }
              label="Payer Type"
              options={payerTypeData?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.primaryPrayerType && errors.primaryPrayerType && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.primaryPrayerType}</p>
                </Box>
              )}
            </SelectInput>
          </Box>
          <Box
            sx={{
              height: "86px",
              width: "25%",
              marginRight: "220px",
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
            <SubHeading>Policy ID#*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryPolicyID"
              placeholder="Policy ID#"
              value={values.primaryPolicyID}
              helperText={
                errors.primaryPolicyID && touched.primaryPolicyID
                  ? errors.primaryPolicyID
                  : ""
              }
              error={
                errors.primaryPolicyID && touched.primaryPolicyID ? true : false
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
            <SubHeading>Payer Phone Number</SubHeading>
            <InputMask
              mask="(999) 999-9999"
              value={values.primaryPhoneNumber}
              disabled={false}
              maskChar="_"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <PrimaryInput
                type="text"
                label=""
                name="primaryPhoneNumber"
                placeholder="(123) 456-7890"
                value={values.primaryPhoneNumber}
                helperText={
                  errors.primaryPhoneNumber && touched.primaryPhoneNumber
                    ? errors.primaryPhoneNumber
                    : ""
                }
                error={
                  errors.primaryPhoneNumber && touched.primaryPhoneNumber
                    ? true
                    : false
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputMask>
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
            <SubHeading>Policy Holder First Name*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryPolicyHolderFirstName"
              placeholder="Policy Holder First Name*"
              value={values.primaryPolicyHolderFirstName}
              helperText={
                errors.primaryPolicyHolderFirstName &&
                touched.primaryPolicyHolderFirstName
                  ? errors.primaryPolicyHolderFirstName
                  : ""
              }
              error={
                errors.primaryPolicyHolderFirstName &&
                touched.primaryPolicyHolderFirstName
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
            <SubHeading>Policy Holder Last Name*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryPolicyHolderLastName"
              placeholder="Policy Holder Last Name"
              value={values.primaryPolicyHolderLastName}
              helperText={
                errors.primaryPolicyHolderLastName &&
                touched.primaryPolicyHolderLastName
                  ? errors.primaryPolicyHolderLastName
                  : ""
              }
              error={
                errors.primaryPolicyHolderLastName &&
                touched.primaryPolicyHolderLastName
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
            <SubHeading>Relationship to Patient*</SubHeading>
            <SelectInput
              name="primaryRelationshipToPatient"
              styles={{ width: "100%" }}
              value={values.primaryRelationshipToPatient}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={patientRelationshipData}
              onBlur={handleBlur}
              error={
                errors.primaryRelationshipToPatient &&
                touched.primaryRelationshipToPatient
                  ? true
                  : false
              }
              label="Relationship to Patient"
              options={patientRelationshipData?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.primaryRelationshipToPatient &&
                errors.primaryRelationshipToPatient && (
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: "#FF0000",
                      fontWeight: 400,
                      lineHeight: "17px",
                    }}
                  >
                    <p>{errors.primaryRelationshipToPatient}</p>
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
            <SubHeading>Group Number</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="primaryGroupNumber"
              placeholder="Group Number"
              value={values.primaryGroupNumber}
              helperText={
                errors.primaryGroupNumber && touched.primaryGroupNumber
                  ? errors.primaryGroupNumber
                  : ""
              }
              error={
                errors.primaryGroupNumber && touched.primaryGroupNumber
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
  primaryPrayerType: Yup.string().required("Payer Type is required"),
  primaryInsuranceCompany: Yup.string().required(
    "Insurance Company is required"
  ),
  primaryPolicyID: Yup.string().required("Policy ID is required"),
  primaryPhoneNumber: Yup.string(),
  primaryPolicyHolderFirstName: Yup.string().required("First Name is required"),
  primaryPolicyHolderLastName: Yup.string().required("Last Name is required"),
  primaryRelationshipToPatient: Yup.string().required(
    "Relationship is required"
  ),
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
