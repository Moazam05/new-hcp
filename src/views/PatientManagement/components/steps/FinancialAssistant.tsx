import { Box, Checkbox } from "@mui/material";
import Paragraph from "../../../../components/Paragraph";
import * as Yup from "yup";

interface FinancialAssistantProps {
  formik: any;
}

const stepsData: any = [
  {
    name: "stepOne",
    description:
      "Be either: (a) uninsured; (b) functionally underinsured†; or (c) traditional Medicare FFS insured patient(s) that demonstrate financial hardship and cannot afford their cost-sharing obligation as evidenced by a signed attestation from their provider (and meet all eligibility criteria listed below)",
  },
  {
    name: "stepTwo",
    description:
      "Have an adjusted annual household income of ≤ 500% of Federal Poverty Level (FPL)",
  },
  {
    name: "stepThree",
    description:
      "Complete and sign consent attestation and, when applicable, provide income documentation",
  },
  {
    name: "stepFour",
    description:
      "Be under the care of a U.S. licensed provider, and receive LOQTORZI in an established practice located in the U.S. incident to the prescribing physician’s professional services in the outpatient setting",
  },
  {
    name: "stepFive",
    description: "Be a U.S. resident of any U.S. state or territory",
  },
  {
    name: "stepSix",
    description:
      "Diagnosis and dosing are consistent with FDA-approved indication for LOQTORZI or prescriber believes that LOQTORZI is medically necessary based on patient’s diagnosis",
  },
  {
    name: "stepSeven",
    description: "Not have any other financial support options",
  },
];

const StepComponent = ({
  step,
  values,
  errors,
  touched,
  handleBlur,
  setFieldValue,
}: any) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      margin: "0 0 20px 0",
      "@media (max-width: 576px)": {
        margin: "0 20px 0 0",
      },
    }}
  >
    <Box
      sx={{
        height: "fit-content",
      }}
    >
      <Checkbox
        checked={values[step.name]}
        onChange={(e) => setFieldValue(step.name, e.target.checked)}
        onBlur={handleBlur}
        name={step.name}
        color="primary"
        sx={{
          padding: 0,
          color: errors[step.name] && touched[step.name] ? "red" : "",
          "& .MuiButtonBase-root": {
            padding: 0,
          },
        }}
      />
    </Box>
    <Box
      sx={{
        color: "#414042",
        fontSize: "20px",
        fontWeight: 400,
        marginLeft: "14px",
        "@media (max-width: 576px)": {
          fontSize: "16px",
          minHeight: "80px",
          margin: "0 0 0 20px",
        },
      }}
    >
      <p>{step.description}</p>
    </Box>
  </Box>
);

const FinancialAssistant = ({ formik }: FinancialAssistantProps) => {
  const { values, errors, touched, handleBlur, setFieldValue } = formik;

  return (
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
          "@media (max-width: 576px)": {
            fontSize: "16px",
            marginTop: "15px",
          },
        }}
      >
        Please confirm each criteria by checking the box next to each
        requirement
      </Paragraph>

      <Box
        sx={{
          margin: "50px 190px 0px",
          "@media (max-width: 576px)": {
            margin: "20px 0 0 0",
          },
        }}
      >
        {stepsData.map((step: any) => (
          <StepComponent
            key={step.name}
            step={step}
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />
        ))}
      </Box>
    </Box>
  );
};

FinancialAssistant.label = "Financial Assistant";

FinancialAssistant.initialValues = stepsData.reduce((acc: any, step: any) => {
  acc[step.name] = false;
  return acc;
}, {});

FinancialAssistant.validationSchema = Yup.object(
  stepsData.reduce((acc, step) => {
    acc[step.name] = Yup.boolean().oneOf(
      [true],
      "Please confirm the criteria above"
    );
    return acc;
  }, {})
);

export default FinancialAssistant;
