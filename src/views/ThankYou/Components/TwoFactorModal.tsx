// MUI Imports
import { Box } from "@mui/material";
// Constants
import constants from "../../../constants";
// Assets
import { EmailLogo, SMSLogo } from "../../../assets/images";
// Custom
import CustomModal from "../../../components/CustomModal";
import SMSStepOne from "./SMSStepOne";
import { useState } from "react";

interface TwoFactorModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const TwoFactorModal = ({ modalOpen, setModalOpen }: TwoFactorModalProps) => {
  const [smsModalOpen, setSMSModalOpen] = useState(false);

  return (
    <Box>
      <CustomModal
        open={modalOpen}
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
            fontSize: "16px",
            color: "#414042",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_FIRST_PARAGRAPH}</p>
        </Box>
        <Box
          sx={{
            fontSize: "24px",
            color: "#414042",
            fontWeight: 500,
            margin: "12px 0",
            "@media (max-width: 576px)": {
              fontSize: "18px",
            },
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_SECOND_PARAGRAPH}</p>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
            marginBottom: "17px",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_THIRD_PARAGRAPH}</p>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_FOURTH_PARAGRAPH}</p>
        </Box>

        <Box
          sx={{
            background: "#E0E0E0",
            marginTop: "40px",
            cursor: "pointer",
          }}
          onClick={() => {
            setModalOpen(false);
            setSMSModalOpen(true);
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              padding: "4px 0 0",
              height: "75px",
              "@media (max-width: 576px)": {
                height: "90px",
                padding: "10px 0",
                gap: "20px",
              },
            }}
          >
            <Box>
              <img src={SMSLogo} alt="SMS" />
            </Box>
            <Box>
              <Box
                sx={{
                  fontSize: "18px",
                  color: "#414042",
                  marginBottom: "4px",
                }}
              >
                <p> {constants.FACTOR_AUTHENTICATION_FIFTH_PARAGRAPH}</p>
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                  color: "#414042",
                }}
              >
                <p>{constants.FACTOR_AUTHENTICATION_SIXTH_PARAGRAPH}</p>
                <p>{constants.FACTOR_AUTHENTICATION_SEVENTH_PARAGRAPH}</p>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Email */}
        <Box
          sx={{
            background: "#E0E0E0",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              padding: "0px 12px",
              height: "75px",
              "@media (max-width: 576px)": {
                height: "90px",
                padding: "10px 12px",
                gap: "20px",
              },
            }}
          >
            <Box>
              <img src={EmailLogo} alt="EMAIL" />
            </Box>
            <Box>
              <Box
                sx={{
                  fontSize: "18px",
                  color: "#414042",
                  marginBottom: "4px",
                }}
              >
                <p> {constants.FACTOR_AUTHENTICATION_EIGHTH_PARAGRAPH}</p>
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                  color: "#414042",
                }}
              >
                <p>{constants.FACTOR_AUTHENTICATION_NINTH_PARAGRAPH}</p>
                <p>{constants.FACTOR_AUTHENTICATION_TENTH_PARAGRAPH}</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomModal>
      {/* SMS Modal */}
      <SMSStepOne
        smsModalOpen={smsModalOpen}
        setSMSModalOpen={setSMSModalOpen}
      />
    </Box>
  );
};

export default TwoFactorModal;
