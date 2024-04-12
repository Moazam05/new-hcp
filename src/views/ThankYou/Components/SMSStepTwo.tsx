import { Box, TextField } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import constants from "../../../constants";
import { useState } from "react";
import { SubHeading } from "../../../components/Heading";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";

interface SMSStepTwoProps {
  stepTwoModalOpen: boolean;
}

const SMSStepTwo = ({ stepTwoModalOpen }: SMSStepTwoProps) => {
  const [codeValue, setCodeValue] = useState("");

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

          <TextField
            type="text"
            label=""
            name="codeValue"
            placeholder="8675309"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
            sx={{
              width: "100%",
            }}
            InputProps={{
              sx: {
                borderRadius: "12px",
                border: "2px solid #91C7E8",
                height: "41px",
                "& fieldset": { border: "none" },
                "& .MuiInputBase-input::placeholder": {
                  textAlign: "center",
                },
              },
            }}
          />
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
              // setSMSModalOpen(false);
              // setStepTwoModalOpen(true);
            }}
          />
        </Box>

        <Box sx={{ margin: "15px 0 0px", textAlign: "center" }}>
          <SecondaryButton />
        </Box>
      </CustomModal>
    </Box>
  );
};

export default SMSStepTwo;
