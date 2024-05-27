import { Box, Checkbox } from "@mui/material";
import * as Yup from "yup";

interface EnrollProps {
  formik: any;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Enroll = ({ formik }: EnrollProps) => {
  const { values, errors, touched, handleBlur, setFieldValue } = formik;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("agreement", event.target.checked);
  };

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
        <h1>
          In order to enroll in Coherus Solutions™, <br />
          you need to obtain HIPAA consent.
        </h1>

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
              {...label}
              checked={values.agreement}
              onChange={handleCheckboxChange}
              onBlur={handleBlur}
              name="agreement"
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
            <p>By checking this box,</p>
            <p>
              I attest that, where required by applicable law, regulation, or
              other applicable authority, I have obtained patient consent,
              permission and/or a HIPAA authorization (“Legal Permission”)
              permitting me to use and disclose my patients’ health,
              demographic, and other individually identifiable information,
              including insurance and financial information, to Coherus
              BioSciences, Inc. and its affiliates, its program administrator,
              and their respective agents, service providers and field
              reimbursement professionals (collectively referred to as, “Coherus
              Solutions™”) for the purpose of providing patient support programs
              including, co-pay assistance, charitable patient assistance, prior
              authorization and benefits verification requests, claims and
              appeals support, and other reimbursement support as part of the
              patient’s treatment with Coherus products. I maintain records of
              such Legal Permission consistent with applicable law. I further
              certify that (a) any reimbursement investigation support provided
              to patients through Coherus Solutions™ is not made in exchange,
              directly or indirectly, for my recommendation, prescription, or
              use of the above therapy or any other product or service for or
              from anyone, and (b) my decision to prescribe the above therapy
              was based solely on my determination of medical necessity. I
              attest have the authority to bind my organization to these
              representations and warranties.
            </p>
          </Box>
        </Box>

        {errors.agreement && touched.agreement && (
          <Box
            sx={{
              color: "red",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            {errors.agreement}
          </Box>
        )}
      </Box>
    </>
  );
};

Enroll.label = "Enroll";

Enroll.initialValues = {
  agreement: false,
};

Enroll.validationSchema = Yup.object().shape({
  // agreement: Yup.boolean().oneOf([true], "You must accept the agreement"),
});

export default Enroll;
