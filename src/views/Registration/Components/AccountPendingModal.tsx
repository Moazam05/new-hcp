// MUI Imports
import { Box } from "@mui/material";
// Constants
import constants from "../../../constants";
// Custom
import CustomModal from "../../../components/CustomModal";

const AccountPendingModal = () => {
  return (
    <Box>
      <CustomModal
        open={true}
        sx={{
          width: 675,
          padding: "75px 150px",
          border: "2px solid #979797",
          "@media (max-width: 576px)": {
            padding: "19px",
            width: "90%",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#414042",
            marginBottom: "12px",
            textAlign: "center",
            "@media (max-width: 576px)": {
              marginBottom: "0",
            },
          }}
        >
          <h3>{constants.ACCOUNT_PENDING_MODAL_TITLE}</h3>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            color: "#414042",
            textAlign: "center",
            marginTop: "20px",
            "@media (max-width: 576px)": {
              fontSize: "14px",
            },
          }}
        >
          <p>{constants.ACCOUNT_PENDING_MODAL_PARAGRAPH}</p>
          <p>{constants.ACCOUNT_PENDING_MODAL_PARAGRAPH_TWO}</p>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default AccountPendingModal;
