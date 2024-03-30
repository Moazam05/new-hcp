import React, { useState } from "react";
import Layout from "../../components/Layout";
import PracticeInformation from "./Components/PracticeInformation";
import UserInformation from "./Components/UserInformation";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import PrimaryButton from "../../components/PrimaryButton";
import Agreement from "./Components/Agreement";
import SecondaryButton from "../../components/SecondaryButton";

const newSteps = [Agreement, PracticeInformation];

const Registration = () => {
  const [activeStep, setActiveStep] = useState(0);

  // const isLastStep = () => {
  //   return activeStep === newSteps.length - 1;
  // };

  // const handlePrev = () => {
  //   setActiveStep(Math.max(activeStep - 1, 0));
  // };

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "575px",
          }}
        >
          <Box
            sx={{
              justifyContent: "start",
              fontSize: "20px",
              fontWeight: 600,
              display: activeStep === 1 ? "none" : "flex",

              "@media (max-width: 576px)": {
                padding: "0 20px 10px",
              },
            }}
          >
            Step{" "}
            {activeStep === 1 || activeStep === 2 ? activeStep : activeStep + 1}{" "}
            of {newSteps.length}
          </Box>

          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
          >
            {(props) => (
              <Form>
                {React.createElement(newSteps[activeStep], {
                  formik: props,
                })}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <PrimaryButton
                    type="submit"
                    label="Continue"
                    disabled={
                      activeStep === 1 && props.values?.agreement === false
                    }
                  />
                </Box>
              </Form>
            )}
          </Formik>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "15px 0 25px 0",
            }}
          >
            <SecondaryButton />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Registration;
