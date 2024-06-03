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
import React, { useState, useMemo } from "react";
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
import { useGetLocationQuery } from "../../../redux/api/locationApiSlice";

const RegisterPatient = () => {
  const therapyTypes = localStorage.getItem("therapy");

  const initialSteps = [
    PatientDetails,
    ContactInformation,
    Prescriber,
    PracticeLocation,
    Hipaa,
    Insurance,
    // Enroll,
    // FinancialAssistant,
    // AssistanceAttestation,
    // Attestation,
    // InsuranceDetails,
    // MedicalInsurance,
    // PharmacyInsurance,
    // TreatmentInformation,
    // DocumentUpload,
    // CoPayEligibility,
    // AttestationAndSubmit,
  ];

  const caseOne = [Enroll, FinancialAssistant];

  const [activeStep, setActiveStep] = useState(0);
  const [mediCareValue, setMediCareValue] = useState("");
  const [locationId, setLocationId] = useState("");
  const [hipaaValue, setHipaaValue] = useState("");

  const steps = useMemo(() => {
    if (hipaaValue === "Yes" && mediCareValue !== "commercial") {
      return [...initialSteps, ...caseOne];
    }
    return initialSteps;
  }, [hipaaValue, mediCareValue]);

  const { data: getLocationData } = useGetLocationQuery(locationId);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = () => {
    setActiveStep(Math.min(activeStep + 1, steps.length - 1));
  };

  const initialValues = steps.reduce(
    (values, step: any) => ({
      ...values,
      ...(step.initialValues || {}),
    }),
    {}
  );

  const ActiveStep: any = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;

  const onSubmit = async (values: any, { setSubmitting, setTouched }: any) => {
    setTouched(false);

    const phone1 = values?.phoneNumber?.replace(/\D/g, "");
    const phone2 = values?.alternatePhoneNumber?.replace(/\D/g, "");

    const phone1Type = values.preferredPhoneNumber;
    const phone2Type = values.preferredAlternatePhoneNumber;

    const phones = [
      {
        number: phone1,
        phoneType: phone1Type,
      },
      ...(phone2 ? [{ number: phone2, phoneType: phone2Type }] : []),
    ];

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
        phones,
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
        preferredLanguage: "English",
        emailAddress: values.email,
        preferredContactType: 1,
        additionalDetails: [],
      },
      prescriber: {
        stateLicenseNumber: "",
        specialty: "",
        suffix: "",
        role: "",
        title: "",
        npi: values.npi,
        firstName: values.presFirstName,
        lastName: values.presLastName,
        taxId: "12-1234567",
        additionalDetails: [],
      },
      practice: {
        name: getLocationData?.data?.name,
        contactName: "John Doe",
        contactEmail: "mailto:person@example.com",
        phone: {
          number: getLocationData?.data?.phone,
          phoneType: 1,
        },
        fax: {
          number: getLocationData?.data?.fax,
          phoneType: 1,
        },
        address: {
          addressLine1: getLocationData?.data?.address1,
          addressLine2: getLocationData?.data?.address2,
          city: getLocationData?.data?.city,
          state: getLocationData?.data?.state,
          postalCode: getLocationData?.data?.zip,
          country: "USA",
        },
        npi: "1234567890",
        taxId: "12-1234567",
        type: 1,
        additionalDetails: [],
      },
    };

    console.log("payload", payload);

    if (isLastStep()) {
      // Handle the last step submission logic here
      alert("Form submitted successfully");
    }

    setSubmitting(false);
    handleNext();
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
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props: any) => (
              <Form>
                {React.createElement(steps[activeStep], {
                  formik: props,
                  setMediCareValue: setMediCareValue,
                  setLocationId: setLocationId,
                  setHipaaValue: setHipaaValue,
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
                  <PrimaryButton type="submit" disabled={hipaaValue === "No"}>
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
