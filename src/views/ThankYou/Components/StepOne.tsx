// React Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Constants
import constants from "../../../constants";
// Custom
import CustomModal from "../../../components/CustomModal";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import PrimaryPhoneInput from "../../../components/PhoneInput";
import { SubHeading } from "../../../components/Heading";
import StepTwo from "./StepTwo";
import BlueInput from "../../../components/BlueInput";

interface SMSStepOneProps {
  smsModalOpen: boolean;
  setSMSModalOpen: (value: boolean) => void;
  emailMethod: boolean;
}

const StepOne: React.FC<SMSStepOneProps> = (props) => {
  // todo: PROPS
  const { smsModalOpen, setSMSModalOpen, emailMethod } = props;

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [stepTwoModalOpen, setStepTwoModalOpen] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const isValidEmail = (email: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isEmailValid = isValidEmail(email);

  const closeModal = () => {
    setSMSModalOpen(false);
    setEmail("");
    setPhoneNumber("");
    navigate("/thank-you");
  };

  return (
    <Box>
      <CustomModal
        open={smsModalOpen}
        sx={{
          width: 675,
          padding: "75px 150px",
          border: "2px solid #979797",
          "@media (max-width: 576px)": {
            padding: "20px",
            width: "90%",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#007298",
            marginBottom: "12px",
            "@media (max-width: 576px)": {
              marginBottom: "0",
            },
          }}
        >
          <h3>{constants.FACTOR_AUTHENTICATION_TITLE}</h3>
        </Box>

        <Box
          sx={{
            fontSize: "24px",
            color: "#414042",
            margin: "62px 0 44px 0",
            fontWeight: 500,
            "@media (max-width: 576px)": {
              fontSize: "18px",
              margin: "30px 0 20px 0",
            },
          }}
        >
          <p>
            {emailMethod
              ? constants.EMAIL_STEP_ONE_TITLE
              : constants.SMS_STEP_ONE_TITLE}
          </p>
        </Box>

        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>
            {emailMethod
              ? constants.EMAIL_STEP_ONE_PARAGRAPH_ONE
              : constants.SMS_STEP_ONE_PARAGRAPH_ONE}
          </p>
        </Box>

        <Box
          sx={{
            margin: "30px 0",
          }}
        >
          <SubHeading
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              marginBottom: "11px",
            }}
          >
            {emailMethod ? "Email Address" : "Mobile Number"}
          </SubHeading>
          {emailMethod ? (
            <Box
              sx={{
                width: "75%",
                "@media (max-width: 576px)": {
                  width: "100%",
                },
              }}
            >
              <BlueInput
                value={email}
                onChange={(e) => handleEmailChange(e)}
                name="email"
                placeholder="email@address.com"
                type="email"
              />
            </Box>
          ) : (
            <>
              <PrimaryPhoneInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e)}
                sx={{
                  width: "75%",
                }}
              />
            </>
          )}
        </Box>

        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>
            {emailMethod
              ? constants.EMAIL_STEP_ONE_PARAGRAPH_TWO
              : constants.SMS_STEP_ONE_PARAGRAPH_TWO}
          </p>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            textAlign: "center",
            "@media (max-width: 576px)": {
              marginTop: "30px",
            },
          }}
        >
          <PrimaryButton
            onClick={() => {
              setSMSModalOpen(false);
              setStepTwoModalOpen(true);
            }}
            disabled={emailMethod ? !isEmailValid : phoneNumber.length < 11}
          >
            CONTINUE
          </PrimaryButton>
        </Box>

        <Box sx={{ margin: "15px 0 0px", textAlign: "center" }}>
          <SecondaryButton onClick={closeModal} />
        </Box>
      </CustomModal>
      {/* 2nd Step */}
      <StepTwo
        stepTwoModalOpen={stepTwoModalOpen}
        setStepTwoModalOpen={setStepTwoModalOpen}
        emailMethod={emailMethod}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
      />
    </Box>
  );
};

export default StepOne;
