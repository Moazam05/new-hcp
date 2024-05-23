import { Box } from "@mui/material";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { UdencycaGreen, StepOneGreen } from "../../../assets/images";
import PatientDetails from "./steps/PatientDetails";
import ContactInformation from "./steps/ContactInformation";
import React, { useState } from "react";
// Formik
import { Form, Formik } from "formik";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import Footer from "../../../components/Footer";

const newSteps = [PatientDetails, ContactInformation];

const RegisterPatient = () => {
  const [activeStep, setActiveStep] = useState<any>(0);

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
    const { setSubmitting, setTouched } = formikBag;

    if (activeStep === 0) {
      handleNext();
      setTouched(false);
    }

    if (activeStep === 1) {
      handleNext();
      setTouched(false);
    }

    if (isLastStep()) {
      alert("Last Step");
    }

    setSubmitting(false);
  };

  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "20px 80px",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            margin: "0 20px 20px",
          },
        }}
      >
        <img src={UdencycaGreen} alt="step" />
        <img src={StepOneGreen} alt="step" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "50px 100px",
          "@media (max-width: 992px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            width: "800px",
            "@media (max-width: 576px)": {
              width: "100%",
            },
          }}
        >
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnBlur={false}
            // validateOnChange={false}
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
                    marginTop: "80px",
                  }}
                >
                  <PrimaryButton
                    type="submit"
                    // disabled={
                    //   activeStep === 1 && props.values.agreement === false
                    // }
                  >
                    {/* {isLoading ? (
                      <Box
                        sx={{
                          padding: "4px 20px",
                        }}
                      >
                        <Spinner size={18} specificColor="#fff" />
                      </Box>
                    ) : (
                      "CONTINUE"
                    )} */}
                    CONTINUE
                  </PrimaryButton>
                </Box>
              </Form>
            )}
          </Formik>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "15px 0 0",
            }}
            // onClick={() => setModalOpen(true)}
          >
            <SecondaryButton />
          </Box>
        </Box>
      </Box>

      <Footer />
    </SecondaryLayout>
  );
};

export default RegisterPatient;
