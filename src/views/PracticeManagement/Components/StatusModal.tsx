// React Imports
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { IoCloseCircleOutline } from "react-icons/io5";
// Custom
import CustomModal from "../../../components/CustomModal";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import SecondaryButtonTwo from "../../../components/SecondaryButton/SecondaryButtonTwo";

interface SiteStatusModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  user?: boolean;
}

const StatusModal = ({
  modalOpen,
  setModalOpen,
  user,
}: SiteStatusModalProps) => {
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
          {user ? (
            <p>
              Are you sure you want to deactivate this user? Their history will
              remain, but they will not be able to sign in to the portal.
            </p>
          ) : (
            <p>
              Are you sure you want to deactivate this site? Its history will
              remain, but users will no longer be able to select it.
            </p>
          )}
        </Box>
        <Box
          sx={{
            background: "#F3F3F3",
            padding: "15px 0",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            "@media (max-width: 576px)": {
              gap: "30px",
            },
          }}
        >
          <SecondaryButtonTwo
            sx={{
              width: "100px",
            }}
            onClick={() => setModalOpen(false)}
          >
            No
          </SecondaryButtonTwo>
          <PrimaryButtonTwo
            sx={{
              width: "100px",
            }}
            onClick={() => navigate("/practice-management/all-sites")}
          >
            Yes
          </PrimaryButtonTwo>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default StatusModal;
