import React, { useState } from "react";
import Layout from "../../components/Layout";
import PracticeInformation from "./Components/PracticeInformation";
import UserInformation from "./Components/UserInformation";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import PrimaryButton from "../../components/PrimaryButton";
import Agreement from "./Components/Agreement";

const newSteps = [UserInformation, Agreement, PracticeInformation];

const Registration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAgreement, setShowAgreement] = useState(false);

  const isLastStep = () => {
    return activeStep === newSteps.length - 1;
  };

  const handlePrev = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => [
    setActiveStep(Math.min(activeStep + 1, newSteps.length - 1)),
  ];

  const initialValues = newSteps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );

  const ActiveStep = newSteps[activeStep];
  const validationSchema = ActiveStep.validationSchema;

  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;

    console.log("values", values);

    if (activeStep === 0) {
      handleNext();
    }
    if (activeStep === 1) {
      handleNext();
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      {/* <Agreement handleNext={handleNext} /> */}

      <Box>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnBlur={false}
        >
          {(props: any) => (
            <>
              <Form>
                {React.createElement(newSteps[activeStep], {
                  formik: props,
                })}

                <Box
                  sx={{
                    justifyContent: "end",
                    gap: "20px",
                    margin: "30px 0",

                    // "@media (min-width: 320px) and (max-width: 479px)": {
                    //   margin: "20px 0",
                    // },
                  }}
                >
                  {/* <SecondaryButton
                    disabled={activeStep === 0 || props.isSubmitting}
                    onClick={handlePrev}
                    sx={{ display: activeStep === 0 ? "none" : "flex" }}
                  >
                    Previous
                  </SecondaryButton> */}
                  {/* <PrimaryButton
                    disabled={
                      props.isSubmitting || userClinicsSuccess || buttonDisabled
                    }
                    type="submit"
                  >
                    Login
                  </PrimaryButton> */}
                  <PrimaryButton
                    type="submit"
                    label="Continue"
                    disabled={props.values.agreement === false}
                  />
                </Box>
              </Form>
            </>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default Registration;
