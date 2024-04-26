// React Imports
import { useEffect, useState } from "react";
// React Input Mask
import InputMask from "react-input-mask";
// MUI
import { Box } from "@mui/material";
// Yup
import * as Yup from "yup";
// Constants
import constants from "../../../constants";
// Custom
import PrimaryInput from "../../../components/PrimaryInput";
import { SubHeading } from "../../../components/Heading";
import InActiveModal from "./InActiveModal";
import { countryStates } from "../../../constants/countryStates";
// Style
import "../Registration.css";
import SelectInput from "../../../components/SelectInput";

interface PracticeInformationProps {
  formik: any;
}

const PracticeInformation = ({ formik }: PracticeInformationProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  // Inactivity Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [showInactivity, setShowInactivity] = useState(false);

  useEffect(() => {
    let interval: any;

    const startTimer = () => {
      const time = Number(import.meta.env.VITE_REACT_INACTIVE_TIME) * 60 * 1000;

      interval = setInterval(() => {
        setShowInactivity(true);
        setModalOpen(true);
      }, time);
    };
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [modalOpen]);

  let interval: any;
  const handleResetTimer = () => {
    setShowInactivity(false);
    setModalOpen(false);
    clearInterval(interval);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 576px)": {
          padding: "0 20px",
          gap: "0px",
        },
      }}
    >
      <h2 className="registration-title">
        {constants.PRACTICE_INFORMATION_TITLE}
      </h2>
      <Box
        sx={{
          fontSize: "20px",
          margin: "5px 0 40px",
          color: "#414042",
          fontWeight: 400,
          "@media (max-width: 576px)": {
            fontSize: "16px",
            margin: "8px 0",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "505px",
          }}
        >
          <p>{constants.PRACTICE_INFORMATION_PARAGRAPH}</p>
        </Box>
      </Box>
      <Box
        sx={{
          height: "86px",
          width: "100%",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "80px",
          },
        }}
      >
        <SubHeading>Practice Name*</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="practiceName"
          placeholder="Practice Name"
          value={values.practiceName}
          helperText={
            errors.practiceName && touched.practiceName
              ? errors.practiceName
              : ""
          }
          error={errors.practiceName && touched.practiceName ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>

      <Box
        sx={{
          height: "86px",
          width: "100%",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "80px",
          },
        }}
      >
        <SubHeading>Site of Service*</SubHeading>
        <SelectInput
          name="siteOfService"
          styles={{ width: "100%" }}
          value={values.siteOfService}
          onChange={(e: any) => {
            handleChange(e);
          }}
          data={countryStates}
          onBlur={handleBlur}
          error={errors.siteOfService && touched.siteOfService ? true : false}
          label="Site of Service"
          options={countryStates?.map((project: any) => {
            return {
              ...project,
              id: project.abbreviation,
              value: project.abbreviation,
              label: project.name,
            };
          })}
        >
          {touched.siteOfService && errors.siteOfService && (
            <Box
              sx={{
                fontSize: "12px",
                color: "#FF0000",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              <p>{errors.siteOfService}</p>
            </Box>
          )}
        </SelectInput>
        {/* <PrimaryInput
          type="text"
          label=""
          name="siteOfService"
          placeholder="Site of Service"
          value={values.siteOfService}
          helperText={
            errors.siteOfService && touched.siteOfService
              ? errors.siteOfService
              : ""
          }
          error={errors.siteOfService && touched.siteOfService ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        /> */}
      </Box>

      <Box
        sx={{
          height: "86px",
          width: "100%",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "80px",
          },
        }}
      >
        <SubHeading>Address Line 1*</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="addressLineOne"
          placeholder="Address Line 1"
          value={values.addressLineOne}
          helperText={
            errors.addressLineOne && touched.addressLineOne
              ? errors.addressLineOne
              : ""
          }
          error={errors.addressLineOne && touched.addressLineOne ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>

      <Box
        sx={{
          height: "80px",
          width: "100%",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "60px",
          },
        }}
      >
        <SubHeading>Address Line 2</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="addressLineTwo"
          placeholder="Address Line 2"
          value={values.addressLineTwo}
          helperText={
            errors.addressLineTwo && touched.addressLineTwo
              ? errors.addressLineTwo
              : ""
          }
          error={errors.addressLineTwo && touched.addressLineTwo ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>City*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="city"
            placeholder="City"
            value={values.city}
            helperText={errors.city && touched.city ? errors.city : ""}
            error={errors.city && touched.city ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>State*</SubHeading>
          <SelectInput
            name="state"
            styles={{ width: "100%" }}
            value={values.state}
            onChange={(e: any) => {
              handleChange(e);
            }}
            data={countryStates}
            onBlur={handleBlur}
            error={errors.state && touched.state ? true : false}
            label="State"
            options={countryStates?.map((project: any) => {
              return {
                ...project,
                id: project.abbreviation,
                value: project.abbreviation,
                label: project.name,
              };
            })}
          >
            {touched.state && errors.state && (
              <Box
                sx={{
                  fontSize: "12px",
                  color: "#FF0000",
                  fontWeight: 400,
                  lineHeight: "17px",
                }}
              >
                <p>{errors.state}</p>
              </Box>
            )}
          </SelectInput>
        </Box>
        <Box
          sx={{
            height: "86px",
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Zip Code*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="zipCode"
            placeholder="Zip Code"
            value={values.zipCode}
            helperText={errors.zipCode && touched.zipCode ? errors.zipCode : ""}
            error={errors.zipCode && touched.zipCode ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>

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
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Organizational API*</SubHeading>
          <PrimaryInput
            type="number"
            label=""
            name="organizationalApi"
            placeholder="Organizational API"
            value={values.organizationalApi}
            helperText={
              errors.organizationalApi && touched.organizationalApi
                ? errors.organizationalApi
                : ""
            }
            error={
              errors.organizationalApi && touched.organizationalApi
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
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Tax ID Number*</SubHeading>
          <PrimaryInput
            type="number"
            label=""
            name="taxId"
            placeholder="Tax ID Number"
            value={values.taxId}
            helperText={errors.taxId && touched.taxId ? errors.taxId : ""}
            error={errors.taxId && touched.taxId ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>

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
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Phone Number*</SubHeading>
          <InputMask
            mask="(999) 999-9999"
            value={values.practicePhoneNumber}
            disabled={false}
            maskChar="_"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <PrimaryInput
              type="text"
              label=""
              name="practicePhoneNumber"
              placeholder="(123) 456-7890"
              value={values.practicePhoneNumber}
              helperText={
                errors.practicePhoneNumber && touched.practicePhoneNumber
                  ? errors.practicePhoneNumber
                  : ""
              }
              error={
                errors.practicePhoneNumber && touched.practicePhoneNumber
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
            width: "100%",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
            },
          }}
        >
          <SubHeading>Fax Number*</SubHeading>
          <PrimaryInput
            type="text"
            label=""
            name="faxNumber"
            placeholder="Fax Number"
            value={values.faxNumber}
            helperText={
              errors.faxNumber && touched.faxNumber ? errors.faxNumber : ""
            }
            error={errors.faxNumber && touched.faxNumber ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
      {showInactivity && (
        <InActiveModal
          modalOpen={modalOpen}
          handleResetTimer={handleResetTimer}
        />
      )}
    </Box>
  );
};

PracticeInformation.label = "Practice Information";
PracticeInformation.initialValues = {
  practiceName: "",
  siteOfService: "",
  addressLineOne: "",
  addressLineTwo: "",
  city: "",
  state: "",
  zipCode: "",
  organizationalApi: "",
  taxId: "",
  practicePhoneNumber: "",
  faxNumber: "",
};

PracticeInformation.validationSchema = Yup.object().shape({
  practiceName: Yup.string().required("Practice Name is required"),
  siteOfService: Yup.string().required("Site of Service is required"),
  addressLineOne: Yup.string().required("Address Line 1 is required"),
  addressLineTwo: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("required"),
  organizationalApi: Yup.string()
    .min(10, "Organizational API must be 10 digits")
    .max(10, "Organizational API must be 10 digits")
    .required("Organizational API is required"),
  taxId: Yup.string()
    .min(10, "Tax ID API must be 10 digits")
    .max(10, "Tax ID API must be 10 digits")
    .required("Tax ID API is required"),
  faxNumber: Yup.string()
    .min(10, "Fax Number must be 10 digits")
    .max(10, "Fax Number must be 10 digits")
    .required("Fax Number is required"),
  practicePhoneNumber: Yup.string()
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
});

export default PracticeInformation;
