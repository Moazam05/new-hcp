import { Box, Checkbox } from "@mui/material";
import * as Yup from "yup";
import Paragraph from "../../../../components/Paragraph";

interface AttestationAndSubmitProps {
  formik: any;
}

const AttestationAndSubmit = ({ formik }: AttestationAndSubmitProps) => {
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
        <h1>Attestation and Submit</h1>
        <Box
          sx={{
            display: "flex",
            margin: "40px 100px",
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
              checked={values.submitAgree}
              onChange={(e) => setFieldValue("submitAgree", e.target.checked)}
              onBlur={handleBlur}
              name="submitAgree"
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
              I attest that, where required by applicable law, regulation, or
              other applicable authority, I have obtained patient consent,
              permission and/or a HIPAA authorization (“Legal Permission”)
              permitting me to use and disclose my patients’ health,
              demographic, and other individually identifiable information,
              including insurance and financial information, to Coherus
              BioSciences, Inc., its affiliates, its program administrator, and
              their respective agents, service providers and field reimbursement
              professionals for the purpose of providing patient support
              programs, co-pay assistance, and/or patient assistance,
              reimbursement support as part of the patient’s treatment with
              UDENYCA®. I maintain records of such Legal Permission consistent
              with applicable law. I further certify that (a) any reimbursement
              investigation support provided to patients through Coherus
              Solutions™ is not made in exchange, directly or indirectly, for my
              recommendation, prescription, or use of the above therapy or any
              other product or service for or from anyone, and (b) my decision
              to prescribe the above therapy was based solely on my
              determination of medical necessity. For insured patients, I
              understand that the Coherus Solutions™ program does not provide
              free drug in the instance of an administrative error or a coverage
              restriction such as a step edit or others deemed as restrictions.
              For certain products where step edit may not be medically
              appropriate, and confirmed by the prescribing physician, the
              Coherus Solutions™ program may consider enrollment following 1
              level of appeal. I can confirm that the patient does not have
              coverage for UDENYCA® at the date of service.
            </Paragraph>
          </Box>
        </Box>
      </Box>
    </>
  );
};

AttestationAndSubmit.label = "Attestation & Submit";
AttestationAndSubmit.initialValues = {
  submitAgree: false,
};

AttestationAndSubmit.validationSchema = Yup.object().shape({
  //   submitAgree: Yup.boolean().oneOf([true], "You must accept the agreement"),
});

export default AttestationAndSubmit;
