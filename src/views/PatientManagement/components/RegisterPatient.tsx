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
import DocumentUpload from "./steps/DocumentUpload";
import CoPayEligibility from "./steps/CoPayEligibility";
import AttestationAndSubmit from "./steps/AttestationAndSubmit";

const newSteps = [
  // PatientDetails,
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
  DocumentUpload,
  CoPayEligibility,
  AttestationAndSubmit,
];

const RegisterPatient = () => {
  const [activeStep, setActiveStep] = useState<any>(0);
  const [mediCareValue, setMediCareValue] = useState<any>("");
  // todo: Local Storage
  const therapyTypes = localStorage.getItem("therapy");

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

    // console.log("values", values);

    if (activeStep >= 0 && activeStep <= 16) {
      handleNext();
      setTouched(false);
    }

    const phone1 = values.phoneNumber.replace(/\D/g, "");
    const phone2 = values.alternatePhoneNumber.replace(/\D/g, "");

    const phone1Type = values.preferredPhoneNumber;
    const phone2Type = values.preferredAlternatePhoneNumber;

    const phones = [
      {
        number: phone1,
        phoneType: phone1Type,
      },
      ...(phone2 ? [{ number: phone2, phoneType: phone2Type }] : []),
    ];

    console.log(phones);

    const payload = {
      apiKey: "9D981B71-C2B4-49DA-BCDF-0A73D966A68B",
      clientName: "Coherus",
      externalEnrollmentId: "CoherusSoundViewTest1",
      requestedServices: [1, 6, 7],
      additionalDetails: [],
      patient: {
        externalPatientId: "Test12",
        address: {
          addressLine1: values.addressOne,
          addressLine2: values.addressTwo,
          city: values.city,
          state: values.state,
          postalCode: values.zipCode,
          country: "US",
        },
        phones: [
          // done
          {
            number: "4075555555",
            phoneType: 1,
          },
          {
            number: "5555555533",
            phoneType: 2,
          },
        ],
        firstName: values.firstName,
        // middleName: "ForStatus", //Optional, not on our form
        lastName: values.lastName,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth, // "1980-01-01",
        preferredLanguage: "English",
        emailAddress: values.email, // comes from 2nd Setup
        preferredContactType: 1,
        additionalDetails: [],
      },
    };

    if (isLastStep()) {
      // alert("Last Step");
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
    14: PrescriberStepFour,
    15: PrescriberStepFour,
    16: PrescriberStepFour,
  };

  const rightSideImage =
    activeStep === 9 && mediCareValue === "medicare"
      ? PrescriberAttestation
      : mediCareValue === "medicare"
      ? PrescriberStepFourBlue
      : stepImages[activeStep] || StepOneGreen;

  console.log("activeStep", activeStep);

  const fullWidthSteps = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
          src={therapyTypes === "loqtorzi" ? LoqtorziLogo : UdencycaGreen}
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
