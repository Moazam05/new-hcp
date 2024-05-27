// Yup
import * as Yup from "yup";
import PrimaryInput from "../../../../components/PrimaryInput";
import { SubHeading } from "../../../../components/Heading";
import { Box } from "@mui/material";
import SelectInput from "../../../../components/SelectInput";
import Paragraph from "../../../../components/Paragraph";
import { countryStates } from "../../../../constants/countryStates";
interface PatientDetailsProps {
  formik: any;
}

const genderData = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const PatientDetails = ({ formik }: PatientDetailsProps) => {
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
              Patient Name
            </Paragraph>
          </Box>
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
              width: "50%",
              "@media (max-width: 576px)": {
                width: "100%",
                height: "60px",
              },
            }}
          >
            <SubHeading>Last Name*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              helperText={
                errors.lastName && touched.lastName ? errors.lastName : ""
              }
              error={errors.lastName && touched.lastName ? true : false}
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
            <SubHeading>First Name*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              helperText={
                errors.firstName && touched.firstName ? errors.firstName : ""
              }
              error={errors.firstName && touched.firstName ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
            <SubHeading>Date of Birth*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="dateOfBirth"
              placeholder="xx/xx/xxxx"
              value={values.dateOfBirth}
              helperText={
                errors.dateOfBirth && touched.dateOfBirth
                  ? errors.dateOfBirth
                  : ""
              }
              error={errors.dateOfBirth && touched.dateOfBirth ? true : false}
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
            <SubHeading>Gender*</SubHeading>
            <SelectInput
              name="gender"
              styles={{ width: "100%" }}
              value={values.gender}
              onChange={(e: any) => {
                handleChange(e);
              }}
              data={genderData}
              onBlur={handleBlur}
              error={errors.gender && touched.gender ? true : false}
              label="Gender"
              options={genderData?.map((project: any) => {
                return {
                  ...project,
                  id: project.value,
                  value: project.value,
                  label: project.label,
                };
              })}
            >
              {touched.gender && errors.gender && (
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "#FF0000",
                    fontWeight: 400,
                    lineHeight: "17px",
                  }}
                >
                  <p>{errors.gender}</p>
                </Box>
              )}
            </SelectInput>
          </Box>
        </Box>
        {/* 3rd */}
        <Box
          sx={{
            margin: "5px 0 10px",
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
              Home Address
            </Paragraph>
          </Box>
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
            <SubHeading>Address Line 1*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="addressOne"
              placeholder="Address Line 1"
              value={values.addressOne}
              helperText={
                errors.addressOne && touched.addressOne ? errors.addressOne : ""
              }
              error={errors.addressOne && touched.addressOne ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
        {/* 4th */}
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
            <SubHeading>Address Line 2</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="addressTwo"
              placeholder="Address Line 2"
              value={values.addressTwo}
              helperText={
                errors.addressTwo && touched.addressTwo ? errors.addressTwo : ""
              }
              error={errors.addressTwo && touched.addressTwo ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
        {/* 5th */}
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
            <SubHeading>Zip*</SubHeading>
            <PrimaryInput
              type="text"
              label=""
              name="zipCode"
              placeholder="Zip"
              value={values.zipCode}
              helperText={
                errors.zipCode && touched.zipCode ? errors.zipCode : ""
              }
              error={errors.zipCode && touched.zipCode ? true : false}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

PatientDetails.label = "Patient Details";
PatientDetails.initialValues = {
  lastName: "",
  firstName: "",
  dateOfBirth: "",
  gender: "",
  addressOne: "",
  addressTwo: "",
  city: "",
  state: "",
  zipCode: "",
};

PatientDetails.validationSchema = Yup.object().shape({
  // lastName: Yup.string().required("Last Name is required"),
  // firstName: Yup.string().required("First Name is required"),
  // // date of Birth is like this format 05/05/2021
  // dateOfBirth: Yup.string()
  //   .matches(
  //     /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
  //     "Invalid Date Format (01/01/2021)"
  //   )
  //   .required("Date of Birth is required"),
  // gender: Yup.string().required("Gender is required"),
  // addressOne: Yup.string().required("Address Line1 is required"),
  // addressTwo: Yup.string(),
  // city: Yup.string().required("City is required"),
  // state: Yup.string().required("State is required"),
  // zipCode: Yup.string().required("Zip is required"),
});

export default PatientDetails;
