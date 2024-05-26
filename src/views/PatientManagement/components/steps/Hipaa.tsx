import { Box } from "@mui/material";
import * as Yup from "yup";

interface HipaaProps {
  formik: any;
}

const Hipaa = ({ formik }: HipaaProps) => {
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
        <h1>Does the office have HIPAA consent on file from the patient?</h1>

        <Box
          sx={{
            margin: "50px 0",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          sapiente vitae temporibus eligendi debitis amet praesentium, aut quos,
          eaque enim omnis repellendus modi assumenda fugiat aliquam, rem iusto
          excepturi.
        </Box>
      </Box>
    </>
  );
};

Hipaa.label = "HIPAA";

Hipaa.initialValues = {};

Hipaa.validationSchema = {};

export default Hipaa;
