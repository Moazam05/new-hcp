import { Box, Checkbox } from "@mui/material";
import * as Yup from "yup";
import Paragraph from "../../../../components/Paragraph";

interface AttestationProps {
  formik: any;
}

const Attestation = ({ formik }: AttestationProps) => {
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
        <h1>Attestation and Submit</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "40px 230px",
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
            checked={values.attestation}
            onChange={(e) => setFieldValue("attestation", e.target.checked)}
            onBlur={handleBlur}
            name="attestation"
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
              margin: "0 0 40px 10px",
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
            permitting me to use and disclose my patients’ health, demographic,
            and other individually identifiable information, including insurance
            and financial information, to Coherus BioSciences, Inc., its
            affiliates, its program administrator, and their respective agents,
            service providers and field reimbursement professionals for the
            purpose of providing patient support programs, co-pay assistance,
            and/or patient assistance, reimbursement support as part of the
            patient’s treatment with LOQTORZI. I maintain records of such Legal
            Permission consistent with applicable law. I further certify that
            (a) any reimbursement investigation support provided to patients
            through Coherus Solutions™ is not made in exchange, directly or
            indirectly, for my recommendation, prescription, or use of the above
            therapy or any other product or service for or from anyone, and (b)
            my decision to prescribe the above therapy was based solely on my
            determination of medical necessity. For insured patients, I
            understand that the Coherus Solutions™ program does not provide free
            drug in the instance of an administrative error or a coverage
            restriction such as a step edit or others deemed as restrictions.
            For certain products where step edit may not be medically
            appropriate, and confirmed by the prescribing physician, the Coherus
            Solutions™ program may consider enrollment following 1 level of
            appeal. I can confirm that the patient does not have coverage for
            LOQTORZI at the date of service.
          </Paragraph>

          <Paragraph
            sx={{
              fontSize: "20px",
              color: "#414042",
              marginBottom: "20px",
            }}
          >
            Providers requesting more than six (6) PAP fills for the same
            patient will be required to provide written attestation on business
            letterhead reaffirming continued PAP necessity (DX, patient therapy
            log, etc.)
          </Paragraph>

          <Paragraph
            sx={{
              fontSize: "20px",
              color: "#414042",
              marginBottom: "20px",
            }}
          >
            I understand that by checking the “I Agree” box immediately
            preceeding this notice, I am providing “written instructions” to
            Coherus BioSciences, Inc. and/or its agents and contractors under
            applicable federal and/or state law authorizing them to perform
            electronic income verification by obtaining information from my
            personal credit profile or other information from Experian Health. I
            authorize Coherus and/or their agents and contractors to obtain such
            information solely to validate my income for the purposes of
            determining my eligibility for patient assistance. As a soft credit
            check, it will not impact my credit score.
          </Paragraph>
        </Box>
      </Box>

      {errors.attestation && touched.attestation && (
        <Box
          sx={{
            color: "red",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {errors.attestation}
        </Box>
      )}
    </>
  );
};

Attestation.label = "Attestation";

Attestation.initialValues = {
  attestation: false,
};

Attestation.validationSchema = Yup.object().shape({
  attestation: Yup.boolean().oneOf([true], "You must accept the agreement"),
});

export default Attestation;
