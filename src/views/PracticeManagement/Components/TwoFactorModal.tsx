import { Box } from "@mui/material";
import React from "react";
import CustomModal from "../../../components/CustomModal";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import SecondaryButton from "../../../components/SecondaryButton";

interface TwoFactorModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const TwoFactorModal: React.FC<TwoFactorModalProps> = (props) => {
  const { modalOpen, setModalOpen } = props;
  return (
    <>
      <Box>
        <CustomModal
          open={modalOpen}
          setModalOpen={setModalOpen}
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
            <h3>2-Factor Authentication</h3>
          </Box>
          <Box
            sx={{
              fontSize: "21px",
              color: "#414042",
              fontWeight: 500,
              margin: "20px 0 35px 0",
            }}
          >
            <p>Your 2-Factor Authentication Settings</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#414042",
                }}
              >
                <h4>2-Factor Verification</h4>
              </Box>
              <Box
                sx={{
                  fontSize: "16px",
                  color: "#414042",
                }}
              >
                <p>Enable</p>
              </Box>
            </Box>
            <PrimaryButtonTwo
              sx={{
                width: "fit-content",
                padding: "2px 22px",
                height: "fit-content",
                fontSize: "14px",
              }}
            >
              Disabled
            </PrimaryButtonTwo>
          </Box>

          {/* 2nd */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "40px 0 20px 0",
            }}
          >
            <Box>
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#414042",
                }}
              >
                <h4>2-Factor Verification</h4>
              </Box>
              <Box
                sx={{
                  fontSize: "16px",
                  color: "#414042",
                }}
              >
                <p>SMS Text</p>
              </Box>
              <Box
                sx={{
                  fontSize: "16px",
                  color: "#414042",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <p>SMS Number</p>
                <p>(212) XXX-XX34</p>
              </Box>
            </Box>
            <Box
              sx={{
                marginRight: "25px",
                height: "fit-content",
              }}
            >
              <SecondaryButton
                label="CANCEL"
                // onClick={() => navigate("/practice-management/all-users")}
              />
            </Box>
          </Box>
        </CustomModal>
      </Box>
    </>
  );
};

export default TwoFactorModal;
