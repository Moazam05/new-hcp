// React Imports
import React from "react";
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Constants
import constants from "../../../constants";
// Custom
import CustomModal from "../../../components/CustomModal";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";

interface SMSStepThreeProps {
  stepThreeModalOpen: boolean;
  setStepThreeModalOpen: (value: boolean) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setCodeValue: (value: string) => void;
  emailMethod: boolean;
}

const StepThree: React.FC<SMSStepThreeProps> = (props) => {
  // todo: PROPS
  const {
    stepThreeModalOpen,
    setStepThreeModalOpen,
    setEmail,
    setPhoneNumber,
    setCodeValue,
    emailMethod,
  } = props;

  const navigate = useNavigate();

  const closeModal = () => {
    setStepThreeModalOpen(false);
    setEmail("");
    setPhoneNumber("");
    setCodeValue("");
    navigate("/thank-you");
  };

  return (
    <Box>
      <CustomModal
        open={stepThreeModalOpen}
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
          <h3>{constants.TWO_FACTOR_THANK_YOU}</h3>
        </Box>
        <Box
          sx={{
            fontSize: "24px",
            color: "#414042",
            fontWeight: 500,
            textAlign: "center",
            margin: "62px 0 86px 0",
            "@media (max-width: 576px)": {
              fontSize: "18px",
              margin: "35px 0",
            },
          }}
        >
          <p>
            {emailMethod
              ? constants.EMAIL_STEP_TWO_TITLE
              : constants.SMS_STEP_TWO_TITLE}
          </p>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#414042",
          }}
        >
          <p>
            {emailMethod
              ? constants.EMAIL_STEP_THREE_PARAGRAPH_ONE
              : constants.SMS_STEP_THREE_PARAGRAPH_ONE}
          </p>
        </Box>

        <Box
          sx={{
            marginTop: "125px",
            textAlign: "center",
            "@media (max-width: 576px)": {
              marginTop: "50px",
            },
          }}
        >
          <PrimaryButton
            onClick={() => {
              navigate("/");
            }}
          />
        </Box>

        <Box sx={{ margin: "15px 0 0px", textAlign: "center" }}>
          <SecondaryButton onClick={closeModal} />
        </Box>
      </CustomModal>
    </Box>
  );
};

export default StepThree;
