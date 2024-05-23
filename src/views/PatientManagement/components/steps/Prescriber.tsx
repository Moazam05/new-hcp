// Yup
import { Box } from "@mui/material";
import * as Yup from "yup";

interface PrescriberProps {
  formik: any;
}

const Prescriber = ({ formik }: PrescriberProps) => {
  //   const { values, errors, touched, handleChange, handleBlur } = formik;
  console.log("formik", formik);

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
    </>
  );
};

Prescriber.label = "Prescriber";
Prescriber.initialValues = {};

Prescriber.validationSchema = Yup.object().shape({});

export default Prescriber;
