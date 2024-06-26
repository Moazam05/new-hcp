import { Box } from "@mui/material";
import * as Yup from "yup";
import { SubHeading } from "../../../../components/Heading";
import SelectInput from "../../../../components/SelectInput";
import PrimaryInput from "../../../../components/PrimaryInput";
import Paragraph from "../../../../components/Paragraph";
import {
  useAllPersonsQuery,
  useGetPersonQuery,
} from "../../../../redux/api/personApiSlice";
import { useEffect } from "react";

interface PrescriberProps {
  formik: any;
}

const Prescriber = ({ formik }: PrescriberProps) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    setTouched,
  } = formik;

  // todo: GET ALL USERS API CALL
  const { data, isLoading } = useAllPersonsQuery({
    type: "provider",
  });

  // todo: GET USER API CALL
  const { data: singleUserData } = useGetPersonQuery(values?.prescriber);

  useEffect(() => {
    if (singleUserData?.data) {
      setFieldValue("npi", singleUserData.data.providerNPI);
      setFieldValue("presLastName", singleUserData.data.lastName);
      setFieldValue("presFirstName", singleUserData.data.firstName);
      setTouched({
        ...touched,
        npi: false,
        presLastName: false,
        presFirstName: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleUserData]);

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
        <h1>Which prescriber is requesting services</h1>
      </Box>

      <Box
        sx={{
          height: "86px",
          width: "100%",
          margin: "40px 0",
          "@media (max-width: 576px)": {
            width: "100%",
            height: "60px",
            margin: "20px 0",
          },
        }}
      >
        <SelectInput
          name="prescriber"
          styles={{ width: "100%" }}
          value={values.prescriber}
          onChange={(e: any) => {
            handleChange(e);
          }}
          fetching={isLoading}
          data={data?.data?.$values}
          onBlur={handleBlur}
          error={errors.prescriber && touched.prescriber ? true : false}
          label="Prescriber"
          options={data?.data?.$values?.map((project: any) => {
            return {
              ...project,
              id: project.id,
              value: project.id,
              label: `${project.lastName} ${project.firstName}`,
            };
          })}
        >
          {touched.prescriber && errors.prescriber && (
            <Box
              sx={{
                fontSize: "12px",
                color: "#FF0000",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              <p>{errors.prescriber}</p>
            </Box>
          )}
        </SelectInput>
      </Box>

      {/* 2nd */}
      <Box
        sx={{
          maxWidth: "470px",
        }}
      >
        <Paragraph
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#00739A",
            "@media (max-width: 576px)": {
              fontSize: "14px",
            },
          }}
        >
          Prescriber Details
        </Paragraph>
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
            readOnly={true}
            type="text"
            label=""
            name="presLastName"
            placeholder="Last Name"
            value={values.presLastName}
            helperText={
              errors.presLastName && touched.presLastName
                ? errors.presLastName
                : ""
            }
            error={errors.presLastName && touched.presLastName ? true : false}
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
            readOnly={true}
            type="text"
            label=""
            name="presFirstName"
            placeholder="First Name"
            value={values.presFirstName}
            helperText={
              errors.presFirstName && touched.presFirstName
                ? errors.presFirstName
                : ""
            }
            error={errors.presFirstName && touched.presFirstName ? true : false}
            onBlur={handleBlur}
          />
        </Box>
      </Box>
      {/* 3rd */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            margin: "20px 0",
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
          <SubHeading>NPI Number*</SubHeading>
          <PrimaryInput
            readOnly={true}
            type="text"
            label=""
            name="npi"
            placeholder="NPI Number"
            value={values.npi}
            helperText={errors.npi && touched.npi ? errors.npi : ""}
            error={errors.npi && touched.npi ? true : false}
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
        ></Box>
      </Box>
    </>
  );
};

Prescriber.label = "Prescriber";
Prescriber.initialValues = {
  prescriber: "",
  presLastName: "",
  presFirstName: "",
  npi: "",
};

Prescriber.validationSchema = Yup.object().shape({
  prescriber: Yup.string().required("Prescriber is required"),
  presLastName: Yup.string().required("Last Name is required"),
  presFirstName: Yup.string().required("First Name is required"),
  npi: Yup.string()
    .min(10, "NPI Number must be 10 digits")
    .max(10, "NPI Number must be 10 digits")
    .required("NPI Number is required"),
});

export default Prescriber;
