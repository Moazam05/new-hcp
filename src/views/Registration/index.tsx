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
import { useRegisterMutation } from "../../redux/api/authApiSlice";
import ToastAlert from "../../components/ToastAlert";
import DotLoader from "../../components/Spinner/dotLoader";
import Spinner from "../../components/Spinner";
// import AccountPendingModal from "./Components/AccountPendingModal";
// import AccountInvalidateModal from "./Components/AccountInvalidateModal";

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

  // Register Api Bind
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (values: any, formikBag: any) => {
    const { setSubmitting, setTouched } = formikBag;

    const payload = {
      organization: {
        name: values.practiceName,
        orgNPI: values.organizationalApi.toString(),
        taxIDNumber: values.taxId.toString(),
      },
      location: {
        name: values.practiceName,
        address1: values.addressLineOne,
        address2: values.addressLineTwo,
        city: values.city,
        state: values.state,
        zip: values.zipCode,
        phone: values.phoneNumber.replace(/\D/g, ""),
        fax: values.faxNumber.replace(/\D/g, ""),
        // siteOfServiceID: values.siteOfService,
        siteOfServiceID: "00000000-0000-0000-0000-000000000001",
        isDefault: true,
      },
      person: {
        lastName: values.lastName,
        firstName: values.firstName,
        jobTitle: values.jobTitle,
        phoneNumber: values.phoneNumber.replace(/\D/g, ""),
      },
      loginModel: {
        username: values.email,
        password: values.password,
      },
    };

    console.log("payload", payload);

    if (activeStep === 0) {
      handleNext();
      setTouched(false);
    }
    if (activeStep === 1) {
      handleNext();
      setTouched(false);
    }
    if (activeStep === 2) {
      handleNext();
      setTouched(false);
    }
    if (activeStep === 3) {
      handleNext();
      setTouched(false);
    }

    if (isLastStep()) {
      try {
        const user: any = await register(payload);

        if (user) {
          console.log("user", user);

          return;

          navigate("/thank-you");
        }
        if (user?.error) {
          // ToastAlert(user?.error?.data?.title, "error");
          ToastAlert("User not found", "error");
        }
      } catch (error) {
        console.error("Register Error:", error);
        ToastAlert("Something went wrong", "error");
      }
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
            maxWidth: "600px",
          }}
        >
          <Box
            sx={{
              justifyContent: "start",
              fontSize: "20px",
              fontWeight: 700,
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
                    marginTop: "10px",
                  }}
                >
                  <PrimaryButton
                    type="submit"
                    disabled={
                      activeStep === 1 && props.values.agreement === false
                    }
                  >
                    {isLoading ? (
                      <Box
                        sx={{
                          padding: "7px 40px",
                        }}
                      >
                        <Spinner size={22} specificColor="#fff" />
                      </Box>
                    ) : (
                      "CONTINUE"
                    )}
                  </PrimaryButton>
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
      {/* <AccountPendingModal /> */}
      {/* <AccountInvalidateModal /> */}
    </Layout>
  );
};

export default Registration;
