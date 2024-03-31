// React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Formik
import { Form, Formik } from "formik";
// Custom
import Layout from "../../components/Layout";
import PracticeInformation from "./Components/PracticeInformation";
import UserInformation from "./Components/UserInformation";
import PrimaryButton from "../../components/PrimaryButton";
import Agreement from "./Components/Agreement";
import SecondaryButton from "../../components/SecondaryButton";
import ReviewForm from "./Components/ReviewForm";
import PasswordSet from "./Components/PasswordSet";
import CancelModal from "./Components/CancelModal";

const newSteps = [
  UserInformation,
  Agreement,
  PracticeInformation,
  ReviewForm,
  PasswordSet,
];

const Registration = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState<any>(0);
  const [modalOpen, setModalOpen] = useState(false);

  const isLastStep = () => {
    return activeStep === newSteps.length - 1;
  };

  // const handlePrev = () => {
  //   setActiveStep(Math.max(activeStep - 1, 0));
  // };

  const handleNext = () => [
    setActiveStep(Math.min(activeStep + 1, newSteps.length - 1)),
  ];

  const initialValues = newSteps.reduce(
    (values, { initialValues }: any) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );

  const ActiveStep: any = newSteps[activeStep];
  const validationSchema = ActiveStep.validationSchema;

  const onSubmit = async (values: any, formikBag: any) => {
    const { setSubmitting } = formikBag;

    console.log("values", values);

    if (activeStep === 0) {
      handleNext();
    }
    if (activeStep === 1) {
      handleNext();
    }
    if (activeStep === 2) {
      handleNext();
    }
    if (activeStep === 3) {
      handleNext();
    }

    if (isLastStep()) {
      navigate("/thank-you");
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
              display: activeStep === 1 || activeStep === 3 ? "none" : "flex",

              "@media (max-width: 576px)": {
                padding: "0 20px 0",
              },
            }}
          >
            Step{" "}
            {activeStep === 1 || activeStep === 2
              ? activeStep
              : activeStep === 4
              ? activeStep - 1
              : activeStep + 1}{" "}
            of {3}
          </Box>

          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
          >
            {(props: any) => (
              <Form>
                {React.createElement(newSteps[activeStep], {
                  formik: props,
                  setActiveStep: setActiveStep,
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
                    label="CONTINUE"
                    disabled={
                      activeStep === 1 && props.values.agreement === false
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
            onClick={() => setModalOpen(true)}
          >
            <SecondaryButton />
          </Box>
        </Box>
      </Box>
      {/* Cancel Modal */}
      <CancelModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Layout>
  );
};

export default Registration;
