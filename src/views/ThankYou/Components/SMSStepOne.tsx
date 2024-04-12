// React Imports
import { useState } from "react";
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
import SMSStepTwo from "./SMSStepTwo";

interface SMSStepOneProps {
  smsModalOpen: boolean;
  setSMSModalOpen: (value: boolean) => void;
}

const SMSStepOne = ({ smsModalOpen, setSMSModalOpen }: SMSStepOneProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [stepTwoModalOpen, setStepTwoModalOpen] = useState(false);

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
          <p>{constants.SMS_STEP_ONE_TITLE}</p>
        </Box>

        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>{constants.SMS_STEP_ONE_PARAGRAPH_ONE}</p>
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
            Mobile Number
          </SubHeading>
          <PrimaryPhoneInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e)}
            sx={{
              width: "75%",
            }}
          />
        </Box>

        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>{constants.SMS_STEP_ONE_PARAGRAPH_TWO}</p>
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
            disabled={phoneNumber.length < 11}
          />
        </Box>

        <Box sx={{ margin: "15px 0 0px", textAlign: "center" }}>
          <SecondaryButton />
        </Box>
      </CustomModal>
      {/* 2nd Step of SMS */}
      <SMSStepTwo
        stepTwoModalOpen={stepTwoModalOpen}
        setStepTwoModalOpen={setStepTwoModalOpen}
      />
    </Box>
  );
};

export default SMSStepOne;
