import { Box, Checkbox, FormControlLabel } from "@mui/material";
import * as Yup from "yup";
import Paragraph from "../../../../components/Paragraph";
import PrimaryButton from "../../../../components/PrimaryButton";

interface HipaaProps {
  formik: any;
}

const Hipaa = ({ formik }: HipaaProps) => {
  const {
    values,
    // errors, touched,
    handleChange,
    handleBlur,
  } = formik;

  console.log("values", values);

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
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
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
                },
              },
            }}
            label="Yes"
            name="hipaaYes"
            checked={values.hipaaYes}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormControlLabel
            control={<Checkbox />}
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
                },
              },
            }}
            label="No"
            name="hipaaNo"
            checked={values.hipaaNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>

        {values.hipaaNo && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              margin: "50px 0",
            }}
          >
            <Paragraph
              sx={{
                fontSize: "26px",
                fontWeight: "bold",
                color: "#00739A",
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
  hipaaYes: false,
  hipaaNo: false,
};

Hipaa.validationSchema = Yup.object().shape({
  // hipaaYes: Yup.boolean().required("Required"),
  // hipaaNo: Yup.boolean().required("Required"),
});

export default Hipaa;
