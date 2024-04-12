import { Box } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import constants from "../../../constants";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";

interface SMSStepOneProps {
  smsModalOpen: boolean;
}

const SMSStepOne = ({ smsModalOpen }: SMSStepOneProps) => {
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
          input field
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
          <PrimaryButton />
        </Box>

        <Box sx={{ margin: "15px 0 0px", textAlign: "center" }}>
          <SecondaryButton />
        </Box>
      </CustomModal>
    </Box>
  );
};

export default SMSStepOne;
