import { Box, Checkbox } from "@mui/material";
import * as Yup from "yup";
import Paragraph from "../../../../components/Paragraph";

interface CoPayEligibilityProps {
  formik: any;
}

const CoPayEligibility = ({ formik }: CoPayEligibilityProps) => {
  const {
    values,
    // errors, touched,
    handleBlur,
    setFieldValue,
  } = formik;

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
        <h1>Co-Pay Eligibility</h1>
        <Box
          sx={{
            margin: "0px 205px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              width: "100%",
              justifyContent: "start",
              alignContent: "start",
              "@media (max-width: 576px)": {
                flexDirection: "column",
                margin: "8px 0",
              },
            }}
          >
            <Paragraph
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#414042",
                margin: "20px 0",
                "@media (max-width: 576px)": {
                  fontSize: "18px",
                  marginLeft: "0",
                },
              }}
            >
              Co-Pay Assistance Program
            </Paragraph>
          </Box>
          <Paragraph
            sx={{
              fontSize: "20px",
              color: "#414042",
            }}
          >
            To enroll in the UDENYCA® Co-Pay Assistance Program, you must agree
            to the following statements:
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              margin: "20px 0 0",
              "@media (max-width: 576px)": {
                margin: "20px 0 0",
              },
            }}
          >
            <Box
              sx={{
                height: "fit-content",
              }}
            >
              <Checkbox
                checked={values.copayStepOne}
                onChange={(e) =>
                  setFieldValue("copayStepOne", e.target.checked)
                }
                onBlur={handleBlur}
                name="copayStepOne"
                color="primary"
                sx={{
                  padding: 0,
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
                  margin: "0 0 0px 10px",
                },
              }}
            >
              <Paragraph
                sx={{
                  fontSize: "20px",
                  color: "#414042",
                  marginBottom: "20px",
                }}
              >
                I certify that this patient is NOT enrolled in any federal or
                state-funded programs, including but not limited to Medicare
                (including Part D, even in the coverage gap) or Medicaid,
                Medigap, VA, DoD, or TRICARE, or indemnity health insurance
                plans that do not cover prescription drugs, or HMO insurance
                plans that reimburse the patient for the entire cost of his or
                her prescription drugs, or where prohibited by law.
              </Paragraph>
            </Box>
          </Box>
          {/* 2nd */}
          <Box
            sx={{
              display: "flex",
              // margin: "40px 100px",
              "@media (max-width: 576px)": {
                margin: "20px 0 0",
              },
            }}
          >
            <Box
              sx={{
                height: "fit-content",
              }}
            >
              <Checkbox
                checked={values.copayStepTwo}
                onChange={(e) =>
                  setFieldValue("copayStepTwo", e.target.checked)
                }
                onBlur={handleBlur}
                name="copayStepTwo"
                color="primary"
                sx={{
                  padding: 0,
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
                  margin: "0 0 0px 10px",
                },
              }}
            >
              <Paragraph
                sx={{
                  fontSize: "20px",
                  color: "#414042",
                  marginBottom: "20px",
                }}
              >
                I have read and agree to the eligibility terms and conditions,
                and confirm that the patient is eligible and that, if their
                eligibility changes, they will cease to participate.
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

CoPayEligibility.label = "CoPay Eligibility";
CoPayEligibility.initialValues = {
  copayStepOne: false,
  copayStepTwo: false,
};

CoPayEligibility.validationSchema = Yup.object().shape({
  //   copayStepOne: Yup.boolean().oneOf([true], "You must accept the agreement"),
  //   copayStepTwo: Yup.boolean().oneOf([true], "You must accept the agreement"),
});

export default CoPayEligibility;
