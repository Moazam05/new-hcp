// React Imports
import { useState } from "react";
// MUI
import { Box } from "@mui/material";
// Constants
import constants from "../../../constants";
// Custom
import CustomModal from "../../../components/CustomModal";
import { SubHeading } from "../../../components/Heading";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import SMSStepThree from "./SMSStepThree";
import BlueInput from "../../../components/BlueInput";

interface SMSStepTwoProps {
  stepTwoModalOpen: boolean;
  setStepTwoModalOpen: (value: boolean) => void;
}

const SMSStepTwo = ({
  stepTwoModalOpen,
  setStepTwoModalOpen,
}: SMSStepTwoProps) => {
  const [codeValue, setCodeValue] = useState("");
  const [stepThreeModalOpen, setStepThreeModalOpen] = useState(false);

  return (
    <Box>
      <CustomModal
        open={stepTwoModalOpen}
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
            textAlign: "center",
            fontWeight: 500,
            "@media (max-width: 576px)": {
              fontSize: "18px",
              margin: "30px 0 20px 0",
            },
          }}
        >
          <p>{constants.SMS_STEP_TWO_TITLE}</p>
          <p>{constants.SMS_STEP_TWO_PARAGRAPH_ONE}</p>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>{constants.SMS_STEP_TWO_PARAGRAPH_TWO}</p>
        </Box>

        <Box
          sx={{
            width: "75%",
            "@media (max-width: 576px)": {
              width: "100%",
            },
          }}
        >
          <SubHeading
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              margin: "11px 0",
            }}
          >
            CODE
          </SubHeading>

          <BlueInput
            type="text"
            name="codeValue"
            placeholder="8675309"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            marginTop: "100px",
            textAlign: "center",
            "@media (max-width: 576px)": {
              marginTop: "50px",
            },
          }}
        >
          <PrimaryButton
            onClick={() => {
              setStepTwoModalOpen(false);
              setStepThreeModalOpen(true);
            }}
          />
        </Box>

        <Box sx={{ margin: "15px 0 0px", textAlign: "center" }}>
          <SecondaryButton />
        </Box>
      </CustomModal>
      <SMSStepThree stepThreeModalOpen={stepThreeModalOpen} />
    </Box>
  );
};

export default SMSStepTwo;
