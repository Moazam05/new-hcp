import { Box, Checkbox } from "@mui/material";
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
              height: "fit-content",
              width: "170px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              // gap: "10px",
              marginRight: "30px",
              "@media (max-width: 576px)": {
                fontSize: "18px",
                width: "100%",
                justifyContent: "start",
              },
            }}
          >
            <Box
              sx={{
                height: "fit-content",
              }}
            >
              <Checkbox
                checked={values.primaryCheckBox}
                onChange={(e) =>
                  setFieldValue("primaryCheckBox", e.target.checked)
                }
                onBlur={handleBlur}
                name="primaryCheckBox"
                color="primary"
                sx={{
                  padding: 0,
                  pointerEvents: "none",
                  "& .MuiButtonBase-root": {
                    padding: 0,
                  },
                }}
              />
            </Box>{" "}
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
        {/* SECONDARY FIELDS */}

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            margin: "40px 20px 0 0",
            justifyContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              margin: "20px 0px",
              "@media (max-width: 576px)": {
                margin: "20px 0 0",
              },
            }}
          >
            <Box
              sx={{
                height: "fit-content",
              }}
            >
              <Checkbox
                checked={values.commercialCheckBox}
                onChange={(e) =>
                  setFieldValue("commercialCheckBox", e.target.checked)
                }
                onBlur={handleBlur}
                name="commercialCheckBox"
                color="primary"
                sx={{
                  padding: 0,
                  "& .MuiButtonBase-root": {
                    padding: 0,
                  },
                }}
              />
            </Box>
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
              Secondary Insurance*
            </SubHeading>
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
            <SubHeading>Payer Type*</SubHeading>
            <SelectInput
              name="secondaryPrayerType"
              styles={{ width: "100%" }}
              value={values.secondaryPrayerType}
              disabled={!values.commercialCheckBox}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={payerTypeData}
              onBlur={handleBlur}
              error={
                errors.secondaryPrayerType && touched.secondaryPrayerType
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
              {touched.secondaryPrayerType && errors.secondaryPrayerType && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.secondaryPrayerType}</p>
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
              name="secondaryInsuranceCompany"
              placeholder="Insurance Company"
              value={values.secondaryInsuranceCompany}
              disabled={!values.commercialCheckBox}
              helperText={
                errors.secondaryInsuranceCompany &&
                touched.secondaryInsuranceCompany
                  ? errors.secondaryInsuranceCompany
                  : ""
              }
              error={
                errors.secondaryInsuranceCompany &&
                touched.secondaryInsuranceCompany
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
              name="secondaryPolicyID"
              placeholder="Policy ID#"
              value={values.secondaryPolicyID}
              disabled={!values.commercialCheckBox}
              helperText={
                errors.secondaryPolicyID && touched.secondaryPolicyID
                  ? errors.secondaryPolicyID
                  : ""
              }
              error={
                errors.secondaryPolicyID && touched.secondaryPolicyID
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
            <SubHeading>Payer Phone Number</SubHeading>
            <InputMask
              mask="(999) 999-9999"
              value={values.secondaryPhoneNumber}
              // disabled={false}
              disabled={!values.commercialCheckBox}
              maskChar="_"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <PrimaryInput
                type="text"
                label=""
                name="secondaryPhoneNumber"
                placeholder="(123) 456-7890"
                value={values.secondaryPhoneNumber}
                helperText={
                  errors.secondaryPhoneNumber && touched.secondaryPhoneNumber
                    ? errors.secondaryPhoneNumber
                    : ""
                }
                error={
                  errors.secondaryPhoneNumber && touched.secondaryPhoneNumber
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
              name="secondaryPolicyHolderLastName"
              placeholder="Policy Holder First Name*"
              value={values.secondaryPolicyHolderLastName}
              disabled={!values.commercialCheckBox}
              helperText={
                errors.secondaryPolicyHolderLastName &&
                touched.secondaryPolicyHolderLastName
                  ? errors.secondaryPolicyHolderLastName
                  : ""
              }
              error={
                errors.secondaryPolicyHolderLastName &&
                touched.secondaryPolicyHolderLastName
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
              name="secondaryPolicyHolderFirstName"
              placeholder="Policy Holder Last Name"
              value={values.secondaryPolicyHolderFirstName}
              disabled={!values.commercialCheckBox}
              helperText={
                errors.secondaryPolicyHolderFirstName &&
                touched.secondaryPolicyHolderFirstName
                  ? errors.secondaryPolicyHolderFirstName
                  : ""
              }
              error={
                errors.secondaryPolicyHolderFirstName &&
                touched.secondaryPolicyHolderFirstName
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
              name="secondaryRelationshipToPatient"
              styles={{ width: "100%" }}
              value={values.secondaryRelationshipToPatient}
              disabled={!values.commercialCheckBox}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={patientRelationshipData}
              onBlur={handleBlur}
              error={
                errors.secondaryRelationshipToPatient &&
                touched.secondaryRelationshipToPatient
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
              {touched.secondaryRelationshipToPatient &&
                errors.secondaryRelationshipToPatient && (
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: "#FF0000",
                      fontWeight: 400,
                      lineHeight: "17px",
                    }}
                  >
                    <p>{errors.secondaryRelationshipToPatient}</p>
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
              name="secondaryGroupNumber"
              placeholder="Group Number"
              value={values.secondaryGroupNumber}
              disabled={!values.commercialCheckBox}
              helperText={
                errors.secondaryGroupNumber && touched.secondaryGroupNumber
                  ? errors.secondaryGroupNumber
                  : ""
              }
              error={
                errors.secondaryGroupNumber && touched.secondaryGroupNumber
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
  primaryCheckBox: true,
  primaryPrayerType: "",
  primaryInsuranceCompany: "",
  primaryPolicyID: "",
  primaryPhoneNumber: "",
  primaryPolicyHolderFirstName: "",
  primaryPolicyHolderLastName: "",
  primaryRelationshipToPatient: "",
  primaryGroupNumber: "",
  // for secondary
  commercialCheckBox: false,
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
  primaryCheckBox: Yup.boolean(),
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
  commercialCheckBox: Yup.boolean(),
  secondaryPrayerType: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.required("You must provide a secondaryPrayerType"),
    otherwise: (schema) => schema.nullable(),
  }),
  secondaryInsuranceCompany: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.required("Insurance Company is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  secondaryPolicyID: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.required("Policy ID is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  secondaryPhoneNumber: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.nullable(),
    otherwise: (schema) => schema.nullable(),
  }),
  secondaryPolicyHolderFirstName: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.required("First Name is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  secondaryPolicyHolderLastName: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.required("Last Name is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  secondaryRelationshipToPatient: Yup.string().when("commercialCheckBox", {
    is: true,
    then: (schema) => schema.required("Relationship is required"),
    otherwise: (schema) => schema.nullable(),
  }),

  secondaryGroupNumber: Yup.string(),
});

export default InsuranceDetails;
