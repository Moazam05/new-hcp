import { Box, Checkbox } from "@mui/material";
import Paragraph from "../../../../components/Paragraph";
import * as Yup from "yup";

interface FinancialAssistantProps {
  formik: any;
}

const FinancialAssistant = ({ formik }: FinancialAssistantProps) => {
  const { values, errors, touched, handleBlur, setFieldValue } = formik;

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
        <h1>What type of insurance does the patient have?</h1>
        <Paragraph
          sx={{
            fontSize: "20px",
            color: "#414042",
            fontWeight: "bold",
          }}
        >
          Please confirm each criteria by checking the box next to each
          requirement
        </Paragraph>

        {/* 1st */}
        <Box
          sx={{
            display: "flex",
            margin: "40px 50px 40px 100px",
            "@media (max-width: 576px)": {
              margin: "20px 20px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "fit-content",
            }}
          >
            <Checkbox
              checked={values.stepOne}
              onChange={(e) => setFieldValue("stepOne", e.target.checked)}
              onBlur={handleBlur}
              name="stepOne"
              color="primary"
              sx={{
                padding: 0,
                color: errors.stepOne && touched.stepOne ? "red" : "",
                "& .MuiButtonBase-root": {
                  padding: 0,
                },
              }}
            />
          </Box>
          <Box
            sx={{
              color: "#afafaf",
              fontSize: "20px",
              fontWeight: 400,
              marginLeft: "14px",
              "@media (max-width: 576px)": {
                fontSize: "16px",
                minHeight: "80px",
                margin: "0 0 40px 10px",
              },
            }}
          >
            <p>
              Be either: (a) uninsured; (b) functionally underinsured†; or (c)
              traditional Medicare FFS insured patient(s) that demonstrate
              financial hardship and cannot afford their cost-sharing obligation
              as evidenced by a signed attestation from their provider (and meet
              all eligibility criteria listed below)
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

FinancialAssistant.label = "Financial Assistant";

FinancialAssistant.initialValues = {
  stepOne: false,
};

FinancialAssistant.validationSchema = Yup.object().shape({
  stepOne: Yup.boolean().oneOf([true], "Please confirm the criteria above"),
});

export default FinancialAssistant;
