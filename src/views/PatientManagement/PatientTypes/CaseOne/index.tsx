import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  LoqtorziLogo,
  PrescriberAttestation,
  UdencycaGreen,
} from "../../../../assets/images";
import Footer from "../../../../components/Footer";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondaryButton from "../../../../components/SecondaryButton";
import { getCurrentDate } from "../../../../utils";
import Submit from "./components/Submit";

interface CaseOneProps {
  steps: any;
}

const CaseOne = ({ steps }: CaseOneProps) => {
  const therapyTypes = localStorage.getItem("therapy");
  // states
  const [activeStep, setActiveStep] = useState<any>(0);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const newSteps = steps;

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
    (values: any, { initialValues }: any) => ({
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

    if (activeStep >= 0 && activeStep <= steps?.length - 1) {
      handleNext();
      setTouched(false);
    }

    const insuranceArray = values?.commercialCheckBox
      ? [
          {
            rank: 1,
            planType: values.primaryPrayerType,
            subscriberFirstName: values.primaryPolicyHolderFirstName,
            subscriberLastName: values.primaryPolicyHolderLastName,
            relationshipToSubscriber:
              3 || values.medicalPrimaryRelationshipToPatient,
            employerName: "AssistRx", //Optional
            companyName: values.primaryInsuranceCompany,
            groupNumber: "63582",
            memberNumber: "H1234567",
            payerId: "ABC123",
            phone: {
              //Optional
              number: values?.primaryPhoneNumber?.replace(/\D/g, ""),
              phoneType: 1,
            },
            pbmName: "OptumRx",
            pbmPhone: {
              number: "4075555555",
              phoneType: 1,
            },
            rxBin: values.pharmacyBinNumber,
            rxPcn: values.pharmacyPcnNumber,
            rxGroup: values.pharmacyGroupNumber,
            rxPayerId: values.pharmacyMemberId,
            additionalDetails: [],
          },
          //
          {
            rank: 1,
            planType: values.secondaryPrayerType,
            subscriberFirstName: values.secondaryPolicyHolderFirstName,
            subscriberLastName: values.secondaryPolicyHolderLastName,
            relationshipToSubscriber:
              3 || values.medicalPrimaryRelationshipToPatient,
            employerName: "AssistRx", //Optional
            companyName: values.secondaryInsuranceCompany,
            groupNumber: "63582",
            memberNumber: "H1234567",
            payerId: "ABC123",
            phone: {
              //Optional
              number: values?.secondaryPhoneNumber?.replace(/\D/g, ""),
              phoneType: 1,
            },
            pbmName: "OptumRx",
            pbmPhone: {
              number: "4075555555",
              phoneType: 1,
            },
            rxBin: values.pharmacyBinNumber,
            rxPcn: values.pharmacyPcnNumber,
            rxGroup: values.pharmacyGroupNumber,
            rxPayerId: values.pharmacyMemberId,
            additionalDetails: [],
          },
        ]
      : values?.primaryPrayerType && !values?.commercialCheckBox
      ? [
          {
            rank: 1,
            planType: values.primaryPrayerType,
            subscriberFirstName: values.primaryPolicyHolderFirstName,
            subscriberLastName: values.primaryPolicyHolderLastName,
            relationshipToSubscriber:
              3 || values.medicalPrimaryRelationshipToPatient,
            employerName: "AssistRx", //Optional
            companyName: values.primaryInsuranceCompany,
            groupNumber: "63582",
            memberNumber: "H1234567",
            payerId: "ABC123",
            phone: {
              //Optional
              number: values?.primaryPhoneNumber?.replace(/\D/g, ""),
              phoneType: 1,
            },
            pbmName: "OptumRx",
            pbmPhone: {
              number: "4075555555",
              phoneType: 1,
            },
            rxBin: values.pharmacyBinNumber,
            rxPcn: values.pharmacyPcnNumber,
            rxGroup: values.pharmacyGroupNumber,
            rxPayerId: values.pharmacyMemberId,
            additionalDetails: [],
          },
        ]
      : [
          {
            rank: 1,
            planType: values.medicalPrayerType,
            subscriberFirstName: values.medicalPrimaryPolicyHolderFirstName,
            subscriberLastName: values.medicalPrimaryPolicyHolderLastName,
            relationshipToSubscriber:
              3 || values.medicalPrimaryRelationshipToPatient,
            employerName: "AssistRx", //Optional
            companyName: values.medicalPrimaryInsuranceCompany,
            groupNumber: "63582",
            memberNumber: "H1234567",
            payerId: "ABC123",
            phone: {
              //Optional
              number: values?.medicalPrimaryPhoneNumber?.replace(/\D/g, ""),
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
        ];

    console.log("insuranceArray", insuranceArray);

    const prescriptionsData =
      therapyTypes === "loqtorzi"
        ? [
            {
              productName: "Loqtorzi", // DIFFERENT VALUES
              productCode: "70114-0340-01", // DIFFERENT VALUES
              productCodeType: 1,
              daysSupply: 1,
              quantity: 1,
              substitutionsAllowed: false,
              sig: "",
              notes: "",
              dateWritten: "",
              numberOfRefills: 0,
              dispenseType: 1,
              additionalDetails: [
                {
                  key: "3", // J Code
                  value: "J3263",
                },
              ],
            },
          ]
        : values.productName === 1
        ? [
            {
              productName: "Udenyca PFS", // DIFFERENT VALUES
              productCode: "70114-0101-01", // DIFFERENT VALUES
              productCodeType: 6,
              daysSupply: 1,
              quantity: 1,
              substitutionsAllowed: false,
              sig: "",
              notes: "",
              dateWritten: "",
              numberOfRefills: 0,
              dispenseType: 1,
              additionalDetails: [
                {
                  key: "6", // Q Code
                  value: "Q5111",
                },
              ],
            },
          ]
        : values.productName === 2
        ? [
            {
              productName: "Udenyca AI", // DIFFERENT VALUES
              productCode: "70114-0120-01", // DIFFERENT VALUES
              productCodeType: 6,
              daysSupply: 1,
              quantity: 1,
              substitutionsAllowed: false,
              sig: "",
              notes: "",
              dateWritten: "",
              numberOfRefills: 0,
              dispenseType: 1,
              additionalDetails: [
                {
                  key: "6", // Q Code
                  value: "Q5111",
                },
              ],
            },
          ]
        : [
            {
              productName: "Udenyca Onbody", // DIFFERENT VALUES
              productCode: "70114-0130-01", // DIFFERENT VALUES
              productCodeType: 6,
              daysSupply: 1,
              quantity: 1,
              substitutionsAllowed: false,
              sig: "",
              notes: "",
              dateWritten: "",
              numberOfRefills: 0,
              dispenseType: 1,
              additionalDetails: [
                {
                  key: "6", // Q Code
                  value: "Q5111",
                },
              ],
            },
          ];

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
      insurances: insuranceArray,
      prescriptions: prescriptionsData,
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

    if (activeStep === steps?.length - 1) {
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
                    {/* <PrimaryButton onClick={handlePrev}>Back</PrimaryButton> */}
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
