// Yup
import * as Yup from "yup";
import PrimaryInput from "../../../../components/PrimaryInput";
import { SubHeading } from "../../../../components/Heading";
import { Box } from "@mui/material";
import SelectInput from "../../../../components/SelectInput";
import Paragraph from "../../../../components/Paragraph";
// React Input Mask
import InputMask from "react-input-mask";
import {
  phoneNumberTypes,
  preferredContactTypes,
} from "../../../../constants/enrollmentDataTypes";

interface ContactInformationProps {
  formik: any;
}

const ContactInformation = ({ formik }: ContactInformationProps) => {
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
        <h2 className="registration-title">Patient Details</h2>

        <Box
          sx={{
            margin: "5px 0 30px",
            "@media (max-width: 576px)": {
              margin: "8px 0",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "470px",
            }}
          >
            <Paragraph
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#414042",
                "@media (max-width: 576px)": {
                  fontSize: "14px",
                },
              }}
            >
              Contact Information
            </Paragraph>
          </Box>
        </Box>
        {/* 1st */}
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
            <SubHeading>Preferred Phone Number*</SubHeading>
            <InputMask
              mask="(999) 999-9999"
              value={values.phoneNumber}
              disabled={false}
              maskChar="_"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <PrimaryInput
                type="text"
                label=""
                name="phoneNumber"
                placeholder="(123) 456-7890"
                value={values.phoneNumber}
                helperText={
                  errors.phoneNumber && touched.phoneNumber
                    ? errors.phoneNumber
                    : ""
                }
                error={errors.phoneNumber && touched.phoneNumber ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputMask>
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
            <SubHeading>Preferred Phone Type*</SubHeading>
            <SelectInput
              name="preferredPhoneNumber"
              styles={{ width: "100%" }}
              value={values.preferredPhoneNumber}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={phoneNumberTypes}
              onBlur={handleBlur}
              error={
                errors.preferredPhoneNumber && touched.preferredPhoneNumber
                  ? true
                  : false
              }
              label="Preferred Phone Type"
              options={phoneNumberTypes?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.preferredPhoneNumber && errors.preferredPhoneNumber && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.preferredPhoneNumber}</p>
                </Box>
              )}
            </SelectInput>
          </Box>
        </Box>
        {/* 2nd */}
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
            <SubHeading>Alternate Phone Number*</SubHeading>
            <InputMask
              mask="(999) 999-9999"
              value={values.alternatePhoneNumber}
              disabled={false}
              maskChar="_"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <PrimaryInput
                type="text"
                label=""
                name="alternatePhoneNumber"
                placeholder="(123) 456-7890"
                value={values.alternatePhoneNumber}
                helperText={
                  errors.alternatePhoneNumber && touched.alternatePhoneNumber
                    ? errors.alternatePhoneNumber
                    : ""
                }
                error={
                  errors.alternatePhoneNumber && touched.alternatePhoneNumber
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
              width: "50%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Phone Type*</SubHeading>
            <SelectInput
              name="preferredAlternatePhoneNumber"
              styles={{ width: "100%" }}
              value={values.preferredAlternatePhoneNumber}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={phoneNumberTypes}
              onBlur={handleBlur}
              error={
                errors.preferredAlternatePhoneNumber &&
                touched.preferredAlternatePhoneNumber
                  ? true
                  : false
              }
              label="Preferred Phone Type"
              options={phoneNumberTypes?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.preferredAlternatePhoneNumber &&
                errors.preferredAlternatePhoneNumber && (
                  <Box
                    sx={{
                      fontSize: "12px",
                      color: "#FF0000",
                      fontWeight: 400,
                      lineHeight: "17px",
                    }}
                  >
                    <p>{errors.preferredAlternatePhoneNumber}</p>
                  </Box>
                )}
            </SelectInput>
          </Box>
        </Box>
        {/* 3rd */}
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
              width: "50%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Email Address*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="email"
              placeholder="Email Address"
              value={values.email}
              helperText={errors.email && touched.email ? errors.email : ""}
              error={errors.email && touched.email ? true : false}
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
            <SubHeading>Preferred Contact Type*</SubHeading>
            <SelectInput
              name="preferredContactType"
              styles={{ width: "100%" }}
              value={values.preferredContactType}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={preferredContactTypes}
              onBlur={handleBlur}
              error={
                errors.preferredContactType && touched.preferredContactType
                  ? true
                  : false
              }
              label="Preferred Contact Type"
              options={preferredContactTypes?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.preferredContactType && errors.preferredContactType && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.preferredContactType}</p>
                </Box>
              )}
            </SelectInput>
          </Box>
        </Box>
      </Box>
    </>
  );
};

ContactInformation.label = "Contact Information";
ContactInformation.initialValues = {
  phoneNumber: "",
  preferredPhoneNumber: "",
  alternatePhoneNumber: "",
  preferredAlternatePhoneNumber: "",
  email: "",
  preferredContactType: "",
};

ContactInformation.validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .test(
      "valid-phone-number",
      "Invalid Characters",
      (value: string | undefined) => {
        if (!value) return false;
        const numericValue = value.replace(/\D/g, "");
        return numericValue.length === 10;
      }
    )
    .required("Phone Number is required"),
  preferredPhoneNumber: Yup.string().required(
    "Preferred Phone Type is required"
  ),
  alternatePhoneNumber: Yup.string()
    .test(
      "valid-phone-number",
      "Invalid Characters",
      (value: string | undefined) => {
        if (!value) return false;
        const numericValue = value.replace(/\D/g, "");
        return numericValue.length === 10;
      }
    )
    .required("Alternate Phone Number is required"),
  preferredAlternatePhoneNumber: Yup.string().required(
    "Phone Type is required"
  ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  preferredContactType: Yup.string().required(
    "Preferred Contact Type is required"
  ),
});

export default ContactInformation;
