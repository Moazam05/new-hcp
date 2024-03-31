import { Box } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import { IoCloseCircleOutline } from "react-icons/io5";
import PrimaryButton from "../../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import constants from "../../../constants";

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
          fontSize: "21px",
          textAlign: "center",
          color: "#414042",
          fontWeight: 600,
          "@media (max-width: 576px)": {
            fontSize: "16px",
          },
        }}
      >
        <p>{constants.INACTIVE_MODAL_PARAGRAPH_ONE}</p>

        <Box
          sx={{
            color: "red",
            margin: "30px 0",
          }}
        >
          <p>5 Minutes</p>
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
        <PrimaryButton
          label="Ok"
          padding="3px 40px"
          onClick={handleResetTimer}
        />
      </Box>
    </CustomModal>
  );
};

export default InActiveModal;
