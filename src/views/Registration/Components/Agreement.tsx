import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";
import "../Registration.css";
import { Box } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface AgreementProps {
  formik: any;
}

const Agreement = ({ formik }: AgreementProps) => {
  const { values, handleChange, handleBlur } = formik;

  return (
    <>
      <h3 className="our-agree">Our User Agreement</h3>
      <Box
        sx={{
          fontSize: "20px",
          margin: "5px 0",
          color: "#414042",
          fontWeight: 600,
          "@media (max-width: 576px)": {
            fontSize: "16px",
            margin: "10px 0",
          },
        }}
      >
        <p>
          Please read and agree to our Coherus Solutions™ User Agreement to
          complete your registration.
        </p>
      </Box>
      <Box
        sx={{
          border: "1px solid #000",
          padding: "8px 10px ",
        }}
      >
        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
            fontWeight: 600,
            maxHeight: "150px",
            overflowY: "scroll",

            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#EBEBEB",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: "8px",
              backgroundColor: "transparent",
            },
            "@media (max-width: 576px)": {
              fontSize: "12px",
              padding: "5px 8px",
            },
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <p>Legal Terms for Use of Coherus COMPLETE ™, September 2020</p>
            <br />
            <p>
              Welcome to the CoherusCOMPLETE™ website located at
              coheruscomplete.com (the “Website”), which is operated by
              CareMetx, LLC. Please read these Terms of Use (the “Terms”) and
              Coherus’s Privacy Policy (https://www.coherus.com/privacy-notice)
              and CareMetx LLC privacy policy at https://caremetx.com/privacy/
              carefully because they govern your use of this Website and our
              online portal that we provide. To make these Terms easier to read,
              the Site and our services are collectively called the “Services.”
            </p>
            <br />
            <p>
              website located at coheruscomplete.com (the “Website”), which is
              operated by CareMetx, LLC. Please read these Terms of Use (the
              “Terms”) and Coherus’s Privacy Policy
              (https://www.coherus.com/privacy-notice) and CareMetx LLC privacy
              policy at https://caremetx.com/privacy/ carefully because they
              govern your use of this Website and our online portal that we
              provide. To make these Terms easier to read, the Site and our
              services are collectively called the “Services.”
            </p>
          </div>
        </Box>
      </Box>

      <Checkbox
        {...label}
        checked={values.agreement}
        onChange={handleChange}
        onBlur={handleBlur}
        name="agreement"
        color="primary"
      />
    </>
  );
};
// Check Box Validation
Agreement.label = "Agreement";
Agreement.initialValues = {
  agreement: false,
};
Agreement.validationSchema = Yup.object().shape({
  agreement: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default Agreement;
