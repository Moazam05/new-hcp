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
import MedicalInsurance from "../../components/CommonSteps/MedicalInsurance";
import DocumentUpload from "../../components/CommonSteps/DocumentUpload";
import FinancialAssistant from "../../components/CommonSteps/FinancialAssistant";
import AssistanceAttestation from "../../components/CommonSteps/AssistanceAttestation";
import Attestation from "../../components/CommonSteps/Attestation";
import Submit from "./components/Submit";
import { getCurrentDate } from "../../../../utils";

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
  const [formData, setFormData] = useState<any>({});

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

    const date = getCurrentDate();

    const payload = {
      pharmacy: {
        pharmacyId: "21181499-d2f0-4a3c-b6d0-823c180ecf99",
        name: "Test Pharmacy",
        ncpdp: "6000222",
        npi: "1962826735",
        emailAddress: "",
        specialtyType: "",
        address: {
          addressLine1: "123 main st",
          addressLine2: "",
          city: "ORLANDO",
          state: "FL",
          postalCode: "32818",
          country: "",
        },
        phone: {
          number: "1231231234",
          ext: "",
          countryCode: "",
          phoneType: 0,
        },
        fax: {
          number: "1231231234",
          ext: "",
          countryCode: "",
          phoneType: 0,
        },
        additionalDetails: [],
      },
      consents: [
        {
          status: 1, // Consented
          consentType: 2, //HIPAA
          consentMethod: 2, // Electronic
          consentName: "HIPAA",
          receivedDate: date, //Todays Date
          providedBy: 1, //Patient
        },
      ],
      insurances: [
        {
          rank: 1,
          planType: values.medicalPrayerType,
          subscriberFirstName: values.medicalPrimaryPolicyHolderFirstName,
          subscriberLastName: values.medicalPrimaryPolicyHolderLastName,
          relationshipToSubscriber: values.medicalPrimaryRelationshipToPatient,
          employerName: "AssistRx", //Optional
          companyName: values.medicalPrimaryInsuranceCompany,
          groupNumber: "63582",
          memberNumber: "H1234567",
          payerId: "ABC123",
          phone: {
            //Optional
            number: values.medicalPrimaryPhoneNumber.replace(/\D/g, ""),
            phoneType: 1,
          },
          pbmName: "OptumRx",
          pbmPhone: {
            number: "4075555555",
            phoneType: 1,
          },
          rxBin: "123456",
          rxPcn: "12345678",
          rxGroup: "1234567890",
          rxPayerId: "ABC123",
          additionalDetails: [],
        },
      ],
      prescriptions: [
        {
          productName: "SYFOVRE",
          productCode: "73606002001",
          productCodeType: 1,
          daysSupply: 30,
          quantity: 30,
          substitutionsAllowed: false,
          sig: "TAKE AS NEEDED",
          notes: "Prescriber notes",
          dateWritten: "2024-01-15T12:00:00Z",
          numberOfRefills: 2,
          dispenseType: 1,
          additionalDetails: [],
        },
      ],
      financialInformation: {
        householdSize: 4,
        householdIncome: 120000,
      },
      diagnosisCodes: [
        {
          icd10: values.primaryICD10,
          additionalDetails: [
            {
              key: "IsSecondaryDiagnosis",
              value: "true",
            },
            {
              key: "7",
              value: "C56.1",
            },
          ],
        },
      ],
    };

    const patientData = localStorage.getItem("patientData") || "";
    const patientDataObj = JSON.parse(patientData);

    const dualPayload = {
      ...patientDataObj,
      ...payload,
    };

    if (activeStep === 5) {
      setFormData(dualPayload);
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
            <Submit formData={formData} />
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
