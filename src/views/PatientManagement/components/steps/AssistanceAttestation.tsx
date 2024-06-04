import { Box, Checkbox } from "@mui/material";
import * as Yup from "yup";
import Paragraph from "../../../../components/Paragraph";

interface AssistanceAttestationProps {
  formik: any;
}

const AssistanceAttestation = ({ formik }: AssistanceAttestationProps) => {
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
        <h1>Patient Assistance Attestation</h1>
      </Box>
      <Paragraph
        sx={{
          marginLeft: "200px",
          "@media (max-width: 576px)": {
            marginLeft: "0",
          },
        }}
      >
        Please read, attest, and continue to proceed
      </Paragraph>
      <Box
        sx={{
          display: "flex",
          margin: "20px 230px",
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
            checked={values.assistanceAgreement}
            onChange={(e) =>
              setFieldValue("assistanceAgreement", e.target.checked)
            }
            onBlur={handleBlur}
            name="assistanceAgreement"
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
            color: "#414042",
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
            I attest that If this patient receives medication from Coherus
            through the patient assistance program (PAP), to the best of my
            knowledge, this patient has no prescription insurance coverage
            (including Medicaid, Medicare, or other public or private programs),
            or is covered by Medicare fee-for-service and is unable to afford
            the cost-sharing requirements associated with his/her insurance
            coverage for this medication and the patient meets all other PAP
            eligibility requirements. In addition, I attest that LOQTORZI is
            being prescribed consistent with the approved prescribing
            information or I believe it is medically necessary based on the
            patient’s diagnosis.
          </p>
        </Box>
      </Box>

      {errors.assistanceAgreement && touched.assistanceAgreement && (
        <Box
          sx={{
            color: "red",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {errors.assistanceAgreement}
        </Box>
      )}
    </>
  );
};

AssistanceAttestation.label = "AssistanceAttestation";

AssistanceAttestation.initialValues = {
  assistanceAgreement: false,
};

AssistanceAttestation.validationSchema = Yup.object().shape({
  assistanceAgreement: Yup.boolean().oneOf(
    [true],
    "You must accept the agreement"
  ),
});

export default AssistanceAttestation;
