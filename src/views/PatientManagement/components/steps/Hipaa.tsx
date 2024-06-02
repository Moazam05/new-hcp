import { Box, Checkbox, FormControlLabel } from "@mui/material";
import * as Yup from "yup";
import Paragraph from "../../../../components/Paragraph";
import PrimaryButton from "../../../../components/PrimaryButton";

interface HipaaProps {
  formik: any;
  setHipaaValue: any;
}

const Hipaa = ({ formik, setHipaaValue }: HipaaProps) => {
  const { values, errors, touched, handleBlur, setFieldValue, setTouched } =
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
        <h1>Does the office have HIPAA consent on file from the patient?</h1>

        <Box
          sx={{
            margin: "50px 0",
            display: "flex",
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
                checked={values.hipaaYes}
                onChange={() => {
                  setFieldValue("hipaaYes", true);
                  setFieldValue("hipaaNo", false);
                  setHipaaValue("Yes");
                  setTouched({ ...touched, hipaaYes: false });
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
            name="hipaaYes"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={values.hipaaNo}
                onChange={() => {
                  setFieldValue("hipaaNo", true);
                  setFieldValue("hipaaYes", false);
                  setTouched({ ...touched, hipaaNo: false });
                  setHipaaValue("No");
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
            name="hipaaNo"
          />
        </Box>

        {(errors.hipaaYes || errors.hipaaNo) &&
          touched.hipaaYes &&
          touched.hipaaNo && (
            <Box
              sx={{
                color: "#FF0000",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              You must select either 'Yes' or 'No'
            </Box>
          )}

        {values.hipaaNo && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              margin: "50px 0",
              "@media (max-width: 576px)": {
                margin: "20px 0",
              },
            }}
          >
            <Paragraph
              sx={{
                fontSize: "26px",
                fontWeight: "bold",
                color: "#00739A",
                "@media (max-width: 576px)": {
                  fontSize: "20px",
                },
              }}
            >
              Do you need to download the HIPAA consent form?
            </Paragraph>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PrimaryButton>DOWNLOAD</PrimaryButton>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

Hipaa.label = "HIPAA";

Hipaa.initialValues = {
  hipaaYes: null,
  hipaaNo: null,
};

Hipaa.validationSchema = Yup.object()
  .shape({
    hipaaYes: Yup.boolean()
      .oneOf([true, false], "Required")
      .required("Required"),
    hipaaNo: Yup.boolean()
      .oneOf([true, false], "Required")
      .required("Required"),
  })
  .test(
    "oneOfRequired",
    "You must select either 'Yes' or 'No'",
    function (values) {
      return values.hipaaYes || values.hipaaNo;
    }
  );

export default Hipaa;
