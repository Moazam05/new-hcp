import { Box } from "@mui/material";
import { SubHeading } from "../../../../components/Heading";
import PrimaryInput from "../../../../components/PrimaryInput";
import InputMask from "react-input-mask";
import SelectInput from "../../../../components/SelectInput";
import * as Yup from "yup";
import {
  insurancePlanTypes,
  patientsRelationshiptoInsuranceSubscriberTypes,
} from "../../../../constants/enrollmentDataTypes";

interface MedicalInsuranceProps {
  formik: any;
}

const MedicalInsurance = ({ formik }: MedicalInsuranceProps) => {
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
        <h1>Medicare Insurance Information</h1>

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
              height: "fit-content",
              width: "170px",
              display: "flex",
              justifyContent: "end",
              marginRight: "30px",
              "@media (max-width: 576px)": {
                fontSize: "18px",
                width: "100%",
                justifyContent: "start",
              },
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
              name="medicalPrayerType"
              styles={{ width: "100%" }}
              value={values.medicalPrayerType}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={insurancePlanTypes}
              onBlur={handleBlur}
              error={
                errors.medicalPrayerType && touched.medicalPrayerType
                  ? true
                  : false
              }
              label="Payer Type"
              options={insurancePlanTypes?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.medicalPrayerType && errors.medicalPrayerType && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.medicalPrayerType}</p>
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
              name="medicalPrimaryInsuranceCompany"
              placeholder="Insurance Company"
              value={values.medicalPrimaryInsuranceCompany}
              helperText={
                errors.medicalPrimaryInsuranceCompany &&
                touched.medicalPrimaryInsuranceCompany
                  ? errors.medicalPrimaryInsuranceCompany
                  : ""
              }
              error={
                errors.medicalPrimaryInsuranceCompany &&
                touched.medicalPrimaryInsuranceCompany
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
            <SubHeading>Medicare Beneficiary ID#:</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="medicalBeneficiaryID"
              placeholder="Medicare Beneficiary ID"
              value={values.medicalBeneficiaryID}
              helperText={
                errors.medicalBeneficiaryID && touched.medicalBeneficiaryID
                  ? errors.medicalBeneficiaryID
                  : ""
              }
              error={
                errors.medicalBeneficiaryID && touched.medicalBeneficiaryID
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
            <SubHeading>Policy ID#*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="medicalPrimaryPolicyID"
              placeholder="Policy ID#"
              value={values.medicalPrimaryPolicyID}
              helperText={
                errors.medicalPrimaryPolicyID && touched.medicalPrimaryPolicyID
                  ? errors.medicalPrimaryPolicyID
                  : ""
              }
              error={
                errors.medicalPrimaryPolicyID && touched.medicalPrimaryPolicyID
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
            <SubHeading>Policy Holder First Name*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="medicalPrimaryPolicyHolderFirstName"
              placeholder="Policy Holder First Name*"
              value={values.medicalPrimaryPolicyHolderFirstName}
              helperText={
                errors.medicalPrimaryPolicyHolderFirstName &&
                touched.medicalPrimaryPolicyHolderFirstName
                  ? errors.medicalPrimaryPolicyHolderFirstName
                  : ""
              }
              error={
                errors.medicalPrimaryPolicyHolderFirstName &&
                touched.medicalPrimaryPolicyHolderFirstName
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
              name="medicalPrimaryPolicyHolderLastName"
              placeholder="Policy Holder Last Name"
              value={values.medicalPrimaryPolicyHolderLastName}
              helperText={
                errors.medicalPrimaryPolicyHolderLastName &&
                touched.medicalPrimaryPolicyHolderLastName
                  ? errors.medicalPrimaryPolicyHolderLastName
                  : ""
              }
              error={
                errors.medicalPrimaryPolicyHolderLastName &&
                touched.medicalPrimaryPolicyHolderLastName
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
              name="medicalPrimaryRelationshipToPatient"
              styles={{ width: "100%" }}
              value={values.medicalPrimaryRelationshipToPatient}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={patientsRelationshiptoInsuranceSubscriberTypes}
              onBlur={handleBlur}
              error={
                errors.medicalPrimaryRelationshipToPatient &&
                touched.medicalPrimaryRelationshipToPatient
                  ? true
                  : false
              }
              label="Relationship to Patient"
              options={patientsRelationshiptoInsuranceSubscriberTypes?.map(
                (project: any) => {
                  return {
                    ...project,
                    id: project.value,
                    value: project.value,
                    label: project.label,
                  };
                }
              )}
            >
              {touched.medicalPrimaryRelationshipToPatient &&
                errors.medicalPrimaryRelationshipToPatient && (
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: "#FF0000",
                      fontWeight: 400,
                      lineHeight: "17px",
                    }}
                  >
                    <p>{errors.medicalPrimaryRelationshipToPatient}</p>
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
            <SubHeading>Payer Phone Number</SubHeading>
            <InputMask
              mask="(999) 999-9999"
              value={values.medicalPrimaryPhoneNumber}
              disabled={false}
              maskChar="_"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <PrimaryInput
                type="text"
                label=""
                name="medicalPrimaryPhoneNumber"
                placeholder="(123) 456-7890"
                value={values.medicalPrimaryPhoneNumber}
                helperText={
                  errors.medicalPrimaryPhoneNumber &&
                  touched.medicalPrimaryPhoneNumber
                    ? errors.medicalPrimaryPhoneNumber
                    : ""
                }
                error={
                  errors.medicalPrimaryPhoneNumber &&
                  touched.medicalPrimaryPhoneNumber
                    ? true
                    : false
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputMask>
          </Box>
        </Box>
      </Box>
    </>
  );
};

MedicalInsurance.label = "Medical Insurance";
MedicalInsurance.initialValues = {
  medicalPrayerType: "",
  medicalPrimaryInsuranceCompany: "",
  medicalBeneficiaryID: "",
  medicalPrimaryPolicyID: "",
  medicalPrimaryPolicyHolderFirstName: "",
  medicalPrimaryPolicyHolderLastName: "",
  medicalPrimaryRelationshipToPatient: "",
  medicalPrimaryPhoneNumber: "",
};

MedicalInsurance.validationSchema = Yup.object().shape({
  medicalPrayerType: Yup.string().required("Payer Type is required"),
  medicalPrimaryInsuranceCompany: Yup.string().required(
    "Insurance Company is required"
  ),
  medicalBeneficiaryID: Yup.string().required("Beneficiary ID is required"),
  medicalPrimaryPolicyID: Yup.string().required("Policy ID is required"),
  medicalPrimaryPolicyHolderFirstName: Yup.string().required(
    "First Name is required"
  ),
  medicalPrimaryPolicyHolderLastName: Yup.string().required(
    "Last Name is required"
  ),
  medicalPrimaryRelationshipToPatient: Yup.string().required(
    "Relationship is required"
  ),
  medicalPrimaryPhoneNumber: Yup.string(),
});

export default MedicalInsurance;
