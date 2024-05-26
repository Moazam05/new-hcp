import { Box } from "@mui/material";
import * as Yup from "yup";

interface PracticeLocationProps {
  formik: any;
}

const practiceLocationData = [
  {
    label: "New York",
    value: "new-york",
  },
  {
    label: "California",
    value: "california",
  },
];

const PracticeLocation = ({ formik }: PracticeLocationProps) => {
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
        <Box>
          <h1>
            Which practice location is the <br /> service being initiated at?
          </h1>
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
        ></Box>
      </Box>
    </>
  );
};

PracticeLocation.label = "Practice Location";

PracticeLocation.initialValues = {
  practiceLocation: "",
};

PracticeLocation.validationSchema = Yup.object().shape({
  practiceLocation: Yup.string().required("Practice Location is required"),
});

export default PracticeLocation;
