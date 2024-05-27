import { Box } from "@mui/material";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import {
  UdencycaGreen,
  StepOneGreen,
  PrescriberStepTwo,
  PrescriberStepThree,
  PrescriberStepFour,
  LoqtorziLogo,
  PrescriberStepFourBlue,
  PrescriberAttestation,
} from "../../../assets/images";
import PatientDetails from "./steps/PatientDetails";
import ContactInformation from "./steps/ContactInformation";
import React, { useState } from "react";
// Formik
import { Form, Formik } from "formik";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import Footer from "../../../components/Footer";
import Prescriber from "./steps/Prescriber";
import PracticeLocation from "./steps/PracticeLocation";
import Hipaa from "./steps/Hipaa";
import Enroll from "./steps/Enroll";
import Insurance from "./steps/Insurance";
import FinancialAssistant from "./steps/FinancialAssistant";
import AssistanceAttestation from "./steps/AssistanceAttestation";
import Attestation from "./steps/Attestation";
import InsuranceDetails from "./steps/InsuranceDetails";
import MedicalInsurance from "./steps/MedicalInsurance";
import PharmacyInsurance from "./steps/PharmacyInsurance";
import TreatmentInformation from "./steps/TreatmentInformation";

const newSteps = [
  PatientDetails,
  ContactInformation,
  Prescriber,
  PracticeLocation,
  Hipaa,
  Enroll,
  Insurance,
  FinancialAssistant,
  AssistanceAttestation,
  Attestation,
  InsuranceDetails,
  MedicalInsurance,
  PharmacyInsurance,
  TreatmentInformation,
];

const RegisterPatient = () => {
  const [activeStep, setActiveStep] = useState<any>(0);
  const [mediCareValue, setMediCareValue] = useState<any>("");

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

    console.log("values", values);

    if (activeStep >= 0 && activeStep <= 13) {
      handleNext();
      setTouched(false);
    }

    if (isLastStep()) {
      alert("Last Step");
    }

    setSubmitting(false);
  };

  const stepImages: any = {
    2: PrescriberStepTwo,
    3: PrescriberStepThree,
    4: PrescriberStepFour,
    5: PrescriberStepFour,
    6: PrescriberStepFour,
    10: PrescriberStepFour,
    11: PrescriberStepFour,
    12: PrescriberStepFour,
    13: PrescriberStepFour,
  };

  const rightSideImage =
    activeStep === 9 && mediCareValue === "medicare"
      ? PrescriberAttestation
      : mediCareValue === "medicare"
      ? PrescriberStepFourBlue
      : stepImages[activeStep] || StepOneGreen;

  console.log("activeStep", activeStep);

  const fullWidthSteps = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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
        <img
          src={mediCareValue === "medicare" ? LoqtorziLogo : UdencycaGreen}
          alt="step"
        />
        <img src={rightSideImage} alt="step" />
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
            width: fullWidthSteps.includes(activeStep) ? "100%" : "800px",
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
                  setMediCareValue: setMediCareValue,
                  // setActiveStep: setActiveStep,
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
