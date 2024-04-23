import { Box } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import { IoCloseCircleOutline } from "react-icons/io5";
import PrimaryButton from "../../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import constants from "../../../constants";

interface CancelModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const CancelModal = ({ modalOpen, setModalOpen }: CancelModalProps) => {
  const navigate = useNavigate();

  return (
    <Box>
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
          onClick={() => setModalOpen(false)}
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
            minHeight: "160px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              minHeight: "120px",
            },
          }}
        >
          <p>{constants.CANCEL_MODAL_DESCRIPTION}</p>
        </Box>
        <Box
          sx={{
            background: "#F3F3F3",
            padding: "15px 0",
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            "@media (max-width: 576px)": {
              gap: "30px",
            },
          }}
        >
          <PrimaryButton padding="3px 40px" onClick={() => setModalOpen(false)}>
            No
          </PrimaryButton>
          <PrimaryButton padding="3px 40px" onClick={() => navigate("/")}>
            Yes
          </PrimaryButton>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default CancelModal;
