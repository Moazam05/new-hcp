// React Imports
import { useNavigate } from "react-router-dom";
// React Icons
import { IoCloseCircleOutline } from "react-icons/io5";
// MUI
import { Box } from "@mui/material";
// Constants
import constants from "../../../constants";
// Custom
import CustomModal from "../../../components/CustomModal";
import PrimaryButton from "../../../components/PrimaryButton";

interface InActiveModalProps {
  modalOpen: boolean;
  handleResetTimer: () => void;
}

const InActiveModal = ({ modalOpen, handleResetTimer }: InActiveModalProps) => {
  const navigate = useNavigate();

  return (
    <CustomModal open={modalOpen}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
          fontSize: 30,
          color: "#00739a",
          padding: "16px 16px 0",
        }}
        onClick={() => navigate("/")}
      >
        <IoCloseCircleOutline />
      </Box>

      <Box
        sx={{
          padding: "12px 32px",
          fontSize: "20px",
          textAlign: "center",
          color: "#414042",
          fontWeight: 400,
          "@media (max-width: 576px)": {
            fontSize: "16px",
          },
        }}
      >
        <p>{constants.INACTIVE_MODAL_PARAGRAPH_ONE}</p>

        <Box
          sx={{
            color: "#FF0000",
            margin: "30px 0",
            fontSize: "16px",
          }}
        >
          <p>{import.meta.env.VITE_REACT_INACTIVE_MESSAGE}</p>
        </Box>
        <Box>
          <p>{constants.INACTIVE_MODAL_PARAGRAPH_TWO}</p>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F3F3F3",
          padding: "15px 0",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <PrimaryButton padding="3px 40px" onClick={handleResetTimer}>
          OK
        </PrimaryButton>
      </Box>
    </CustomModal>
  );
};

export default InActiveModal;
