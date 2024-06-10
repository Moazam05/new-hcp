import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  LoqtorziLogo,
  PrescriberStepFour,
  PrescriberStepFourBlue,
  PrescriberStepThree,
  PrescriberStepTwo,
  StepOneGreen,
  UdencycaGreen,
} from "../../../assets/images";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import ContactInformation from "./steps/ContactInformation";
import PatientDetails from "./steps/PatientDetails";
// Formik
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import { useGetLocationQuery } from "../../../redux/api/locationApiSlice";
import Hipaa from "./steps/Hipaa";
import Insurance from "./steps/Insurance";
import PracticeLocation from "./steps/PracticeLocation";
import Prescriber from "./steps/Prescriber";
import { convertDateFormat, getValues } from "../../../utils";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { selectedUser } from "../../../redux/auth/authSlice";

const newSteps = [
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

const RegisterPatient = () => {
  const navigate = useNavigate();
  const therapyTypes = localStorage.getItem("therapy");
  const loggedInUser = useTypedSelector(selectedUser);

  const [activeStep, setActiveStep] = useState<any>(0);
  const [mediCareValue, setMediCareValue] = useState<any>("");
  const [locationId, setLocationId] = useState("");
  const [hipaaValue, setHipaaValue] = useState("");
  const [showInsuranceMessage, setShowInsuranceMessage] = useState(false);
  const [showMedicareMessage, setShowMedicareMessage] = useState(false);

  const { data: getLocationData } = useGetLocationQuery(locationId);

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

    if (activeStep >= 0 && activeStep <= 6) {
      handleNext();
      setTouched(false);
    }

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

    const inputArgs = {
      bv: values.bv,
      copay: values.copay,
      financialAssistant: values.financialAssistant,
    };

    const payload = {
      apiKey: "9D981B71-C2B4-49DA-BCDF-0A73D966A68B",
      clientName: "Coherus",
      externalEnrollmentId: "CoherusSoundViewTest1",
      // requestedServices: [1, 6, 7],
      requestedServices: getValues(inputArgs),
      additionalDetails: [],
      patient: {
        externalPatientId: "",
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
        middleName: values.lastName,
        gender: values.gender,
        dateOfBirth: convertDateFormat(values.dateOfBirth),
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
        // taxId: "12-1234567",
        taxId: "",
        additionalDetails: [],
      },
      practice: {
        name: getLocationData?.data?.name,
        contactName: `${loggedInUser?.lastName} ${loggedInUser?.firstName}`,
        contactEmail: `mailto:${loggedInUser?.email}`,
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

    // todo: SINGLE BV, COPAY, FINANCIAL ASSISTANT
    const insuranceType = {
      bv: values.bv,
      copay: values.copay,
      financialAssistant: values.financialAssistant,
    };

    const { bv, copay, financialAssistant } = values;
    const isSingleType =
      mediCareValue === "medicare" &&
      ((bv && !copay && !financialAssistant) ||
        (copay && !bv && !financialAssistant) ||
        (financialAssistant && !bv && !copay));

    if (isLastStep()) {
      // todo: loqtorzi FLOW
      if (therapyTypes === "loqtorzi" && mediCareValue === "medicare") {
        // validation check
        if (
          values?.payerType === "medicare" &&
          values?.medicareYes === false &&
          values?.medicareNo === false
        ) {
          setShowMedicareMessage(true);
          return;
        }

        // todo: Single BV, Copay, Financial Assistant
        if (isSingleType) {
          localStorage.setItem("patientData", JSON.stringify(payload));
          localStorage.setItem("insuranceType", JSON.stringify(insuranceType));
          navigate(
            `/patient-management/enroll-patient/patient/new/${mediCareValue}`
          );
          return;
        }
        // todo: ANY COMBINATION OF (BV, COPAY, FINANCIAL ASSISTANT)
        localStorage.setItem("patientData", JSON.stringify(payload));
        localStorage.setItem("insuranceType", JSON.stringify(insuranceType));
        navigate(
          `/patient-management/enroll-patient/patient/new/${mediCareValue}`
        );
      }

      if (therapyTypes === "loqtorzi" && mediCareValue === "commercial") {
        // validation check
        if (
          values?.payerType === "commercial" &&
          values?.copayYes === false &&
          values?.copayNo === false
        ) {
          setShowInsuranceMessage(true);
          return;
        }

        // todo: SINGLE BV
        if (values.bv && !values.copay && !values.financialAssistant) {
          localStorage.setItem("patientData", JSON.stringify(payload));
          localStorage.setItem("insuranceType", JSON.stringify(insuranceType));
          navigate(
            `/patient-management/enroll-patient/patient/new/${mediCareValue}`
          );
        }
        // todo: SINGLE COPAY, BV + COPAY
        if (
          (values.copay && values.copayYes && !values.financialAssistant) ||
          (values.bv &&
            values.copay &&
            values.copayYes &&
            !values.financialAssistant)
        ) {
          localStorage.setItem("patientData", JSON.stringify(payload));
          localStorage.setItem("insuranceType", JSON.stringify(insuranceType));
          navigate(
            `/patient-management/enroll-patient/patient/new/${mediCareValue}`
          );
        }
      }

      // todo: udencyca FLOW
      if (therapyTypes === "udencyca" && mediCareValue === "medicare") {
        // validation check
        if (
          values?.payerType === "medicare" &&
          values?.medicareYes === false &&
          values?.medicareNo === false
        ) {
          setShowMedicareMessage(true);
          return;
        }
        // todo: SINGLE FA
        if (values.financialAssistant && !values.bv && !values.copay) {
          localStorage.setItem("patientData", JSON.stringify(payload));
          localStorage.setItem("insuranceType", JSON.stringify(insuranceType));
          navigate(
            `/patient-management/enroll-patient/patient/new/${mediCareValue}`
          );
        }

        // todo: SINGLE BV
        if (values.bv && !values.copay && !values.financialAssistant) {
          localStorage.setItem("patientData", JSON.stringify(payload));
          localStorage.setItem("insuranceType", JSON.stringify(insuranceType));
          navigate(
            `/patient-management/enroll-patient/patient/new/${mediCareValue}`
          );
        }
      }

      if (therapyTypes === "udencyca" && mediCareValue === "commercial") {
        // validation check
        if (
          values?.payerType === "commercial" &&
          values?.copayYes === false &&
          values?.copayNo === false
        ) {
          setShowInsuranceMessage(true);
          return;
        }
      }
    }

    setSubmitting(false);
  };

  const stepImages: any = {
    2: PrescriberStepTwo,
    3: PrescriberStepThree,
    4: PrescriberStepFour,
    5: PrescriberStepFour,
    6: PrescriberStepFour,
    // 10: PrescriberStepFour,
    // 11: PrescriberStepFour,
    // 12: PrescriberStepFour,
    // 13: PrescriberStepFour,
    // 14: PrescriberStepFour,
    // 15: PrescriberStepFour,
    // 16: PrescriberStepFour,
  };

  // const rightSideImage =
  //   activeStep === 9 && mediCareValue === "medicare"
  //     ? PrescriberAttestation
  //     : mediCareValue === "medicare"
  //     ? PrescriberStepFourBlue
  //     : stepImages[activeStep] || StepOneGreen;

  const rightSideImage =
    mediCareValue === "medicare"
      ? PrescriberStepFourBlue
      : stepImages[activeStep] || StepOneGreen;

  // const fullWidthSteps = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const fullWidthSteps = [4, 5, 6];

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
            // validateOnBlur={false}
            // validateOnChange={false}
          >
            {(props: any) => (
              <Form>
                {React.createElement(newSteps[activeStep], {
                  formik: props,
                  setMediCareValue: setMediCareValue,
                  showInsuranceMessage: showInsuranceMessage,
                  setShowInsuranceMessage: setShowInsuranceMessage,
                  showMedicareMessage: showMedicareMessage,
                  setShowMedicareMessage: setShowMedicareMessage,
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
                  <PrimaryButton onClick={handlePrev}>Back</PrimaryButton>
                  <PrimaryButton type="submit" disabled={hipaaValue === "No"}>
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
