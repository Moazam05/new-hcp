import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";
import { useRef, useState, useEffect } from "react";
import "../Registration.css";
import { Box } from "@mui/material";
import "../Registration.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface AgreementProps {
  formik: any;
}

const Agreement = ({ formik }: AgreementProps) => {
  const { values, handleChange, handleBlur } = formik;
  const termsBoxRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    if (termsBoxRef.current) {
      const termsBox = termsBoxRef.current;
      const contentHeight = termsBox.scrollHeight - termsBox.clientHeight;
      setTopPosition((scrollPosition / contentHeight) * 100);
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    if (termsBoxRef.current) {
      const { scrollTop } = termsBoxRef.current;
      setScrollPosition(scrollTop);
    }
  };

  console.log("topPosition", topPosition);

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
            margin: "10px 20px",
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
          padding: "8px 10px",
          margin: "10px 0 20px",
          "@media (max-width: 576px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          ref={termsBoxRef}
          onScroll={handleScroll}
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
            <p>
              This is an additional paragraph added to increase the content
              height dynamically.
            </p>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 576px)": {
            margin: "0 20px 0 10px",
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
            onChange={handleChange}
            onBlur={handleBlur}
            name="agreement"
            color="primary"
            disabled={topPosition > 99 ? false : true}
          />
        </Box>
        <Box
          sx={{
            color: topPosition > 99 ? "#414042" : "#afafaf",
            fontSize: "20px",
            marginBottom: "40px",
            fontWeight: 600,
            minHeight: "155px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              minHeight: "80px",
              margin: "0 0 30px",
            },
          }}
        >
          <p>
            I attest that I am the Coherus Solutions™ Provider Portal
            Administrator for this practice. I acknowledge that I and any
            employee I set up will use the provider portal only for patient
            support purposes, or as otherwise permitted by applicable privacy
            laws and in agreement with the above User Agreement.
          </p>
        </Box>
      </Box>
    </>
  );
};

Agreement.label = "Agreement";
Agreement.initialValues = {
  agreement: false,
};
Agreement.validationSchema = Yup.object().shape({
  agreement: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default Agreement;
