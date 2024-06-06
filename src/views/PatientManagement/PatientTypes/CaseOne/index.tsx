import { Box } from "@mui/material";
import {
  LoqtorziLogo,
  UdencycaGreen,
  PrescriberAttestation,
} from "../../../../assets/images";
import TreatmentInformation from "./components/TreatmentInformation";
import React, { useState } from "react";
import Footer from "../../../../components/Footer";
import SecondaryButton from "../../../../components/SecondaryButton";
import { Form, Formik } from "formik";
import PrimaryButton from "../../../../components/PrimaryButton";
import MedicalInsurance from "../../components/steps/MedicalInsurance";
import DocumentUpload from "../../components/steps/DocumentUpload";
import FinancialAssistant from "../../components/steps/FinancialAssistant";
import AssistanceAttestation from "../../components/steps/AssistanceAttestation";
import Attestation from "../../components/steps/Attestation";
import Submit from "./components/Submit";

const newSteps = [
  MedicalInsurance,
  TreatmentInformation,
  DocumentUpload,
  FinancialAssistant,
  AssistanceAttestation,
  Attestation,
];

const CaseOne = () => {
  const therapyTypes = localStorage.getItem("therapy");
  // states
  const [activeStep, setActiveStep] = useState<any>(0);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

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
    console.log("values", values);

    if (activeStep >= 0 && activeStep <= 4) {
      handleNext();
      setTouched(false);
    }

    if (activeStep === 5) {
      setShowSubmitForm(true);
    }

    // if (isLastStep()) {
    //   alert("Form submitted successfully");
    // }

    setSubmitting(false);
  };

  const fullWidthSteps = [0, 1, 2, 3, 4, 5];

  return (
    <>
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
        <img
          src={therapyTypes === "loqtorzi" ? LoqtorziLogo : UdencycaGreen}
          alt="step"
        />
        <img src={PrescriberAttestation} alt="step" />
      </Box>
      {showSubmitForm ? (
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
              width: fullWidthSteps.includes(activeStep) ? "100%" : "800px",
              "@media (max-width: 576px)": {
                width: "100%",
              },
            }}
          >
            <Submit />
          </Box>
        </Box>
      ) : (
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
              width: fullWidthSteps.includes(activeStep) ? "100%" : "800px",
              "@media (max-width: 576px)": {
                width: "100%",
              },
            }}
          >
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              // validateOnBlur={false}
              // validateOnChange={false}
            >
              {(props: any) => (
                <Form>
                  {React.createElement(newSteps[activeStep], {
                    formik: props,
                  })}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "80px",
                      "@media (max-width: 576px)": {
                        marginTop: "40px",
                      },
                    }}
                  >
                    {/* {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handlePrev}
                      >
                        BACK
                      </Button>
                    )} */}
                    <PrimaryButton type="submit">
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
      )}

      <Footer />
    </>
  );
};

export default CaseOne;
