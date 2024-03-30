import React from "react";
import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Agreement = ({ formik }) => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    formik;

  return (
    <>
      <h3>Our User Agreement</h3>
      <p>
        Please read and agree to our Coherus Solutions™ User Agreement to
        complete your registration.
      </p>
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
